import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    EMAIL_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
    LOADING, CLEAR_ERRORS, REGISTER_UPDATE,
    LOGIN_UPDATE, LOGOUT_USER, INITIALIZE_USER,
    GET_MESSAGE, GET_ERRORS, EMPTY_STATE,
    RESET_UUID
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
    auth: false,
    dob: '',
    last_name: '',
    email: '',
    resetemail: '',
    reset_code: '',
    reset_uuid: '',
    password: '',
    new_password: '',
    phone: '',

    tosAgreement: false,
    user: {},
    token: '',
    uuid: '',
    test: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REGISTER_UPDATE:
            // action.payload == {prop: 'name', value: 'jane'}

            return { ...state, [action.payload.prop]: action.payload.value };

        case LOGIN_UPDATE:
            // action.payload == {prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value };

        case LOGIN_USER_SUCCESS:

            storeUserData(action.payload);

            return { ...state, auth: true, token: action.payload.token, user: action.payload, uuid: action.payload.uuid };

        case INITIALIZE_USER:
            activateAxios(action.payload);
            return { ...state, test: !state.test, auth: true, user: action.payload, token: action.payload.token, uuid: action.payload.uuid };

        case LOGOUT_USER:
            deleteUserData();
            return { ...state, auth: false, user: action.payload };

        case LOADING:
            return { ...state, loading: action.payload };

        case RESET_UUID:
            return { ...state, reset_uuid: action.payload };

        case EMPTY_STATE:

            return { ...state, test: !state.test };

        default:
            return state;
    }
};


const storeUserData = (payload) => {
    axios.defaults.headers.common['token'] = payload.token;
    axios.defaults.headers.common['uuid'] = payload.uuid;
    AsyncStorage.setItem('user', JSON.stringify(payload));

}

const activateAxios = (payload) => {
    axios.defaults.headers.common['token'] = payload.token;
    axios.defaults.headers.common['uuid'] = payload.uuid;
}

const deleteUserData = () => {
    AsyncStorage.removeItem('user');
    delete axios.defaults.headers.common['token'];
    delete axios.defaults.headers.common['uuid'];
}