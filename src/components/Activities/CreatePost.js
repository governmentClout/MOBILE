import React, { Component } from 'react';
import {
    List, ListItem, Content,
    Picker, Thumbnail, Textarea,
    Form
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';

import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Profile from './../User/Profile';
import { Text, AnimatedSpinner } from './../Reusables';
import { postUpdate, createPost, getMyPost } from './../../redux/actions';

class CreatePost extends Component {

    constructor(props) {
        super(props);

    }


    preparePost() {
        let data = {
            post: this.props.post
        }
        this.props.createPost(this.props.user.uuid, data);
    }

    renderSendButton() {
        if (!this.props.isLoading) {
            return <TouchableOpacity onPress={() => this.preparePost()} style={{ marginRight: 15 }}>
                <Icon size={23} color={'#00B0F0'} name="send" />
            </TouchableOpacity>
        }
        return <AnimatedSpinner size={25} style={{ marginRight: 15 }} color={SITE_COLOR} type="Wave" />
    }


    render() {

        return (
            <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Content style={{ marginLeft: 20 }}>

                    <View style={{marginBottom: 10}}>
                        <Text style={{color: 'red', textAlign: 'center'}}>{this.props.error}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
                        <Thumbnail style={{ marginTop: 5 }} small source={avatar} />
                        <Form style={{ flex: 1 }}>
                            <Textarea
                                value={this.props.post}
                                onChangeText={value => { this.props.postUpdate({ prop: 'post', value: value }) }}
                                rowSpan={15}
                                placeholder="Type post here ..." />
                        </Form>
                    </View>

                    

                </Content>



                <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                <List>
                            <ListItem onPress={() => Actions.dashboard()} style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon color={SITE_COLOR} name="camera" size={21} />
                                    <Text style={{paddingLeft: 20}}>Photo / Video</Text>                       
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.dashboard()} style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon color={SITE_COLOR} name="camera" size={21} />
                                    <Text style={{paddingLeft: 20}}>Article</Text>                       
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.dashboard()} style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon color={SITE_COLOR} name="camera" size={21} />
                                    <Text style={{paddingLeft: 20}}>Petition</Text>                       
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.dashboard()} style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon color={SITE_COLOR} name="map-marker" size={21} />
                                    <Text style={{paddingLeft: 20}}>Location</Text>                       
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.dashboard()} style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon color={SITE_COLOR} name="map-marker" size={21} />
                                    <Text style={{paddingLeft: 20}}>Poll</Text>                       
                                </View>

                            </ListItem>

                        </List>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15, paddingBottom: 5 }}>
                      

                        {this.renderSendButton()}
                    </View> */}
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
    }
}

const tabIconSize = 20;


const mapStateToProps = (state) => {
    const { post } = state.post;
    const { user } = state.auth;
    const {error} = state.errors;
    const {isLoading} = state.loading;
    return { post, user, error, isLoading };
};

export default connect(mapStateToProps, { postUpdate, createPost, getMyPost })(CreatePost);

