import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="d-flex justify-content-center">
      <input className=" border border-danger mb-3 " type="search" placeholder="Search Users" onChange={searchChange} />
    </div>
  );
};
SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};
export default SearchBox;
