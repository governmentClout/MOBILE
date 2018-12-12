import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card, List
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from './../Reusables';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

const OtherChat = () => {

    return (
        <View style={{ flexDirection: 'row', paddingTop: 10, marginBottom: 10, marginLeft: 100, justifyContent: 'flex-end', marginRight: 15 }}>
            <View style={styles.chatterMessageStyle}>
                <Text style={styles.messageTextStyle}>
                    Cupidatat officia eu et proident sit irure anim consectetur quis.
                </Text>

            </View>
            <Image
                source={avatar}
                style={{ width: 30, height: 30, marginLeft: 5 }}
            />
        </View>
    );

}

const styles = {
    ownerMessageStyle: {
        backgroundColor: '#37C3C3',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 50,
        paddingLeft: 50,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 120,

    },

    chatterMessageStyle: {
        backgroundColor: '#1C6A75',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 50,
        paddingLeft: 20,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 120,

    },

    messageTextStyle: {
        color: WHITE,
        fontSize: 14
    },

    messageInputStyle: {
        height: 40,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },

    listItemStyle: {
        borderBottomWidth: 0,
        paddingBottom: 10
    }
}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(OtherChat);

