import React from 'react';

const SearchBox = props => {
  return (
    <div className="searchBox">
      <form >
      <input placeholder={props.searchField} onChange={props.searchChange} />
      <button type="button" onClick={props.submit}>Search</button>
      <button type="button" onClick={props.clear}>Clear</button>
      </form>
      </div>
      
  );
}

export default SearchBox;