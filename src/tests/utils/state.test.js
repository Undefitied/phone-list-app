import {
  getDataFromResponse, getFailState, getInitialState, getLoadingState,
  getSuccessState, hasData
} from '../../utils/state';
import { getDataObjectFromArray } from '../../utils';

const response = {
  data: [
    { id: 'someId', someKey: '123', name: 'yur' },
    { id: 'idSome', someKey: '567', name: 'ouy' },
  ]
}

describe('get normalized data for store from response', () => {

  const byId = getDataObjectFromArray(response.data)
  const arrayIds = ['someId', 'idSome']

  const results = getDataFromResponse(response)

  it('should have byId property', () => {
    expect(results).toHaveProperty('byId')
  })

  it('should have byId property with correct data', () => {
    expect(results.byId).toEqual(byId)
  })

  it('should have allIds property', () => {
    expect(results).toHaveProperty('allIds')
  })

  it('should have allIds property with array of object ids', () => {
    expect(Object.values(results.allIds)).toEqual(
      expect.arrayContaining(
        arrayIds
      )
    )
  })

})

describe('store structure', () => {
  const initialData = {
    data: null,
    isLoading: null,
    errorId: null,
  }

  const state = { current: null }
  const data = getDataFromResponse(response)

  it('should return initial state', () => {
    state.current = getInitialState()
    expect(state.current).toEqual(initialData)
  })

  it('should return success state and save data', () => {
    state.current = getSuccessState(state.current, data)

    expect(state.current).toEqual({
      ...initialData,
      data,
      isLoading: false,
    })
  })

  it('should return loading state and reset data', () => {
    state.current = getLoadingState()

    expect(state.current).toEqual({
      ...initialData,
      isLoading: true,
    })
  })

  it('should return loading state and save data', () => {
    state.current = getSuccessState(state.current, data)
    state.current = getLoadingState(state.current)

    expect(state.current).toEqual({
      ...initialData,
      data,
      isLoading: true,
    })
  })

  it('should return fail state with default error', () => {
    state.current = getFailState(state.current)

    expect(state.current).toEqual({
      ...initialData,
      data,
      isLoading: false,
      errorId: true
    })
  })

  it('should return fail state with custom error', () => {
    const errorId = 'my error'
    state.current = getFailState(state.current, errorId)

    expect(state.current).toEqual({
      ...initialData,
      data,
      isLoading: false,
      errorId
    })
  })

  it('should return fail state and clear data', () => {
    state.current = getFailState({
      ...state.current,
      data: getInitialState().data,
    })

    expect(state.current).toEqual({
      ...initialData,
      isLoading: false,
      errorId: true
    })
  })

  it('should return false if state doesn\'t have data', () => {
    state.current = getInitialState()

    expect(hasData(state.current)).toBe(false)
  })

  it('should return true if state has data', () => {
    state.current = getSuccessState(state.current, data)

    expect(hasData(state.current)).toBe(true)
  })
})
