import React from 'react';

import styles from './startButton.module.scss';

export const StartButton = ({setIsActive}) => {

    return (
        <div className={styles.background}>
            <button className={styles.button} onClick={() => setIsActive(true)}>
                Налоговый вычет
            </button>
        </div>
    );
};
