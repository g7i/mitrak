import {StateType, ActionTypes, ActionType, ContextType} from './types';
import useActions from "./actions";

export const initialState: StateType = {
  user: null,
};

export const initialContext: ContextType = {
  state: initialState,
  dispatch: () => {
    throw new Error('setDispatch function must be overridden');
  },
  actions: {
    updateUser: user => {},
  },
};

export default function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
