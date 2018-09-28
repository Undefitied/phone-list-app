import axios from 'axios'
import { getDataFromResponse } from '../utils/state';

export const GET_PHONES_START = 'GET_PHONES_START'
export const GET_PHONES_SUCCESS = 'GET_PHONES_SUCCESS'
export const GET_PHONES_FAIL = 'GET_PHONES_FAIL'

export const getPhones = () => dispatch => {
  dispatch(getPhonesStart())

  axios.get('/phones.json')
    .then((response) => {
      setTimeout(() => { // to demonstrate loader

        dispatch(getPhonesSuccess(
          getDataFromResponse(response)
        ))

      }, 3000)
    })
    .catch(() => {
      dispatch(getPhonesFail())
    })

}

export const getPhonesStart = () => ({
  type: GET_PHONES_START
})

export const getPhonesSuccess = data => ({
  type: GET_PHONES_SUCCESS,
  data
})

export const getPhonesFail = errorId => ({
  type: GET_PHONES_FAIL,
  errorId
})
