import { ISingleUser } from '../entities/users'
import * as actionTypes from '../actions/actionTypes/userTypes'
import { isJSDocNullableType } from 'typescript'

export interface IUsersReducer {
  usersList: ISingleUser[]
  currentUser: ISingleUser | null
}

const defaultState = (): IUsersReducer => ({
  usersList: [],
  currentUser: null,
})

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      const payload: actionTypes.IUserTypes['GET_USERS'] = action
      return {
        ...state,
        usersList: payload.data.usersList,
      }
    }
    default: {
      return state
    }
  }
}
