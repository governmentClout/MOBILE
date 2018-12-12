import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Text, Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card, Radio, List
} from 'native-base';
import { Image, View, RefreshControl, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Article from './../User/Article';
import {
    logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR, WHITE, FONT_FAMILY
} from './../../style';

import { getPosts } from './../../redux/actions';

class Post extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getPosts();
    }


    renderPosts() {

        if (this.props.posts) {
            return (
                <Content style={{ marginTop: 15 }}>
                    <List style={{ marginLeft: 0, marginRight: 0 }} dataArray={this.props.posts}
                        renderRow={(item) => {
                            if (item.user.length == 0) return null;
                            return <ListItem style={styles.listItemStyle}>
                                <Article

                                    postuuid={item.post.uuid}
                                    style={{ flex: 1 }}
                                    post={item.post}
                                    comments={item.comments}
                                    shares={item.shares}
                                    likes={item.reactions}
                                    user={item.user[0]}
                                    authuser={this.props.user}

                                />
                            </ListItem>
                        }
                        }>
                    </List>
                </Content>
            );
        }


    }

    render() {

        return (
            <ScrollView
                style={{ backgroundColor: '#E5E5E5', paddingTop: 15 }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.isLoading}
                        onRefresh={() => this.props.getPosts()}
                    />
                }
            >
                <View style={styles.postArticleSegmentStyle}>
                    <TouchableOpacity onPress={() => Actions.createpost()} style={[styles.buttonSegmentStyle, { borderRadius: 25, marginLeft: 15, marginRight: 15 }]}>
                        <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                            <FontAwesomeIcon name="file" color={SITE_COLOR} size={20} />
                            <Text style={{ paddingLeft: 15 }}>Post</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {this.renderPosts()}

            </ScrollView>
        );


    }
}

const styles = {
    postArticleSegmentStyle: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around',
    },

    buttonSegmentStyle: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderColor: SITE_COLOR,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center'
    },

    listItemStyle: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        borderBottomWidth: 0
    }
}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    const { posts } = state.post;
    const { user } = state.auth;
    const { isLoading } = state.loading;

    return { posts, isLoading, user };
};

export default connect(mapStateToProps, { getPosts })(Post);

