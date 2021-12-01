import React, {useState} from 'react';
import {StartButton, Popup} from './components';

import styles from './app.module.scss'

export const App = () => {
    //Состояние активности попапа
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.app}>
            {isActive
                ? <Popup setIsActive={setIsActive}/>
                : <StartButton setIsActive={setIsActive}/>}
        </div>
    );
};
