import React, {createContext, useReducer} from 'react';

interface AppState {
  locale: string;
}

const initialState = {
  locale: 'id',
};

type AppAction = {type: 'SET_LOCALE'; value: string};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {...state, locale: action.value};
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const ContextProviders = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProviders;
