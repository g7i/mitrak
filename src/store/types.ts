import {AuthUser} from "../utils/firebase/users";
import {Dispatch} from "react";

export enum ActionTypes {
    UPDATE_USER = 'UPDATE_USER',
}

export interface StateType {
    user: AuthUser | null,
}

export type ActionType = {
    type: ActionTypes,
    payload: any,
}

export type UseActionType = {
    updateUser: (user: AuthUser) => void,
}

export type ContextType = {
    state: StateType,
    dispatch: Dispatch<ActionType>,
    actions: UseActionType,
}
