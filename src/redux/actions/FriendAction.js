import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';

import {
    GET_MY_FRIENDS, GET_PENDING_FRIEND_REQUESTS,
    GET_BLOCKED_FRIEND_REQUESTS, GET_MESSAGE,
    GET_USERS, SEARCH_USERS
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';
import { ToastAndroid } from 'react-native';


export const sendFriendRequest = (data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'friends/request', data)
            .then(res => {
                console.log(res);
                
                dispatch(stopLoading());

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

                console.log(err.response);
            })
    }
};

export const acceptFriendRequest = (data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'friends/accept', data)
            .then(res => {

                dispatch(stopLoading());

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

                console.log(err.response);
            })
    }
};


export const ignoreFriendRequest = (data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'friends/ignore', data)
            .then(res => {

                dispatch(stopLoading());

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

                console.log(err.response);
            })
    }
};

export const blockFriendRequest = (data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'friends/block', data)
            .then(res => {

                dispatch(stopLoading());

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

                console.log(err.response);
            })
    }
};


export const getMyFriends = () => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'friends')
            .then(res => {
                console.log(res);
                dispatch({
                    type: GET_MY_FRIENDS,
                    payload: res.data.friends
                });
            })
            .catch(err => {

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

                console.log(err.response);
            })
    }
}

export const getPendingFriendRequest = () => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'friends/pending')
            .then(res => {
                console.log(res);
                dispatch({
                    type: GET_PENDING_FRIEND_REQUESTS,
                    payload: res.data.friends
                });
            })
            .catch(err => {

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

                console.log(err.response);
            })
    }
}

export const getBlockedFriendRequest = () => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'friends/blocked')
            .then(res => {
                console.log(res);
                dispatch({
                    type: GET_BLOCKED_FRIEND_REQUESTS,
                    payload: res.data.friends
                });
            })
            .catch(err => {

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

                console.log(err);
            })
    }
}


export const getUsers = () => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'users')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_USERS,
                    payload: res.data
                });
            })
            .catch(err => {

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

                console.log(err.response);
            })
    }
}

export const searchFriends = (query) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_USERS,
            payload: query
        });
    }
}


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
