import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Label,
    Picker, Thumbnail, Textarea,
    Form, List, Card, CardItem,
    Left
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';


import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE, GREY } from './../../style';
import Profile from './../User/Profile';
import { commentUpdate, getComments, createComment, registerView } from './../../redux/actions';
import CommentSection from './CommentSection';
import { Text, AnimatedSpinner } from './../Reusables';
import { isObjectEmpty } from './../../Helper';

class Comment extends Component {

    constructor(props) {
        super(props);

    }


    prepareComment() {
        let data = {
            comment: this.props.comment,
            ref: this.props.activePost.uuid
        }
        this.props.createComment(this.props.activePost.uuid, data);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activePost) {
            this.props.registerView(this.props.activePost.uuid);
        }

    }

    renderComments() {

        if (this.props.comments) {
            return (
                <Content style={{ marginTop: 15 }}>
                    <List style={{ marginLeft: 0, marginRight: 0 }} dataArray={this.props.comments}
                        renderRow={(item) =>
                            <ListItem style={styles.listItemStyle}>
                                <CommentSection
                                    
                                    useravatar={item.user[0].photo}
                                    commentuuid={item.comment.uuid}
                                    style={{ flex: 1, borderBottomWidth: 0 }}
                                    comment={item.comment.comment}
                                    firstname={item.user[0].firstName}
                                    lastname={item.user[0].lastName}
                                />
                            </ListItem>
                        }>
                    </List>
                </Content>
            );
        }


    }

    renderSendButton() {
        if (!this.props.isLoading) {
            return <TouchableOpacity onPress={() => this.prepareComment()} style={{ marginRight: 15 }}>
                <Icon size={23} color={'#00B0F0'} name="send" />
            </TouchableOpacity>
        }
        return <AnimatedSpinner size={25} style={{ marginRight: 15 }} color={SITE_COLOR} type="Wave" />
    }


    render() {
        let image = null;
        if (this.props.user) {
            image = { uri: this.props.user.photo };
        } else {
            image = avatar;
        }
        let bgattachment = this.props.attachment == undefined || this.props.attachment == '' ? false : true;
        return (
            <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <ScrollView>
                {this.props.user ? <Card style={[{ elevation: 0, marginTop: 0, borderTopWidth: 0 }]}>
                <CardItem style={{backgroundColor: GREY}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.userprofile({ frienduuid: this.props.post.user })}>
                            <Thumbnail small source={image} />
                        </TouchableOpacity>
                        <Body>
                            <Text>{this.props.user.firstName} {this.props.user.lastName}</Text>
                            <Text note></Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{backgroundColor: GREY}}>
                    <Text style={{ marginRight: 15, marginLeft: 20, paddingBottom: 20, textAlign: 'justify' }}>
                        {this.props.post.post}
                    </Text>
                </CardItem>
                {bgattachment ?
                    <CardItem style={{backgroundColor: GREY}}>
                        <Body>
                            <Image source={attachment} style={{ height: 230, width: '100%', flex: 1 }} />

                        </Body>
                    </CardItem>
                    : <View></View>
                }
                </Card>: null}

                    {this.renderComments()}

                </ScrollView>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0 }}>
                    <Content style={{ borderTopWidth: 0 }}>
                        <Item regular style={styles.messageInputStyle}>
                            <Textarea
                                style={{ flex: 1 }}
                                value={this.props.comment}
                                onChangeText={value => { this.props.commentUpdate({ prop: 'comment', value: value }) }}
                                placeholder='Type comment here' />
                        </Item>
                    </Content>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 5, paddingBottom: 5 }}>

                            {/* <TouchableOpacity style={{ marginRight: 15 }}>
                                <FontAwesomeIcon size={22} name="smile-o" />
                            </TouchableOpacity> */}

                            {this.renderSendButton()}
                        </View>
                    </View>
                </View>
            </View>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    editButtonStyle: {
        borderColor: SITE_COLOR,
        marginTop: -45,
        marginLeft: 75,
        borderRadius: 50,
        paddingRight: 7,
        paddingTop: 0,
        height: 33,
        paddingBottom: 0,
        paddingLeft: 7,
        backgroundColor: SITE_COLOR
    },

    dottedStyle: {
        borderBottomWidth: 1,
        borderRadius: 5,
        borderStyle: 'dotted',
        borderColor: '#C4C4C4'
    },

    labelStyle: {
        marginBottom: 5,
        marginTop: 15,
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        color: '#333333'
    },

    itemStyle: {
        borderColor: '#BDBDBD',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 40
    },

    messageInputStyle: {
        height: 40,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },

    listItemStyle: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        // backgroundColor: 'yellow'
    }
}

const tabIconSize = 20;


const mapStateToProps = (state) => {
    const { comments, comment } = state.comment;
    const { activePost } = state.post;
    const { isLoading } = state.loading;
    console.log(activePost);
    return { comments, post: activePost.post, comment, isLoading, user: activePost.user[0] };
};

export default connect(mapStateToProps, { commentUpdate, createComment, getComments, registerView })(Comment);

