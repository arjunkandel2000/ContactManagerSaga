import React from 'react';
import PropTypes from 'prop-types';

const Scroll = (props) => {
  const { children } = props;
  return <div style={{ overflowY: 'scroll', height: '1000px', border: '2px solid black' }}>{children}</div>;
};
Scroll.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Scroll;
