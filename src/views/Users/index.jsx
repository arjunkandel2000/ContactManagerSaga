import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Creators } from '@Actions/users';
import PropTypes from 'prop-types';
import User from './User';
import Scroll from './Scroll';
import SearchBox from './SearchUsers';

const { usersRequest } = Creators;

function Users(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({ searchFields: '' });
  useEffect(() => {
    dispatch(usersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { users } = props;
  console.log('Users', users);

  const searchChange = (e) => {
    setState({ searchFields: e.target.value });
  };
  const { searchFields } = state;
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchFields.toLowerCase());
  });

  return !users.length ? (
    <h1 style={{ color: '#0ccac4', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>Loading Users..........</h1>
  ) : (
    <div>
      <h1 className="display-4">
        <span className="text-danger">Users </span>List
      </h1>
      <SearchBox searchChange={searchChange} />
      <Scroll>
        {filteredUsers.map((userr) => {
          return <User key={userr.id} user={userr} />;
        })}
      </Scroll>
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users.user,
  searchFields: state.users.searchFields,
});
export default connect(mapStateToProps)(Users);
