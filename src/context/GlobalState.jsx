import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: []
};

//create context
export const GlobalContext = createContext(initialState);
// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

//actions 
function deleteTransaction(id){
dispatch({
    type:'DELETE TRANSACTION',
    payload:id
})

}
function AddTransaction(transaction){
  dispatch({
      type:'ADD TRANSACTION',
      payload:transaction
  })
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions,deleteTransaction,AddTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};
