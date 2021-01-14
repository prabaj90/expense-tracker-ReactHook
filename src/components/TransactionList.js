import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions.length);
    return (
        <>
            <h3>History</h3>
             <ul className="list">
                { transactions.length > 0 
                ? transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))
                : <li className='listEmpty'>Transaction List is Empty </li>
                }
            
            </ul>
        </>
    )
}
