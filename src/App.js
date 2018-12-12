import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { AsyncStorage, View } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';

import Router from './Router';


class App extends Component {

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

