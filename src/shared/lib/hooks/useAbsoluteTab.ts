import React, { useState } from 'react'

import styles from '@entities/Tab_Components/AbsoluteTab/ControlPanel.module.scss'

export const useAbsoluteTab = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActiveMicro, setIsActiveMicro] = useState(false);
    const [isActiveReady, setIsActiveReady] = useState(false);

    const toggleReady = () => {
        setIsActiveReady(!isActiveReady);
    };

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    const toggleMicrophone = () => {
        setIsActiveMicro(!isActiveMicro);
    };

    const buttonClass = isActive ? styles.videoButtonActive : styles.videoButton;
    const buttonClassMicro = isActiveMicro ? styles.videoButtonActive : styles.videoButton;
    const buttonClassReady = isActiveReady ? styles.videoButtonActive : styles.videoButton;


    return {
        toggleReady,
        toggleButton,
        toggleMicrophone,
        buttonClass,
        buttonClassMicro,
        buttonClassReady,
    }
}
