import {
  getFailState,
  getLoadingState,
  getSuccessState
} from '../utils/state'

import {
  GET_PHONES_START,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL
} from '../actions/phonesActions'

const phonesReducer = (state = getLoadingState(), action) => {
  switch (action.type) {

    case GET_PHONES_START:
      return getLoadingState(state)

    case GET_PHONES_SUCCESS:
      return getSuccessState(state, action.data)

    case GET_PHONES_FAIL:
      return getFailState(state, action.errorId)

    default:
      return state
  }
}

export default phonesReducer
