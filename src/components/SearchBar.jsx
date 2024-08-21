import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterText, setInStockOnly } from '../redux/default/defaultActions';

function SearchBar() {
  const filterText = useSelector(state => state.filterText);
  const inStockOnly = useSelector(state => state.inStockOnly);
  const dispatch = useDispatch();

  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => dispatch(setFilterText(e.target.value))} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => dispatch(setInStockOnly(e.target.checked))} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
