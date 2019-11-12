import React, { useReducer } from 'react';

// This is a proposition of context creation, if something is not clear, don't hesitate to ask

// function that generates new context
const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    // loop through actions
    for (let key in actions) {
      // this let's us use dispatch method in context actions
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  // Provider object is needed for providing global data
  // Context object is needed for consuming the context with useContext hook
  // e.g. const {state, (there you can extract any action you need)} = useContext(Context);
  return { Context, Provider };
};

export default createDataContext;
