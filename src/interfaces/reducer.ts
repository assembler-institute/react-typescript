/* eslint-disable no-unused-vars */
export interface UserState {
    id: number;
    name: string;
    email: string;
    age: number;
  }

export enum UserActionType {
    UPDATE_USER = 'UPDATE_USER',
  }

export interface UserAction {
    type: UserActionType;
    payload: UserState;
  }
