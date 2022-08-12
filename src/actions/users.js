import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  usersRequest: ['payload'],
  usersSuccess: ['payload'],
  usersFailure: ['payload'],

  userDeleteRequest: ['payload'],
  userDeleteSuccess: ['payload'],
  userDeleteFailure: ['payload'],

  userAddRequest: ['payload'],
  userAddSuccess: ['payload'],
  userAddFailure: ['payload'],

  userRequest: ['payload'],
  userSuccess: ['payload'],
  userFailure: ['payload'],

  userUpdateRequest: ['payload'],
  userUpdateSuccess: ['payload'],
  userUpdateFailure: ['payload'],
});
export default Creators;
