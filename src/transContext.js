import React, { createContext, useReducer } from "react"
import TransactionReducer from "./transReducer";

const InitialTransactions ={
    transactions :[
        {id:1, amount:6000, desc:"Cash"},
        {id:2, amount:-1200, desc:"Book"},
        {id:3, amount:2500, desc:"Deposit"}
    ]
}

export const TransactionContext = createContext(InitialTransactions);

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, InitialTransactions);
    
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id:transObj.id,
                amount:transObj.amount, 
                desc:transObj.desc,
            }
        })
    }

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        })
    }

    return(
        <TransactionContext.Provider value={
            {
            transactions:state.transactions,
            addTransaction,
            deleteTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}
