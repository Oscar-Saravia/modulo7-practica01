import {
  SET_FILTER_TEXT,
  SET_IN_STOCK_ONLY,
  SET_PRODUCTS,
} from "./defaultTypes";

export const setFilterText = (text) => {
  return { type: SET_FILTER_TEXT, text };
}

export const setInStockOnly = (checked) => {
  return { type: SET_IN_STOCK_ONLY, checked };
}

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, products };
}
