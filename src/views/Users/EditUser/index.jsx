import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Creators } from '@Actions/users';
import history from '@Utils/history';
import PropTypes from 'prop-types';
import TextInputGroup from '../AddUser/TextInputGroup';

function EditUser(props) {
  const [user, setUser] = useState({ name: '', email: '', errors: {} });
  const dispatch = useDispatch();
  const { userRequest, userUpdateRequest } = Creators;
  const { id } = useParams();
  console.log('diddld', typeof id);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => dispatch(usersRequest()), []);
  // console.log('singeluer', singleUser);
  // console.log('singeluerttttttttttt', users);

  // useEffect(() => {
  //   return () => {
  //     if (id) {
  //       const oneUser = users.find((usere) => usere.id === Number(id));
  //       // const { name, email } = oneUser;
  //       console.log('.....', oneUser);
  //       setUser({ ...oneUser });
  //     }
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    const { singleUser } = props;
    console.log('singeluer', singleUser);
    const { name, email } = singleUser;
    if (name || email !== '') {
      setUser({ name, email });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    dispatch(userRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email } = user;

    // Check For Errors
    if (name === '') {
      setUser({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      setUser({ errors: { email: 'Email is required' } });
      return;
    }
    const updateUser = {
      id,
      name,
      email,
    };
    dispatch(userUpdateRequest(updateUser));

    // clear state
    setUser({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
    // route to user page
    history.push('/user');
  };
  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUser((values) => ({ ...values, [name]: value }));
  };
  const { name, email, errors } = user;
  return (
    <div className="card mb-3">
      <div className="card-header">Edit Users</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <TextInputGroup
            name="name"
            label="Name"
            onChange={onChange}
            type="text"
            placeholder="Enter Name"
            value={name || ''}
            error={errors?.name || ''}
          />
          <TextInputGroup
            name="email"
            label="Email"
            onChange={onChange}
            type="email"
            placeholder="Enter Email"
            value={email || ''}
            error={errors?.email || ''}
          />
          <input type="submit" value="Edit User" className="btn btn-light btn-block" />
        </form>
      </div>
    </div>
  );
}
EditUser.propTypes = {
  singleUser: PropTypes.object.isRequired,
  // users: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  singleUser: state.users.singleUser,
  // users: state.users.user,
});

export default connect(mapStateToProps)(EditUser);
