import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Label,
    Picker, Thumbnail, Textarea,
    Form, List
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';
import { Text } from './../Reusables';

import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Profile from './../User/Profile';
class FilterPetition extends Component {

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

    render() {

        return (
            <Content style={{ backgroundColor: WHITE }}>

                <List dataArray={this.state.items}
                    renderRow={(item) =>
                        <ListItem style={styles.listItemStyle}>
                            <Text style={styles.textFilterStyle}>{item}</Text>
                        </ListItem>
                    }>
                </List>
            </Content>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    listItemStyle: {
        height: 60,
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        marginLeft: 0
    },

    textFilterStyle: {
        fontSize: 16
    }
}

const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(FilterPetition);

