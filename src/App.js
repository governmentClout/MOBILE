import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { AppState, BackHandler, Alert } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';

import Router from './Router';


class App extends Component {
    constructor() {
        super();
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    handleBackButton = () => {
        Alert.alert(
            'Exit Gclout',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
        )
        return true;
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        AppState.addEventListener('change', this.handleAppStateChange)
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
            console.log("I dey background");
        }
    }


    render() {

        return (
            <MenuProvider>
                <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                    <Router />

                </Provider>
            </MenuProvider>
        )
    }
}
export default App;

