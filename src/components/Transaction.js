import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className= {sign === '-'?'minus':'plus'} tabindex="0">
            {transaction.text} <span>{sign}&#x20B9;{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" tabindex="-1" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
