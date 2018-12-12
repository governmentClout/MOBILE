import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";
import { Content, List, ListItem, Input, Thumbnail } from 'native-base';
import { toggleSearchBar } from '../redux/actions';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { avatar, logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from '../style';

class RightButton extends Component {
    constructor() {
        super();

    }


    componentWillMount() {

    }


    render() {
        let image = avatar;
        if (this.props.user.photo != '') {
            image = { uri: this.props.user.photo }
        }
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>

                <TouchableOpacity onPress={() => this.props.toggleSearchBar()}>
                    <MaterialIcon name="search" color={this.props.showSearchBar ? SITE_COLOR : 'grey'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.profile()}>
                    <Thumbnail
                        source={image}
                        style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }}
                    />
                </TouchableOpacity>
                <Menu>
                    <MenuTrigger>
                        <MaterialIcon name="more-vert" size={30} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption style={styles.menuOptionStyle} onSelect={() => Actions.friends()} text='Friends' />
                        <MenuOption style={styles.menuOptionStyle} onSelect={() => Actions.pendingrequest()} text='Pending Requests' />
                        <MenuOption style={styles.menuOptionStyle} onSelect={() => Actions.blockedrequest()} text='Blocked Friends' />

                    </MenuOptions>
                </Menu>
            </View>
        );
    }
}

const styles = {
    menuOptionStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    }
}

const mapStateToProps = (state) => {

    const { auth, user } = state.auth;
    const { showSearchBar } = state.view;
    return { auth, user, showSearchBar }
};

export default connect(mapStateToProps, { toggleSearchBar })(RightButton); 