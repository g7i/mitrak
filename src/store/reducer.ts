import {StateType, ActionTypes, ActionType, ContextType} from './types';

export const initialState: StateType = {
  user: null,
};

export const initialContext: ContextType = {
  state: initialState,
  dispatch: () => {
    throw new Error('dispatch function must be overridden');
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
