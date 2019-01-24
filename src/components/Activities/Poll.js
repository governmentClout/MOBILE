import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card, Radio
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, RefreshControl, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text, Progress } from './../Reusables';
import PollSection from './PollSection';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

import { getPolls, filterParticipatedPoll, filterPoll } from './../../redux/actions';
import { isObjectEmpty, hasRespondedToPoll, calculateOpacity } from '../../Helper';

class Poll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSort: ALL,
            filtered: false
        }
    }

    activeStyle(value) {
        if (this.state.activeSort == value) {
            return {
                borderBottomWidth: 3,
                borderBottomColor: SITE_COLOR
            };
        } else {
            return {};
        }
    }

    componentWillMount() {
        this.props.getPolls();
    }


    componentWillReceiveProps(nextProps) {
        // if (nextProps.user && !isObjectEmpty(nextProps.user) && !this.state.filtered) {
        //     this.props.filterParticipatedPoll(this.props.user.uuid)
        // }
    }

    renderPolls() {
        let polls = [];
        if (this.props.filteredPolls) {
            for (let i in this.props.filteredPolls) {
                let poll = this.props.filteredPolls[i].polls;
                let user = this.props.filteredPolls[i].user[0];
                let responses = this.props.filteredPolls[i].responses;
                polls.push(
                    <PollSection
                        key={i}
                        sector={poll.sector}
                        opinion={poll.opinion}
                        polluuid={poll.uuid}
                        poll={poll}
                        useruuid={this.props.user.uuid}
                        responses={responses}
                        firstname={user ? user.firstName : ''}
                        lastname={user ? user.lastName : ''}
                        useravatar={user ? user.photo : ''}
                    />);
            }
            if (this.props.filteredPolls.length > 0) polls.push(<View key={-2} style={{ marginTop: 50 }}></View>)
        }
        return polls;
    }

    renderParticipatedPolls() {
        let polls = [];
        if (this.props.participatedPolls) {
            for (let i in this.props.participatedPolls) {
                let poll = this.props.participatedPolls[i].polls;
                let user = this.props.participatedPolls[i].user[0];
                let responses = this.props.participatedPolls[i].responses;
                polls.push(
                    <PollSection
                        key={i}
                        sector={poll.sector}
                        opinion={poll.opinion}
                        polluuid={poll.uuid}
                        poll={poll}
                        useruuid={this.props.user.uuid}
                        responses={responses}
                        firstname={user ? user.firstName : ''}
                        lastname={user ? user.lastName : ''}
                        useravatar={user ? user.photo : ''}
                    />);
            }
            if (this.props.participatedPolls.length > 0) polls.push(<View key={-2} style={{ marginTop: 50 }}></View>)
        }
        return polls;
    }

    render() {

        return (
            <View style={{ backgroundColor: '#E5E5E5' }}>
                <View style={{ backgroundColor: WHITE, paddingLeft: 15, paddingRight: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.setState({ activeSort: ALL })} style={[{ paddingTop: 12, paddingBottom: 12 }, this.activeStyle(ALL)]}>
                            <Text style={{ fontSize: 18 }}>    All    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ activeSort: PARTICIPATED })} style={[{ marginLeft: 25, paddingTop: 12, paddingBottom: 12 }, this.activeStyle(PARTICIPATED)]}>
                            <Text style={{ fontSize: 18 }}>Participated</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => Actions.filterpoll()} style={{ marginLeft: 15, paddingTop: 12, paddingBottom: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="filter-variant" size={25} />

                            <Text style={{ marginLeft: 15, fontSize: 18 }}>Filter</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ paddingTop: 10 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoading}
                            onRefresh={() => this.props.getPolls()}
                        />
                    }
                >
                    <View style={[styles.postArticleSegmentStyle, { marginTop: 10 }]}>
                        <TouchableOpacity onPress={() => Actions.createpoll()} style={[styles.buttonSegmentStyle, { borderRadius: 25, marginLeft: 15, marginRight: 15 }]}>
                            <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                                <FontAwesomeIcon name="file" color={SITE_COLOR} size={20} />
                                <Text style={{ paddingLeft: 15 }}>Poll</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {this.state.activeSort == ALL ? this.renderPolls() : this.renderParticipatedPolls()}

                </ScrollView>
            </View>
        );


    }
}

const styles = {
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

    listItemStyle: {
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 3,
        borderBottomWidth: 0
    }
}

const ALL = 'ALL';

const PARTICIPATED = 'PARTICIPATED';

const mapStateToProps = (state) => {
    const { polls, participatedPolls, filteredPolls } = state.poll;
    const { user } = state.auth;
    const { isLoading } = state.loading;
    // console.log(participatedPolls);
    return { polls, isLoading, participatedPolls, user, filteredPolls };
};

export default connect(mapStateToProps, { getPolls, filterParticipatedPoll, filterPoll })(Poll);

