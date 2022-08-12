import { put, takeLatest, call, delay } from 'redux-saga/effects';
import usersActions, { Types } from '@Actions/users';
import loaderActions from '@Actions/loader.actions';
import { requestGetUser, requestDeleteUser, requestAddUser, requestUpdateUser, requestUser } from '@Services/users';

export function* usersRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
          params: payload,
        },
      }),
    );
    const response = yield call(requestGetUser);
    console.log('api called');
    yield delay(1000);
    const data = yield response.data;
    console.log('kkkkkkkkkkkkk', data);
    yield put(usersActions.usersSuccess(data));
  } catch (error) {
    yield put(usersActions.usersFailure());
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export function* userDeleteRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
          params: payload,
        },
      }),
    );
    // here payload is an id passed from Users component
    console.log(payload);
    yield call(requestDeleteUser, payload);
    console.log('delete api called.');
    yield put(usersActions.userDeleteSuccess(payload));
  } catch (error) {
    yield put(usersActions.userDeleteFailure());
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export function* userAddRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
          params: payload,
        },
      }),
    );
    // here payload is an newUser passed from AddContact component
    // console.log('....', payload);
    const response = yield call(requestAddUser, payload);
    const data = yield response.data;
    console.log('add api called.');
    // console.log(response.data);
    yield put(usersActions.userAddSuccess(data));
  } catch (error) {
    yield put(usersActions.userAddFailure());
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export function* userRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
          params: payload,
        },
      }),
    );
    console.log('print id', payload);
    const response = yield call(requestUser, payload);
    const data = yield response.data;
    console.log(' api for single user called.');
    console.log(response.data);
    yield put(usersActions.userSuccess(data));
  } catch (error) {
    yield put(usersActions.userFailure());
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export function* userUpdateRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
          params: payload,
        },
      }),
    );
    const response = yield call(requestUpdateUser, payload);
    const { data } = response;
    console.log('api for edit called.');
    console.log(response.data);
    yield put(usersActions.userUpdateSuccess(data));
  } catch (error) {
    yield put(usersActions.userUpdateFailure());
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

function* usersWatcher() {
  yield takeLatest(Types.USERS_REQUEST, usersRequest);
  yield takeLatest(Types.USER_DELETE_REQUEST, userDeleteRequest);
  yield takeLatest(Types.USER_ADD_REQUEST, userAddRequest);
  yield takeLatest(Types.USER_REQUEST, userRequest);
  yield takeLatest(Types.USER_UPDATE_REQUEST, userUpdateRequest);
}
export default usersWatcher;
