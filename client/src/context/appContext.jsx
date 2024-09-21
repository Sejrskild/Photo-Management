/*

  This file contains the AppProvider component, which is a custom component that wraps the entire app, and makes the app context available to all components.

  It also contains the useAppContext hook, which is a custom hook that can be used to access the app context from any component.

  The app context is used to store global state, such as the user, and the firstLaunch status.

*/

import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

import {} from "./actions";

const initialState = {
  test: "The test is working.",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
