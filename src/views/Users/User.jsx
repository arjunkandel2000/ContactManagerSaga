/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators } from '@Actions/users';
import { Link } from 'react-router-dom';

// display nothing on clicking outise the the element hook
// const useClickOutside = (handler) => {
//   const domNode = useRef();

//   useEffect(() => {
//     const maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener('mousedown', maybeHandler);

//     return () => {
//       document.removeEventListener('mousedown', maybeHandler);
//     };
//   });

//   return domNode;
// };

function User({ user }) {
  const [pageInfo, setPageInfo] = useState(true);
  const { userDeleteRequest } = Creators;
  const dispatch = useDispatch();
  const handleClick = () => setPageInfo((pageInfo1) => !pageInfo1);
  const handleDelete = (id) => dispatch(userDeleteRequest(id));
  const { id, name, email } = user;
  // const domNode = useClickOutside(() => {
  //   setPageInfo(false);
  // });
  return (
    <div className="card card-body mb-3">
      <h1>
        {name}
        <i
          className="fas fa-sort-down"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          label="Dropdown"
          style={{ color: 'grey' }}
        />
        <Link to={`/edit/${id}`}>
          <i className="fas fa-pencil-alt" style={{ color: 'blue', paddingLeft: '5px', cursor: 'pointer' }} />
        </Link>
        <i
          className="fas fa-times"
          onClick={() => handleDelete(id)}
          role="button"
          tabIndex={0}
          label="Delete"
          style={{ cursor: 'pointer', color: 'red', float: 'right' }}
        />
      </h1>
      {pageInfo ? (
        //  ref={domNode}
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
        </ul>
      ) : null}
    </div>
  );
}
User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
