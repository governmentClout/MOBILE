import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from './../Reusables';
import { setActivePost, getComments, likePost } from './../../redux/actions';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class CommentSection extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        const { useravatar, comment, style, firstname, lastname, commentuuid } = this.props;
        let image = null;
        if (useravatar != undefined && useravatar != "" && useravatar != null && /((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-])\/?.+)/.test(useravatar)) {
            image = { uri: useravatar };
        } else {
            image = avatar;
        }
        return (
            <Card style={[{ elevation: 0, borderTopWidth: 0 }, style]}>
                <CardItem style={{ borderWidth: 0, borderBottomWidth: 0 }}>
                    <Left>
                        <Thumbnail small source={image} />
                        <Body style={{ paddingLeft: 15, paddingTop: 10, backgroundColor: '#eceaeaba', borderRadius: 5, borderBottomWidth: 0, borderTopWidth: 0 }}>
                            <Text note style={{fontWeight: 'bold'}}>{firstname} {lastname}</Text>

                            <Text style={{ paddingBottom: 20, textAlign: 'justify' }}>
                                {comment}
                            </Text>
                        </Body>
                    </Left>

                </CardItem>


            </Card>
        );


    }
}

const styles = {

}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(CommentSection);

