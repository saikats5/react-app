import { ActionTypes } from '../constants/action-types'
import fakeStoreApi from '../../apis/fakeStoreApi'

export const fetchProducts = (products) => {
  return async (dispatch, getState) => {
    const response = await fakeStoreApi.get('/products')
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    })
  }
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}
