import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  user: [],
  categories: [],
  subcategories: [],
  products: [],
  cart: [],
  address: [],
  wishlist: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const useMyContext = () => {
  return useContext(AppContext);
};
