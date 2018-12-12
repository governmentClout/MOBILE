import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    REQUEST_UPGRADE_UPDATE, GET_ERRORS,
    GET_MESSAGE
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';


export const requestUpgradeUpdate = (text) => {

    return {
        type: REQUEST_UPGRADE_UPDATE,
        payload: text
    }
};

export const requestUpgrade = (data) => {

    return (dispatch) => {

        const { api_url } = settings;
        clearErrors(dispatch);
        dispatch(startLoading());
        axios.post(api_url + 'executives', data)
            .then(res => {

                dispatch(stopLoading());
                console.log(res);
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