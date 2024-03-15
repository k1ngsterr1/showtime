import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

interface FaceIdAuthProps {
  modelsUrl: string;
  onAuthenticated: () => void;
}

const FaceIdAuthComponent: React.FC<FaceIdAuthProps> = ({
  modelsUrl,
  onAuthenticated,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(modelsUrl),
        faceapi.nets.faceLandmark68Net.loadFromUri(modelsUrl),
        faceapi.nets.faceRecognitionNet.loadFromUri(modelsUrl),
      ]);
      setIsModelLoaded(true);
    };

    loadModels();
  }, [modelsUrl]);

  const handleAuth = async () => {
    if (webcamRef.current && isModelLoaded) {
      const imageSrc = webcamRef.current.getScreenshot();
      const image = await fetch(imageSrc).then((res) => res.blob()); // Convert base64 to Blob
      const img = await faceapi.bufferToImage(image);
      const detections = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (detections) {
        console.log("Face detected:", detections.descriptor);
        onAuthenticated();
      } else {
        console.log("No face detected");
      }
    }
  };

  return (
    <div>
      {isModelLoaded ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
      ) : (
        <div>Loading models...</div>
      )}
      <button onClick={handleAuth}>Authenticate</button>
    </div>
  );
};

export default FaceIdAuthComponent;
