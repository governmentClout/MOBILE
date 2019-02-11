import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, List
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';
import { AreaChart, Grid } from 'react-native-svg-charts'
import ContentLoader from 'react-native-content-loader'
import { Circle, Rect } from 'react-native-svg'
import * as shape from 'd3-shape'
import Post from './Post';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';
import Article from '../User/Article';
import PeopleYouMayKnow from '../User/PeopleYouMayKnow';
import Sponsored from './Sponsored';
import { getPosts } from './../../redux/actions';
import { Text } from './../Reusables';
import SocialShare from './../Reusables/others/SocialShare';

class Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSegment: POST
        }
    }

    componentWillMount() {
        this.props.getPosts();
    }

    renderPosts() {

        if (this.props.posts) {
            return (
                <Content style={{ marginTop: 0 }}>
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
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        let image = avatar;
        if (this.props.user.photo != '') {
            image = { uri: this.props.user.photo }
        }

        return (
            <ScrollView style={{ backgroundColor: '#dcdcdc' }}>
                <SocialShare />
                <View style={{flexDirection: 'row', marginLeft: 5, marginRight: 15, paddingTop: 10, paddingBottom: 10}}>
                    <TouchableOpacity onPress={() => Actions.profile()}>
                        <Thumbnail
                            source={image}
                            
                            style={{ width: 40, height: 40, marginLeft: 20, marginTop: 7, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.createpost()} style={{backgroundColor: WHITE, width: '80%', borderRadius: 4}}>
                        <Text style={{textAlign: 'center', paddingTop: 10}}>What's on your mind ?</Text>
                    </TouchableOpacity>
                </View>


                {this.renderPosts()}


                <Sponsored />
                {/* <AreaChart
                    style={{ height: 200, backgroundColor: WHITE }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid />
                </AreaChart> */}
                <PeopleYouMayKnow />

            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    editButtonStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: SITE_COLOR,
        marginTop: -40,
        marginRight: 15
    },

    dottedStyle: {
        borderBottomWidth: 1,
        borderRadius: 5,
        borderStyle: 'dotted',
        borderColor: '#C4C4C4'
    },

    politicalTitleStyle: {
        fontFamily: FONT_FAMILY,
        textAlign: 'center',
        fontSize: 12
    },

    politicalHeadNameStyle: {
        fontFamily: FONT_FAMILY,
        textAlign: 'center'
    },

    postArticleSegmentStyle: {
        flexDirection: 'row',
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

    thumbnailStyle: {
        alignSelf: 'center'
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

const tabIconSize = 20;

const color = '#333333';

const headingcolor = '#034D79';

const POST = 1;

const ARTICLE = 2;

const mapStateToProps = (state) => {
    const { posts } = state.post;
    const { user } = state.auth;
    return { posts, user };
};

export default connect(mapStateToProps, { getPosts })(Activity);

