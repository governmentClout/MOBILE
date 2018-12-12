import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Text, Button, Tab, Tabs,
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

import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Profile from './../User/Profile';
class CreatePetition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }


    render() {

        return (
            <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Content style={{ marginLeft: 20, marginRight: 20 }}>
                    <Label style={styles.labelStyle}>Class</Label>

                    <Item style={styles.itemStyle} picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Anambra" value="key0" />
                            <Picker.Item label="Enugu" value="key1" />
                            <Picker.Item label="Delta" value="key2" />
                            <Picker.Item label="Lagos" value="key3" />
                            <Picker.Item label="Abuja" value="key4" />
                        </Picker>
                    </Item>
                    <Label style={styles.labelStyle}>Department</Label>
                    <Item style={styles.itemStyle} picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Anambra" value="key0" />
                            <Picker.Item label="Enugu" value="key1" />
                            <Picker.Item label="Delta" value="key2" />
                            <Picker.Item label="Lagos" value="key3" />
                            <Picker.Item label="Abuja" value="key4" />
                        </Picker>
                    </Item>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
                        <Thumbnail style={{ marginTop: 5 }} small source={avatar} />
                        <Form style={{ flex: 1 }}>
                            <Textarea rowSpan={5} placeholder="Type post here ..." />
                        </Form>
                    </View>

                </Content>



                <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 5, paddingBottom: 5 }}>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <FontAwesomeIcon size={22} name="image" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <FontAwesomeIcon size={22} name="smile-o" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Icon size={23} color={'#00B0F0'} name="send" />
                        </TouchableOpacity>
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
    }
}

const tabIconSize = 20;


const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(CreatePetition);

