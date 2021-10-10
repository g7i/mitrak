import {StateType, ActionTypes, ActionType, UseActionType} from './types';
import {AuthUser} from "../utils/firebase/users";
import {Dispatch} from "react";

export default function useActions(state: StateType, dispatch: Dispatch<ActionType>): UseActionType {
    const updateUser = (user: AuthUser) => dispatch({type: ActionTypes.UPDATE_USER, payload: user});

    return {
        updateUser,
    };
}
