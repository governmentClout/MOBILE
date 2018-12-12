import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Text, Button, Tab, Tabs,
    Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card, List, Textarea
} from 'native-base';

import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import OtherChat from './OtherChat';
import OwnerChat from './OwnerChat';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';


class Chat extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{ backgroundColor: WHITE, flex: 1 }}>
                <ScrollView style={{ paddingTop: 10 }}>
                    <OtherChat />
                    <OwnerChat />
                    <OtherChat />
                    <OwnerChat />
                    <OtherChat />
                    <OwnerChat />
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0 }}>
                    <Content style={{ borderTopWidth: 0 }}>
                        <Item regular style={styles.messageInputStyle}>
                            <Textarea
                            rowSpan={4}
                            style={{ flex: 1 }}
                             placeholder='Type a message' />
                        </Item>
                    </Content>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 5, paddingBottom: 5 }}>
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <FontAwesomeIcon size={22} name="image" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <FontAwesomeIcon size={22} name="smile-o" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Icon size={23} color={'#00B0F0'} name="send" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );


    }
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
        paddingLeft: 50,
        borderTopLeftRadius: 80,
        borderBottomLeftRadius: 80,
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

export default connect(mapStateToProps, {})(Chat);

