import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from './../Reusables';
import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.all });
    }


    renderText() {

        if (this.state.visible) {
            return (
                <Text style={{ textAlign: 'justify', padding: 10, fontSize: 14 }}>
                    {this.props.content}
                </Text>
            )
        }
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>{this.props.title}</Text>
                    <TouchableOpacity
                        onPress={() => this.setState({ visible: !this.state.visible })}
                        style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                        <Text style={{ color: WHITE, fontWeight: 'bold' }}>{this.state.visible ? '-' : '+'}</Text>
                    </TouchableOpacity>
                </View>
                {this.renderText()}
            </View>
        )
    }
}
export default Detail;
