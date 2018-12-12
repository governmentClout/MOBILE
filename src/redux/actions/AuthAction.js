import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    EMAIL_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
    LOADING, LOGIN_UPDATE, REGISTER_UPDATE,
    CLEAR_ERRORS, GET_ERRORS, GET_MESSAGE,
    LOGOUT_USER, INITIALIZE_USER, EMPTY_STATE,
    RESET_UUID
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';
import { getMyProfile } from '.';

export const registerUpdate = (text) => {

    return {
        type: REGISTER_UPDATE,
        payload: text
    }
};

export const loginUpdate = (text) => {

    return {
        type: LOGIN_UPDATE,
        payload: text
    }
};

export const passwordChanged = (text) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = (data, from = "login") => {
    return (dispatch) => {

        const { api_url } = settings;
        clearErrors(dispatch);
        dispatch(startLoading());
        clearMessage(dispatch);
        console.log(data, "m here");
        axios.post(api_url + 'login', data)
            .then(res => {
                console.log(res.data, "login successful");
                dispatch(stopLoading());
                let payload = res.data.user;
                if (data.password) {
                    payload.password = data.password;
                }


                loginUserSuccess(dispatch, payload, from);

            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response.data);
            })
    }
};

export const initializeUser = () => {
    return (dispatch) => {

        AsyncStorage.getItem('user')
            .then(user => {
                console.log(user);

                if (user) {
                    activateAxios(JSON.parse(user));
                    dispatch(getMyProfile(JSON.parse(user).uuid));

                    dispatch({
                        type: INITIALIZE_USER,
                        payload: JSON.parse(user)
                    });

                } else {
                    Actions.auth({ type: 'reset' })
                    dispatch({
                        type: EMPTY_STATE,
                    });
                }

            })
            .catch(err => { console.log(err) });

    }
};

export const registerUser = (data) => {
    return (dispatch) => {

        const { api_url } = settings;

        clearErrors(dispatch);
        clearMessage(dispatch);
        dispatch(startLoading());

        axios.post(api_url + 'users', data)
            .then(res => {

                dispatch(stopLoading());
                dispatch(loginUser(data, "register"));
            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 400) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const resetPassword = (data) => {
    return (dispatch) => {

        const { api_url } = settings;

        clearErrors(dispatch);
        clearMessage(dispatch);
        dispatch(startLoading());

        axios.post(api_url + 'resets', data)
            .then(res => {

                dispatch(stopLoading());
                Actions.resetpassword();
            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 400) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const processRequest = (data) => {
    return (dispatch) => {

        const { api_url } = settings;

        clearErrors(dispatch);
        clearMessage(dispatch);
        dispatch(startLoading());

        axios.post(api_url + 'resets/code', data)
            .then(res => {
                // console.log(res.data);
                dispatch(stopLoading());
                dispatch({
                    type: RESET_UUID,
                    payload: res.data.uuid
                });
                Actions.changepassword();
            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 400) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};


export const changePassword = (data) => {
    return (dispatch) => {

        const { api_url } = settings;

        clearErrors(dispatch);
        clearMessage(dispatch);
        dispatch(startLoading());

        axios.put(api_url + 'resets', data)
            .then(res => {
                console.log(res);
                dispatch(stopLoading());
                dispatch(loginUser(data));

            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 400) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        delete axios.defaults.headers.common['token'];
        delete axios.defaults.headers.common['uuid'];
        Actions.auth({ type: 'reset' });
        dispatch({
            type: LOGOUT_USER,
            payload: {}
        });
    }
};


const clearErrors = (dispatch) => {
    dispatch({
        type: GET_ERRORS,
        payload: ""
    });
}

const clearMessage = (dispatch) => {
    dispatch({
        type: GET_MESSAGE,
        payload: ''
    });
}

const loginUserSuccess = (dispatch, user, from = "login") => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    if (from != 'login') {
        Actions.createprofile({ type: 'reset' });

    } else {
        Actions.drawer({ type: 'reset' });
    }

};

export const initializeUserDetails = (user) => {
    return (dispatch) => {
        dispatch({
            type: INITIALIZE_USER,
            payload: JSON.parse(user)
        });
    }
}


const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL

    });
    stopLoading();
};

const activateAxios = (payload) => {
    axios.defaults.headers.common['token'] = payload.token;
    axios.defaults.headers.common['uuid'] = payload.uuid;
}