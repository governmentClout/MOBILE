import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    GET_ALL_COUNTRIES, GET_ALL_STATES, GET_LGAS
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';

export const getCountries = () => {
    return (dispatch) => {

        const { country_url } = settings;
        axios.get(country_url + 'all')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_ALL_COUNTRIES,
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

                console.log(err.response.data);
            })
    }
};

export const getStates = () => {
    return (dispatch) => {

        const { state_url } = settings;
        axios.get(state_url)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_ALL_STATES,
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

                console.log(err.response.data);
            })
    }
};

export const getLgas = (state) => {
    return (dispatch) => {

        const { state_url } = settings;
        axios.get(state_url + `/${state}/lgas`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_LGAS,
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

                console.log(err.response.data);
            })
    }
};
