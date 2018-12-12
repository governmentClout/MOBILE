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
import Dash from 'react-native-dash';
import { Text } from './../Reusables';
import { getUsers, getUserProfile, getPendingFriendRequest } from './../../redux/actions';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class PendingRequest extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getPendingFriendRequest();
    }

    renderPendingRequests() {
        let friends = [];
        if (this.props.pending) {
            for (let i in this.props.pending) {
                let friend = this.props.pending[i].user[0];
                let image = avatar;
                if (friend.photo != '' && friend.photo != null) {
                    image = { uri: friend.photo }
                }
                friends.push(
                    <View key={i} >
                        <ListItem style={styles.listItemStyle} avatar>
                            <Left>
                                <TouchableOpacity onPress={() => this.props.getUserProfile(friend.uuid)}>
                                    <Thumbnail small source={image} />
                                </TouchableOpacity>

                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>{friend.firstName + '  ' + friend.lastName}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center', borderBottomWidth: 0 }}>

                                <Text style={{ borderRadius: 2, backgroundColor: SITE_COLOR, color: WHITE, fontSize: 13, padding: 3, paddingLeft: 5, paddingRight: 5 }}>Pending</Text>

                            </Right>
                        </ListItem>
                        <Dash dashColor={LINE_COLOR} style={{ width: '100%', marginLeft: 15, marginRight: 15, height: 1 }} />

                    </View>

                );
            }
        }
        return friends;
    }

    render() {

        return (
            <Content style={{ backgroundColor: WHITE }}>

                <List>
                    <ListItem>
                        <Text>Pending Requests</Text>
                    </ListItem>
                    {this.renderPendingRequests()}
                </List>
            </Content>
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
    const { pending } = state.friend;
    return { pending };
};

export default connect(mapStateToProps, { getUsers, getUserProfile, getPendingFriendRequest })(PendingRequest);
