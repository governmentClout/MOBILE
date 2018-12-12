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
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from './../Reusables';
import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class MessageList extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (

            <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>

                <List>
                    <ListItem>
                        <Text>300 Friends</Text>
                    </ListItem>
                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>
                            <Text>Mark Anthony</Text>
                            <Text note>Lagos, Ikeja</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', borderBottomWidth: 0 }}>
                            <Button style={styles.editButtonStyle} bordered small onPress={() => Actions.chat()}>
                                <Text style={{ color: SITE_COLOR, fontSize: 13, fontFamily: FONT_FAMILY }}>Message</Text>
                            </Button>
                            <TouchableOpacity>
                                <Icon name="dots-vertical" size={30} />
                            </TouchableOpacity>
                        </Right>

                    </ListItem>
                    <Dash dashColor={LINE_COLOR} style={{ width: '100%', marginLeft: 15, marginRight: 15, height: 1 }} />

                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>
                            <Text>Mark Anthony</Text>
                            <Text note>Lagos, Ikeja</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', borderBottomWidth: 0 }}>
                            <Button style={styles.editButtonStyle} bordered small>
                                <Text style={{ color: SITE_COLOR, fontSize: 13, fontFamily: FONT_FAMILY }}>Message</Text>
                            </Button>
                            <TouchableOpacity>
                                <Icon name="dots-vertical" size={30} />
                            </TouchableOpacity>
                        </Right>

                    </ListItem>
                    <Dash dashColor={LINE_COLOR} style={{ width: '100%', marginLeft: 15, marginRight: 15, height: 1 }} />

                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>
                            <Text>Mark Anthony</Text>
                            <Text note>Lagos, Ikeja</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', borderBottomWidth: 0 }}>
                            <Button style={styles.editButtonStyle} bordered small>
                                <Text style={{ color: SITE_COLOR, fontSize: 13, fontFamily: FONT_FAMILY }}>Message</Text>
                            </Button>
                            <TouchableOpacity>
                                <Icon name="dots-vertical" size={30} />
                            </TouchableOpacity>
                        </Right>

                    </ListItem>
                    <Dash dashColor={LINE_COLOR} style={{ width: '100%', marginLeft: 15, marginRight: 15, height: 1 }} />
                </List>
            </ScrollView>

        );


    }
}

const styles = {
    editButtonStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 5,
        // height: 40,
        borderColor: SITE_COLOR,
    },

    listItemStyle: {
        borderBottomWidth: 0,
        paddingBottom: 10
    }
}

const REACTION_COLOR = '#333333';

const LINE_COLOR = '#C4C4C4';

const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(MessageList);

