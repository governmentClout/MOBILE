import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Text, Button, Tab, Tabs, TabHeading, Badge } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Badge as MBadge } from './../Reusables';
import Profile from './../User/Profile';
import PeopleYouMayKnow from '../User/PeopleYouMayKnow';
import Messages from '../User/Messages';
import Petition from '../Activities/Petition';
import Post from '../Activities/Post';
import Poll from '../Activities/Poll';
import Notification from '../Activities/Notification';
import Activity from '../Activities/Activity';

import { switchView, initializeUser } from './../../redux/actions';

import {
    logo, SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR, WHITE,
    sign, posttab
} from './../../style';

import {
    PETITION_VIEW, POST_VIEW, NOTIFICATION_VIEW,
    MESSAGE_LIST_VIEW, PROFILE_VIEW, ACTIVITY_VIEW
} from './../../redux/actions/Types';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: ACTIVITY
        }
    }

    messageHeading = () => {
        return (
            <TabHeading style={styles.tabHeadingStyle} badge vertical>
                <FontAwesomeIcon color={this.state.currentTab == MESSAGE ? tabIconActiveColor : tabIconColor} name="envelope" size={tabIconSize} />
                {/* <Badge style={styles.badgeStyle}><Text style={{ fontSize: 13 }}>5</Text></Badge> */}
            </TabHeading>
        );
    }

    notificationHeading = () => {
        return (
            <TabHeading style={styles.tabHeadingStyle} badge vertical>
                <FontAwesomeIcon color={this.state.currentTab == NOTIFICATION ? tabIconActiveColor : tabIconColor} name="bell" size={tabIconSize} />
                {/* <Badge style={styles.badgeStyle}><Text style={{ fontSize: 13 }}>5</Text></Badge> */}
            </TabHeading>
        );
    }

    chatHeading = () => {
        return (
            <TabHeading style={styles.tabHeadingStyle} badge vertical>
                {/* <FontAwesomeIcon name="lightbulb-o" size={tabIconSize} /> */}
                {/* <Badge style={styles.badgeStyle}><Text style={{ fontSize: 13 }}>5</Text></Badge> */}
                <Image
                    source={posttab}
                    style={{ width: 20, height: 18 }} />
            </TabHeading>
        );
    }

    feedHeading = () => {
        return (
            <TabHeading style={styles.tabHeadingStyle} badge vertical>
                <Icon color={this.state.currentTab == ACTIVITY ? tabIconActiveColor : tabIconColor} name="newspaper" size={27} />
                {/* <Badge style={styles.badgeStyle}><Text style={{ fontSize: 13 }}>5</Text></Badge> */}
            </TabHeading>
        );
    }

    petitionHeading = () => {
        return (
            <TabHeading style={styles.tabHeadingStyle} badge vertical>
                <Icon color={this.state.currentTab == PETITION ? tabIconActiveColor : tabIconColor} name="grease-pencil" size={23} />

                {/* <Image
                    source={sign}
                    style={{ width: 20, height: 20 }} /> */}
            </TabHeading>
        );
    }

    render() {

        return (
            <Container style={{ backgroundColor: WHITE, paddingTop: 5, paddingBottom: 5 }}>
           
                <Tabs onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                    <Tab
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        heading={this.feedHeading()}>

                        <Activity />

                    </Tab>

                    <Tab
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        heading={this.chatHeading()}>
                        <Poll />
                    </Tab>

                    <Tab
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        heading={this.messageHeading()}>
                        <Messages />
                    </Tab>
                    <Tab
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        heading={this.petitionHeading()}>
                        <Petition />
                    </Tab>
                    
                    <Tab
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        heading={this.notificationHeading()}>
                        <Notification />
                    </Tab>

                    
                </Tabs>

            </Container>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    inputStyle: {
        marginTop: 30,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
    },

    iconViewStyle: {
        borderRadius: 100,
        padding: 7
    },

    badgeStyle: {
        backgroundColor: SITE_COLOR
    },

    tabHeadingStyle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 0,

        borderBottomColor: SITE_COLOR
    },

    tabStyle: {
        borderBottomColor: SITE_COLOR,
        borderBottomWidth: 5
    },

    activeTabStyle: {
        backgroundColor: SITE_COLOR,
        borderBottomColor: SITE_COLOR,
        borderBottomWidth: 5
    }
}

const tabIconSize = 20;

const tabIconColor = '#333333';

const tabIconActiveColor = SITE_COLOR;

const ACTIVITY = 0;

const POST = 1;

const MESSAGE = 2;

const NOTIFICATION = 3;

const PETITION = 4;

const mapStateToProps = (state) => {
    const { activeView, showSearchBar } = state.view;
    const { auth } = state.auth;
    return { activeView, auth, showSearchBar };
};

export default connect(mapStateToProps, { switchView, initializeUser })(Dashboard);

