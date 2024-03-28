import { useState } from 'react';

export const useWebRoom = () => {
    const [showCamera, setShowCamera] = useState(false);
    const [isCamera2Active, setIsCamera2Active] = useState(false);
    const [isCamera3Active, setIsCamera3Active] = useState(false);
    const [isCamera4Active, setIsCamera4Active] = useState(false);
    const [isCamera5Active, setIsCamera5Active] = useState(false);
    const [isCamera6Active, setIsCamera6Active] = useState(false);
    const [isCamera7Active, setIsCamera7Active] = useState(false);
    const [isCamera8Active, setIsCamera8Active] = useState(false);
    const [isCamera9Active, setIsCamera9Active] = useState(false);
    const [isCamera10Active, setIsCamera10Active] = useState(false);
    const [isCamera11Active, setIsCamera11Active] = useState(false);


    const toggleCamera = () => {
        setShowCamera(prevShowCamera => !prevShowCamera);
    }

    return {
        showCamera,
        toggleCamera,
        isCamera2Active,
        isCamera3Active,
        isCamera4Active,
        isCamera5Active,
        isCamera6Active,
        isCamera7Active,
        isCamera8Active,
        isCamera9Active,
        isCamera10Active,
        isCamera11Active,

    };
}