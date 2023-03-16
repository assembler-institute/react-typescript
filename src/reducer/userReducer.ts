import { UserState, UserAction, UserActionType } from '../interfaces'

export const userReducer = (state: UserState, action: UserAction) => {
  const { type, payload } = action
  switch (type) {
    case UserActionType.UPDATE_USER:
      return { ...state, ...payload }
    default:
      return state
  }
}
