import { State, ActionType, Action } from "@/components/types/context";

export const reducer = (state:State, action:Action):State => {
  switch(action.type) {
    case ActionType.UPDATE_PAGE_TAB:
      return {...state, pageTab:action.payload}
    default:
      return state;
  }
}