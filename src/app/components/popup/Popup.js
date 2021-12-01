import React, {useState} from 'react';
import {Result, Salary} from './parts';

import styles from './popup.module.scss';

export const Popup = ({setIsActive}) => {
    const [options, setOptions] = useState([{param: 'Платёж', selected: true}, {param: 'Срок', selected: false}]);
    const [result, setResult] = useState(null);

    return (
        <div className={styles.background}>
            <div className={styles.popup}>
                <img
                    className={styles.cross}
                    src={'icons/cross.png'}
                    alt={''}
                    onClick={() => setIsActive(false)}/>
                <h3 className={styles.title}>Налоговый вычет</h3>
                <p className={styles.prompt}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
                    налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                <Salary setResult={setResult}/>
                {result ? <Result data={result}/> : null}
                <div className={styles.options}>
                    <p className={styles.subtitle}>Что уменьшаем?</p>
                    {options.map(({param, selected}, i) => (
                        <div
                            key={i}
                            className={`${styles.option} ${selected ? styles.selectedOption : styles.unselectedOption}`}
                            onClick={() => setOptions(prev => prev.map(option => option.param === param
                                ? {...option, selected: true}
                                : {...option, selected: false}))}>
                            <p>{param}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.button}>Добавить</button>
            </div>
        </div>
    );
};
