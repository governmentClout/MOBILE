import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage } from "react-native";


import {
    TOGGLE_SHARE_MODAL, SET_SHARABLE_CONTENT
} from './Types';


export const toggleShareModalVisibility = (payload) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_SHARE_MODAL,
            payload
        });
    }
}


export const setSharableContent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SET_SHARABLE_CONTENT,
            payload
        });
    }
}
