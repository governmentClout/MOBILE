import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";
import { encode } from './../../Helper';

import {
    PROFILE_UPDATE, GET_ERRORS,
    GET_MESSAGE, PROFILE_UPDATE_SUCCESS,
    GET_MY_PROFILE, PROFILE_VIEW, GET_USER_PROFILE
} from './Types';

import { startLoading, stopLoading, startImageUploadLoading, stopImageUploadLoading } from './LoadingAction';

var image_url = null;

export const profileUpdate = (text) => {

    return {
        type: PROFILE_UPDATE,
        payload: text
    }
};

export const getMyProfile = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'profiles/' + uuid)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_MY_PROFILE,
                    payload: res.data.profile[0]
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

                console.log(err.response.data);
            })
    }
};



export const uploadImage = (uuid, image) => {

    var CryptoJS = require('crypto-js');
    const { cloudinary_api_key, cloudinary_secret_key, cloudinary_cloud_name } = settings;
    let timestamp = (Date.now() / 1000 | 0).toString();
    let api_key = cloudinary_api_key;
    let api_secret = cloudinary_secret_key;
    let cloud = cloudinary_cloud_name;
    let hash_string = 'timestamp=' + timestamp + cloudinary_secret_key;
    let signature = CryptoJS.SHA1(hash_string).toString();
    let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';
    console.log(image, api_key, api_secret, hash_string, signature, upload_url);
    let formdata = new FormData();
    formdata.append('file', { uri: image.path, type: image.mime, name: 'upload.jpeg' });
    formdata.append('timestamp', timestamp);
    formdata.append('api_key', api_key);
    formdata.append('signature', signature);

    return (dispatch) => {
        dispatch(startImageUploadLoading());
        axios.post(upload_url, formdata)
            .then(res => {

                image_url = res.data.secure_url;
                dispatch(saveProfile(uuid, { photo: image_url }, "profile"));
                dispatch(stopImageUploadLoading());
            })
            .catch(err => {

                console.log(err);
            })
    }
}

export const uploadBackgroundImage = (uuid, image) => {

    var CryptoJS = require('crypto-js');
    const { cloudinary_api_key, cloudinary_secret_key, cloudinary_cloud_name } = settings;
    let timestamp = (Date.now() / 1000 | 0).toString();
    let api_key = cloudinary_api_key;
    let api_secret = cloudinary_secret_key;
    let cloud = cloudinary_cloud_name;
    let hash_string = 'timestamp=' + timestamp + cloudinary_secret_key;
    let signature = CryptoJS.SHA1(hash_string).toString();
    let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';
    console.log(image, api_key, api_secret, hash_string, signature, upload_url);
    let formdata = new FormData();
    formdata.append('file', { uri: image.path, type: image.mime, name: 'upload.jpeg' });
    formdata.append('timestamp', timestamp);
    formdata.append('api_key', api_key);
    formdata.append('signature', signature);

    return (dispatch) => {
        dispatch(startImageUploadLoading());
        axios.post(upload_url, formdata)
            .then(res => {

                image_url = res.data.secure_url;
                dispatch(saveProfile(uuid, { background: image_url }, "profile"));
                dispatch(stopImageUploadLoading());
            })
            .catch(err => {

                console.log(err);
            })
    }
}


export const getUserProfile = (uuid) => {
    console.log(uuid, "user profile");
    return (dispatch) => {
        const { api_url } = settings;
        axios.get(api_url + 'profiles/' + uuid)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: res.data.profile[0]
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

                console.log(err.response.data);
            })
    }
};

export const createProfile = (uuid = "", data) => {
    return (dispatch) => {

        const { api_url } = settings;
        clearErrors(dispatch);
        dispatch(startLoading());

        axios.post(api_url + 'profiles', data)
            .then(res => {
                // console.log(res.data);
                dispatch(stopLoading());
                dispatch({
                    type: PROFILE_VIEW
                });
                Actions.drawer({ type: 'reset' });
                dispatch(getMyProfile(uuid));
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

export const saveProfile = (uuid, data, from = "editprofile") => {
    return (dispatch) => {

        const { api_url } = settings;
        clearErrors(dispatch);
        dispatch(startLoading());
        axios.put(api_url + 'profiles', data)
            .then(res => {
                console.log(res);
                dispatch(stopLoading());

                dispatch(getMyProfile(uuid));
                if (from == "editprofile") Actions.pop();

            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch(createProfile(uuid, data));
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

const profileUpdateSuccess = (dispatch, profile) => {
    dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: profile
    });

};
