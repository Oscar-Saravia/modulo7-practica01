import { combineReducers } from 'redux';
import { SET_FILTER_TEXT, SET_IN_STOCK_ONLY, SET_PRODUCTS } from './default/defaultTypes';

const filterText = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return action.text;
    default:
      return state;
  }
}

const inStockOnly = (state = false, action) => {
  switch (action.type) {
    case SET_IN_STOCK_ONLY:
      return action.checked;
    default:
      return state;
  }
}

const products = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  filterText,
  inStockOnly,
  products
});

export default rootReducer;
