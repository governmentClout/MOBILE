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

import { setActivePost, getComments, likePost, setSharableContent, unlikePost, toggleShareModalVisibility } from './../../redux/actions';
import { Text } from './../Reusables';
import { hasLikes } from './../../Helper';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class Article extends Component {

    constructor(props) {
        super(props);

    }

    pluralize(count) {
        if (count) {
            return count > 1 ? 's' : '';
        }
    }

    renderLikeButton() {
        const { user, style, likes, postuuid, authuser } = this.props;
        if (hasLikes(authuser.uuid, likes)) {
            return (
                <Button onPress={() => this.props.unlikePost(postuuid)} style={{ flex: 1, paddingLeft: 15 }} transparent>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon size={20} color={SITE_COLOR} name="thumbs-o-up" />
                        <Text style={{ paddingLeft: 5, color: SITE_COLOR }}>{likes.length || 0} Like{this.pluralize(likes.length)}</Text>
                    </View>
                </Button>
            );
        }
        return (
            <Button onPress={() => this.props.likePost(postuuid)} style={{ flex: 1, paddingLeft: 15 }} transparent>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon size={20} name="thumbs-o-up" />
                    <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>{likes.length || 0} Like{this.pluralize(likes.length)}</Text>
                </View>
            </Button>
        );
    }

    shareOperation() {
        this.props.toggleShareModalVisibility(true);
        let data = {
            message: this.props.post.post,
            subject: 'posts',
            url: '',
            postuuid: this.props.post.uuid
        };
        this.props.setSharableContent(data);
    }

    render() {

        const { post, style, user, likes, comments, shares, location, postuuid, attachment } = this.props;

        let image = null;
        if (user) {
            image = { uri: user.photo };
        } else {
            image = avatar;
        }

        let bgattachment = attachment == undefined || attachment == '' ? false : true;
        return (
            <Card style={[{ elevation: 0, borderTopWidth: 0 }, style]}>
                <CardItem>
                    <Left>
                        <Thumbnail small source={image} />
                        <Body>
                            <Text>{user.firstName} {user.lastName}</Text>
                            <Text note></Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Text style={{ marginRight: 15, marginLeft: 20, paddingBottom: 20, textAlign: 'justify' }}>
                        {post.post}
                    </Text>
                </CardItem>
                {bgattachment ?
                    <CardItem>
                        <Body>
                            <Image source={attachment} style={{ height: 230, width: '100%', flex: 1 }} />

                        </Body>
                    </CardItem>
                    : <View></View>
                }

                <CardItem style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5, justifyContent: 'center', paddingLeft: 0, paddingRight: 0, height: 50, backgroundColor: '#F1F1F1' }}>

                    {this.renderLikeButton()}


                    <Button onPress={() => { this.props.setActivePost(postuuid); this.props.getComments(postuuid); Actions.comment(); }} style={{ flex: 1 }} transparent>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon size={20} name="comment-outline" />
                            <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>{comments.length || 0} Comment{this.pluralize(comments.length)}</Text>
                        </View>
                    </Button>

                    <Button onPress={() => this.shareOperation()} style={{ flex: 1 }} transparent>
                        <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
                            <Icon size={20} name="share" />
                            <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>{shares.length || 0} Share{this.pluralize(shares.length)}</Text>
                        </View>
                    </Button>

                </CardItem>
            </Card>
        );


    }
}

const styles = {

}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    const { shareVisibility } = state.share;
    return { shareVisibility };
};

export default connect(mapStateToProps, { setActivePost, getComments, likePost, unlikePost, toggleShareModalVisibility, setSharableContent })(Article);

