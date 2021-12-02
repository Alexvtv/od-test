import React from 'react';
import {endingResolver} from './utils';

import styles from './result.module.scss';

export const Result = ({data}) => {

    return (
        <div className={styles.result}>
            <p className={styles.subtitle}>Итого можете внести в качестве досрочных:</p>
            {data.map((amount, index) => (
                <div key={index} className={styles.annual}>
                    <input type='checkbox'/>
                    <p>{amount.toLocaleString('ru')} рублей
                        <span> {index === 1 ? 'во' : 'в'} {index + 1}-{endingResolver(index + 1)} год</span>
                    </p>
                </div>
            ))}
        </div>
    );
};
