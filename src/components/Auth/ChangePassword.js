import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Text, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loginUpdate, changePassword } from './../../redux/actions';
import { Spinner, MaterialInput, AnimatedSpinner } from './../Reusables';
import { calculateOpacity } from './../../Helper';


import {
    logo, SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR, WHITE
} from './../../style';

class ChangePassword extends Component {

    constructor(props) {
        super(props);

    }

    renderButton() {
        if (!this.props.isLoading) {

            return (
                <Text>RESET</Text>
            );
        } else {
            return (
                <AnimatedSpinner
                    type={"Wave"}
                    size={25}
                    color={WHITE}
                    text={'Processing'}
                    textStyle={{ color: WHITE }}
                />);
        }
    }
    preparePassword() {
        let data = {
            password: this.props.new_password,
            uuid: this.props.reset_uuid,
            reset_code: this.props.reset_code,
            email: this.props.resetemail,
            provider: 'email'
        }
        this.props.changePassword(data);
    }

    render() {

        let buttoncolor = this.props.isLoading ? SITE_COLOR + calculateOpacity(60) : SITE_COLOR;


        return (
            <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>
                <View style={{ flex: 1, marginTop: 20, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', marginBottom: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 32, textAlign: 'center' }}>Change Password</Text>
                        {/* <Text style={{ fontSize: 32, textAlign: 'center' }}>cancelled!</Text> */}
                    </View>
                    <Text style={{ color: 'red', marginBottom: 20, textAlign: 'center' }}>
                        {this.props.error}
                    </Text>
                    <Content style={{ marginLeft: 15, marginRight: 15 }}>
                        <MaterialInput
                            value={this.props.new_password}
                            label={"New Password"}
                            placeholder={"New Password"}
                            onChangeText={value => { this.props.loginUpdate({ prop: 'new_password', value: value }) }}
                        />

                        <Button
                            disabled={this.props.isLoading} block rounded
                            onPress={() => this.preparePassword()}
                            style={{ backgroundColor: buttoncolor, marginTop: 15 }}>
                            {this.renderButton()}
                        </Button>


                    </Content>
                </View>
            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    inputStyle: {
        marginTop: 10,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
    },

    iconViewStyle: {
        borderRadius: 100,
        padding: 7
    }
}

const mapStateToProps = (state) => {
    const { reset_code, resetemail, new_password, reset_uuid } = state.auth;
    const { isLoading } = state.loading;
    const { error } = state.errors;
    return { reset_code, resetemail, new_password, reset_uuid, isLoading, error };
};

export default connect(mapStateToProps, { loginUpdate, changePassword })(ChangePassword);
