import axios from 'axios';

export const FETCH_TOKEN: 'FETCH_TOKEN' = 'FETCH_TOKEN';
export const TOKEN_SUCCESS: 'TOKEN_SUCCESS' = 'TOKEN_SUCCESS';
export const TOKEN_FAIL: 'TOKEN_FAIL' = 'TOKEN_FAIL';
export const TOKEN_CLEAR: 'TOKEN_CLEAR' = 'TOKEN_CLEAR';

// @todo change this
export function login(name: any, password: any) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_TOKEN });

    function onSuccess(success) {
      dispatch({ type: TOKEN_SUCCESS, payload: success });
      return success;
    }

    function onError(error) {
      dispatch({ type: TOKEN_FAIL, error });
      return error;
    }

    try {
      const success = await axios({
        method: 'POST',
        url: '/login',
        data: {
          name,
          password,
        },
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}

export function logout() {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_TOKEN });

    function onSuccess(success) {
      dispatch({ type: TOKEN_CLEAR});
      return success;
    }

    function onError(error) {
      dispatch({ type: TOKEN_FAIL, error });
      return error;
    }

    try {
      const success = await axios({
        method: 'GET',
        url: '/logout',
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
