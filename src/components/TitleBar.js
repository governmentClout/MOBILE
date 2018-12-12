import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";
import { Content, List, ListItem, Input, Item } from 'native-base';
import { searchFriends } from './../redux/actions';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { avatar, logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../style';

class TitleBar extends Component {
    constructor() {
        super();

    }


    componentWillMount() {

    }

    renderTitle() {
        if (this.props.showSearchBar) {
            return (
                <Item regular style={{ borderWidth: 2, width: '80%', borderRadius: 5, backgroundColor: '#F0F0F0' }}>
                    <Input
                        style={{ alignSelf: 'center', fontSize: 14, height: 35 }}
                        placeholder={'Search ...'}
                        onChangeText={value => { this.props.searchFriends(value) }}
                    />
                </Item>
            );
        } else {
            return <View style={{ flex: 1 }}></View>
        }

    }

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 2 }}>
                {this.renderTitle()}

            </View>
        );
    }
}

const styles = {
}

const mapStateToProps = (state) => {

    const { auth, user } = state.auth;
    const { showSearchBar } = state.view;
    return { auth, user, showSearchBar }
};

export default connect(mapStateToProps, { searchFriends })(TitleBar); 