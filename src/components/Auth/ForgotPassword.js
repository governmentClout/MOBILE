import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Text, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { loginUpdate, resetPassword } from './../../redux/actions';
import { Spinner, MaterialInput, AnimatedSpinner } from './../Reusables';
import { calculateOpacity } from './../../Helper';
import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';

class ForgotPassword extends Component {


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

    render() {

        let buttoncolor = this.props.isLoading ? SITE_COLOR + calculateOpacity(60) : SITE_COLOR;

        return (
            <ScrollView style={{ backgroundColor: WHITE }}>
                <View style={{ flex: 1, marginTop: 20, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', marginBottom: 40, marginTop: 30 }}>
                        <Text style={{ fontSize: 32 }}>Forgot Password?</Text>
                    </View>
                    <Content style={{ marginLeft: 15, marginRight: 15 }}>
                        <MaterialInput
                            value={this.props.resetemail}
                            label={"Email Address"}
                            placeholder={"Enter Email"}
                            onChangeText={value => { this.props.loginUpdate({ prop: 'resetemail', value: value }) }}
                        />

                        <Button
                            disabled={this.props.isLoading} block rounded
                            onPress={() => this.props.resetPassword({ email: this.props.resetemail })}
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
        marginTop: 30,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
    },

    iconViewStyle: {
        borderRadius: 100,
        padding: 7
    }
}

const mapStateToProps = (state) => {
    const { resetemail } = state.auth;
    const { isLoading } = state.loading;
    const { error } = state.errors;
    return { resetemail, isLoading, error };
};

export default connect(mapStateToProps, { loginUpdate, resetPassword })(ForgotPassword);
