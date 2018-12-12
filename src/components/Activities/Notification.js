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

class Notification extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (

            <ScrollView style={{ backgroundColor: WHITE }}>
                <List>
                    <ListItem>
                        <Text>Notification</Text>
                    </ListItem>
                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail small source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>


                            <Text>
                                <Text style={{ fontWeight: 'bold' }}>Mark Anthony </Text>
                                shared a post: This triad consists of UX, PM and eng, and the reason why we emphasize this develo...</Text>

                        </Body>
                        <Right style={{ justifyContent: 'center' }}>
                            <Text>2h</Text>
                        </Right>

                    </ListItem>
                    <Dash dashColor={LINE_COLOR} style={{ flex: 1, marginLeft: 15, marginRight: 15, height: 1 }} />

                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail small source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>


                            <Text>
                                <Text style={{ fontWeight: 'bold' }}>Mark Anthony </Text>
                                shared a post: This triad consists of UX, PM and eng, and the reason why we emphasize this develo...</Text>

                        </Body>
                        <Right style={{ justifyContent: 'center' }}>
                            <Text>2h</Text>
                        </Right>

                    </ListItem>
                    <Dash dashColor={LINE_COLOR} style={{ flex: 1, marginLeft: 15, marginRight: 15, height: 1 }} />

                    <ListItem style={styles.listItemStyle} avatar>
                        <Left>
                            <Thumbnail small source={avatar} />
                        </Left>
                        <Body style={{ borderBottomWidth: 0 }}>


                            <Text>
                                <Text style={{ fontWeight: 'bold' }}>Mark Anthony </Text>
                                shared a post: This triad consists of UX, PM and eng, and the reason why we emphasize this develo...</Text>

                        </Body>
                        <Right style={{ justifyContent: 'center' }}>
                            <Text>2h</Text>
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
        borderColor: SITE_COLOR,
    },

    listItemStyle: {
        borderBottomWidth: 0,
        paddingBottom: 0
    }
}

const REACTION_COLOR = '#333333';

const LINE_COLOR = '#C4C4C4';

const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(Notification);

