import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators } from '@Actions/users';
import history from '@Utils/history';
import TextInputGroup from './TextInputGroup';

const { userAddRequest } = Creators;

function AddUser() {
  const [user, setUser] = useState({ name: '', email: '', errors: {} });
  const dispatch = useDispatch();
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
    const newUser = {
      name,
      email,
    };
    dispatch(userAddRequest(newUser));

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
  // const onChange = (e) => setUser({ [e.target.name]: e.target.value });
  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUser((values) => ({ ...values, [name]: value }));
  };
  const { name, email, errors } = user;
  return (
    <div className="card mb-3">
      <div className="card-header">Add Contacts</div>
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
          <input type="submit" value="Add User" className="btn btn-light btn-block" />
        </form>
      </div>
    </div>
  );
}
export default AddUser;
