import { getDataObjectFromArray } from './index';

export const getInitialState = () => ({
  data: null,
  isLoading: null,
  errorId: null,
})

export const getLoadingState = (state = getInitialState()) => ({
  ...state,
  isLoading: true,
})

export const getSuccessState = (state, data) => ({
  ...state,
  data,
  isLoading: false,
})

export const getFailState = (state, errorId = true) => ({
  ...state,
  errorId,
  isLoading: false,
})

export const hasData = state => state.data !== null

export const getDataFromResponse = response => {
  const byId = getDataObjectFromArray(response.data)
  const allIds = Object.keys(byId)

  return {
    byId,
    allIds,
  }
}
