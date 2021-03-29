import { ERROR_HANDLE, SET_USER, SUCCESS_HANDLE } from './types';
import axios from 'axios';

export const axiosRequest = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url, {
        headers: {
          authorization: localStorage.token,
        },
      });
      dispatch(successHandle(response.data));
    } catch (error) {
      dispatch(errorHandle(error));
    }
    return 'done';
    // return { type: SET_USER }
  };
};

export const successHandle = (data) => {
  return { type: SUCCESS_HANDLE, payload: data };
};

export const errorHandle = (error) => {
  return { type: ERROR_HANDLE, payload: error.message };
};
