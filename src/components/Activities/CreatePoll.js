import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Label,
    Picker, Thumbnail, Textarea,
    Form
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';
import moment from 'moment';
import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Profile from './../User/Profile';
import { pollUpdate, createPoll } from './../../redux/actions';
import { Text, AnimatedSpinner } from './../Reusables';

class CreatePoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'All',
                'Infrastructure',
                'Education',
                'Politics',
                'Security',
                'Agriculture',
                'Technology',
                'Economy'
            ]
        }
    }


    preparePoll() {
        let data = {
            opinion: this.props.opinion,
            sector: this.props.sector,
            expire_at: moment(this.props.expireAt).format('YYYY/MM/DD HH:mm:ss'),
            response_limit: this.props.responseLimit,
        }
        this.props.createPoll(data);
    }

    renderSectors() {
        let sectors = [];
        for (let i in this.state.items) {
            let sector = this.state.items[i];
            sectors.push(<Picker.Item key={i} label={sector} value={sector} />)
        }
        return sectors;
    }

    renderSendButton() {
        if (!this.props.isLoading) {
            return <TouchableOpacity onPress={() => this.preparePoll()} style={{ marginRight: 15 }}>
                <Icon size={23} color={'#00B0F0'} name="send" />
            </TouchableOpacity>
        }
        return <AnimatedSpinner size={25} style={{ marginRight: 15 }} color={SITE_COLOR} type="Wave" />
    }


    render() {

        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Content style={{ backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20 }}>
                    <View style={{ marginTop: 10 }}>
                        <Label style={styles.labelStyle}>Sector</Label>
                        <Item picker bordered>

                            <Picker
                                mode="dropdown"
                                iosIcon={<FontAwesomeIcon name="caret-down" />}
                                style={{ flex: 1, borderWidth: 0.5 }}
                                placeholder="Select Sector"
                                placeholderStyle={{ color: "#bfc6ea", borderWidth: 0.5 }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.props.sector}
                                onValueChange={value => this.props.pollUpdate({ prop: 'sector', value: value })}
                            >

                                {this.renderSectors()}
                            </Picker>
                        </Item>
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <Label style={styles.labelStyle}>Expires At</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(1940, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Expires on (DD/MM/YY)"
                            textStyle={{ fontSize: 16, height: 50, borderBottomWidth: 0.7, borderColor: BORDER_COLOR }}
                            placeHolderTextStyle={{ marginLeft: 10, marginRight: 10, color: "#d3d3d3", fontSize: 16, height: 50, borderBottomWidth: 0.7, borderColor: BORDER_COLOR }}
                            onDateChange={value => this.props.pollUpdate({ prop: 'expireAt', value: value })}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
                        <Thumbnail style={{ marginTop: 5 }} small source={avatar} />
                        <Form style={{ flex: 1 }}>
                            <Textarea
                                value={this.props.opinion}
                                onChangeText={value => { this.props.pollUpdate({ prop: 'opinion', value: value }) }}
                                rowSpan={5}
                                placeholder="Type opinion here ..." />
                        </Form>
                    </View>

                </Content>



                <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 5, paddingBottom: 5 }}>

                        {this.renderSendButton()}
                    </View>
                </View>
            </View>
        );


    }
}

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
const BORDER_COLOR = '#C4C4C4';


const mapStateToProps = (state) => {
    const { opinion, sector, expireAt, responseLimit } = state.poll;
    const { user } = state.auth;
    const { isLoading } = state.loading;
    return { opinion, sector, expireAt, responseLimit, user, isLoading };
};

export default connect(mapStateToProps, { pollUpdate, createPoll })(CreatePoll);

