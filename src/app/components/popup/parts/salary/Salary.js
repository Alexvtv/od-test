import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import styles from '../../popup.module.scss';

export const Salary = ({setResult}) => {
    const [salary, setSalary] = useState('');
    const [isInputError, setIsInputError] = useState(false);

    const calculateResult = () => {
        if (salary) {
            const deduction = 260000;
            const annualDeduction = (Number(salary) * 12) * 0.13;

            ReactDOM.unstable_batchedUpdates(() => {
                setSalary('');
                setResult([...new Array(Math.trunc(deduction / annualDeduction)).fill(annualDeduction), deduction % annualDeduction]);
            });
        } else {
            setIsInputError(true);
        }
    };

    const changeInputValue = value => {
        const preparedString = value.replace(/[^0-9]/g, '');
        ReactDOM.unstable_batchedUpdates(() => {
            setIsInputError(false);
            if (preparedString.length < 11) setSalary((Number(preparedString) > 0) ? preparedString : '');
        });
    };

    //Костыль, расчёт отступа символа валюты слева
    const calculateSymbolLeftStyle = () => {
        const numbersArr = salary.split('');
        const onesArrayLength = numbersArr.filter(num => num === '1').length;
        const numbersWidth = onesArrayLength * 6 + ((numbersArr.length - onesArrayLength) * 8.3);

        return `${20 + + numbersWidth}px`;
    }

    return (
        <div className={styles.salary}>
            <p className={styles.subtitle}>Ваша зарплата в месяц</p>
            <input
                className={isInputError
                    ? styles.error
                    : salary.length === 0 ? styles.empty : ''}
                placeholder={isInputError ? '' : 'Введите данные'}
                value={salary}
                onChange={e => changeInputValue(e.target.value)}/>
            {salary.length > 0
                ? <span
                    className={styles.currencySymbol}
                    style={{left: calculateSymbolLeftStyle()}}>₽</span>
                : null}
            {isInputError ? <p className={styles.errorMsg}>Поле обязательно для заполнения</p> : null}
            <button onClick={calculateResult}>Рассчитать</button>
        </div>
    )
}