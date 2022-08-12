import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = {
  user: [],
  isLoading: true,
  singleUser: {},
};

// Get users
const usersRequest = (state = initialState) => ({ ...state, isLoading: true });
const usersSuccess = (state = initialState, action) => {
  return { ...state, user: action.payload, isLoading: false };
};
const usersFailure = (state = initialState) => ({ ...state, isLoading: true });

// Delete users
const userDeleteRequest = (state = initialState) => ({ ...state });
const userDeleteSuccess = (state = initialState, action) => ({
  ...state,
  user: state.user.filter((userr) => userr.id !== action.payload),
});
const userDeleteFailure = (state = initialState) => ({ ...state });

// Add Users
const userAddRequest = (state = initialState) => ({ ...state });
const userAddSuccess = (state = initialState, action) => ({
  ...state,
  user: [action.payload, ...state.user],
});
const userAddFailure = (state = initialState) => ({ ...state });

// Single User
const userRequest = (state = initialState) => ({ ...state });
const userSuccess = (state = initialState, action) => ({
  ...state,
  singleUser: action.payload,
});
const userFailure = (state = initialState) => ({ ...state });
// update user
const userUpdateRequest = (state = initialState) => ({ ...state });
const userUpdateSuccess = (state = initialState, action) => ({
  ...state,
  // eslint-disable-next-line no-return-assign, no-param-reassign
  user: state.user.map((eachUser) => (eachUser.id === action.payload.id ? (eachUser = action.payload) : eachUser)),
});
const userUpdateFailure = (state = initialState) => ({ ...state });
const userReducer = createReducer(initialState, {
  [Types.USERS_REQUEST]: usersRequest,
  [Types.USERS_SUCCESS]: usersSuccess,
  [Types.USERS_FAILURE]: usersFailure,
  [Types.USER_DELETE_REQUEST]: userDeleteRequest,
  [Types.USER_DELETE_SUCCESS]: userDeleteSuccess,
  [Types.USER_DELETE_FAILURE]: userDeleteFailure,
  [Types.USER_ADD_REQUEST]: userAddRequest,
  [Types.USER_ADD_SUCCESS]: userAddSuccess,
  [Types.USER_ADD_FAILURE]: userAddFailure,
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
  [Types.USER_UPDATE_REQUEST]: userUpdateRequest,
  [Types.USER_UPDATE_SUCCESS]: userUpdateSuccess,
  [Types.USER_UPDATE_FAILURE]: userUpdateFailure,
});
export default userReducer;
