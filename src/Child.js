import { useContext, useState } from "react";
import {TransactionContext} from "./transContext";
function Child() {
    
    let {transactions, addTransaction, deleteTransaction} = useContext(TransactionContext);

    let [NewDesc, setDesc] = useState("");
    let [NewAmount, setAmount] = useState("");  


    const handleAddition = (event) => {
        
        event.preventDefault();
        if(Number(NewAmount) === 0){
            alert('Please enter correct amount');
            return false;
        }

        addTransaction({
            id:new Date().getTime(),
            desc:NewDesc,
            amount:Number(NewAmount)

        });
    }


    const getIncome = () => {
        let income = 0;
        for(var i = 0; i < transactions.length; i++){
            if(transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for(var i = 0; i < transactions.length; i++){
            if(transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> $ {getIncome() + getExpense()}</h3>
            <div className="expense-container">
                <h3>Income <br /> $ {getIncome()}</h3>
                <h3>Expense <br /> $ {getExpense()}</h3>
            </div>
            <h3>History</h3><hr/>
            <ul className="transaction-list">
                {transactions.map((transObj) => {
                    return(
                        <li key={transObj.id}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                            <button className="del-btn" onClick={()=>deleteTransaction(transObj.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
            <h3>Add New Transaction</h3><hr/>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br/>
                    <input type="text" value={NewDesc} placeholder="Enter Description" required onChange={(ev) => setDesc(ev.target.value)} />
                </label>
                <label>
                    Enter Amount<br/>
                    <input type="text" value={NewAmount} placeholder="Enter Amount" required onChange={(ev) => setAmount(ev.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}

export default Child;