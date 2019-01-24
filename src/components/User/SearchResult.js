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
import { getUsers, getUserProfile, sendFriendRequest } from './../../redux/actions';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class SearchResult extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getUsers();
    }

    renderFoundFriends() {
        let friends = [];
        if (this.props.results) {
            for (let i in this.props.results) {
                let friend = this.props.results[i];
                let image = avatar;
                if (friend.photo != '' && friend.photo != null) {
                    image = { uri: friend.photo }
                }
                friends.push(
                    <View key={i} >
                        <ListItem style={styles.listItemStyle} avatar>
                            <Left>
                                <TouchableOpacity onPress={() => Actions.userprofile({ frienduuid: friend.uuid })}>
                                    <Thumbnail small source={image} />
                                </TouchableOpacity>

                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>{friend.firstName + '  ' + friend.lastName}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                                <Button onPress={() => this.props.sendFriendRequest({ friend: friend.uuid })} style={styles.editButtonStyle} bordered small>
                                    <Text style={{ color: SITE_COLOR, fontSize: 13, paddingLeft: 5, paddingRight: 5 }}>Add Friend</Text>
                                </Button>
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
                        <Text>These are people you may know</Text>
                    </ListItem>
                    {this.renderFoundFriends()}
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
    const { results } = state.friend;
    console.log(results);
    return { results };
};

export default connect(mapStateToProps, { getUsers, getUserProfile, sendFriendRequest })(SearchResult);

