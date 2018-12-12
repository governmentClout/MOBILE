import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";
import { TOGGLE_SEARCH_BAR } from './Types';

export const switchView = (view) => {

    return {
        type: view,
    }
};

export const toggleSearchBar = () => {

    return {
        type: TOGGLE_SEARCH_BAR,
    }
};