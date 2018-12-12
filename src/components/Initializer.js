import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";
import { Content, List, ListItem } from 'native-base';
import { logoutUser, initializeUser, getMyProfile } from './../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WHITE } from './Reusables/styles';


class Initializer extends Component {
    constructor() {
        super();

    }


    componentWillMount() {
        this.props.initializeUser();
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (nextProps.auth) {
            Actions.drawer({ type: 'reset' });
            // Actions.createprofile({ type: 'reset' });

        } else {
            Actions.auth({ type: 'reset' });

        }
    }

    render() {

        return (

            <ScrollView style={{ backgroundColor: WHITE }}>

            </ScrollView>
        );
    }
}

const styles = {
}

const mapStateToProps = (state) => {

    const { auth } = state.auth;
    const { profile } = state.profile;
    return { auth, profile }
};

export default connect(mapStateToProps, { logoutUser, initializeUser, getMyProfile })(Initializer); 