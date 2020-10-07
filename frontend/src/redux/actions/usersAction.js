import sendHttpRequest from '../../apiRequest';
const BACKEND_URL = 'http://localhost:3000';

//ADD token in the header
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
  }
  return config;
};

/*  localStorage.setItem("token", data.token)
        dispatch(setUser(data.user)) */

export const login = ({ username, password }) => async dispatch => {
  const body =  {username, password} ;
  try {
      const res = await sendHttpRequest("POST" ,`${BACKEND_URL}/api/session`, body );
      localStorage.setItem("token", data.token)
      return dispatch({ type: LOGIN_SUCCESS, payload_token: res.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};