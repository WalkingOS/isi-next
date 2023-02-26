import { Action, State } from "@/components/types/context";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext, Dispatch } from "react";
import { reducer } from "./reducer";

const initialState: State = {
  pageTab: 0,
}

type ContextValue = {
  state: State;
  dispatch: Dispatch<Action>
}

const Context = createContext<ContextValue>({
  state: initialState,
  dispatch:() => {}
})

export const useContextValue = () => {
  return useContext(Context)
}

const ContextProvider = ({children}: {children:JSX.Element}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  )
}

export default ContextProvider