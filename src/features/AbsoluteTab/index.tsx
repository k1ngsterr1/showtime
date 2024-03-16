import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faRedo,
  faCheck,
  faSignOutAlt,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ControlPanel.module.scss"; // Make sure to have the appropriate styles

const ControlPanel = () => {
  // Here you can manage the state if needed for toggling the icons
  // For example, you can have a state to track if the video or microphone is enabled

  return (
    <div className={styles.controlPanel}>
      <button>
        <FontAwesomeIcon icon={faVideo} />
        <span>Video on</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faMicrophone} />
        <span>Microphone on</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faRedo} />
        <span>Refresh camera</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faCheck} />
        <span>Ready</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Leave</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faEllipsisH} />
        <span>Show more</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faCog} />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default ControlPanel;
