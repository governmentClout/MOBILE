import React, { Component } from 'react';
import {
    Container, Header, Body, Content, Input,
    ListItem, Item, CheckBox, DatePicker,
    Text, Button, Label, Picker, Form,
    Textarea
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { requestUpgradeUpdate, requestUpgrade } from './../../redux/actions';
import { Spinner, MaterialInput, AnimatedSpinner } from './../Reusables';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE, FONT_FAMILY } from './../../style';
import { calculateOpacity } from './../../Helper';

class RequestUpgrade extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderButton() {
        if (!this.props.isLoading) {

            return (
                <Text>Submit</Text>
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

    upgrade() {
        let data = {
            about_you: this.props.aboutYou,
            about_party: this.props.aboutParty,
            office: this.props.office,
            party: this.props.party
        }
        this.props.requestUpgrade(data);
    }


    render() {

        let buttoncolor = this.props.isLoading && this.props.tos ? SITE_COLOR + calculateOpacity(60) : SITE_COLOR;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>
                <View style={{ alignSelf: 'center', marginBottom: 10, marginTop: 20 }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, color: '#4F4F4F', fontFamily: FONT_FAMILY }}>Request Upgrade</Text>
                </View>
                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                    <Text style={{ color: 'red' }}>{this.props.error}</Text>
                </View>
                <Content style={{ marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 60 }}>

                    <Label style={styles.labelStyle}>Select Party</Label>
                    <Item picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Lga"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.party}
                            onValueChange={value => this.props.requestUpgradeUpdate({ prop: 'party', value: value })}
                        >
                            <Picker.Item label={'APC'} value={'APC'} />
                            <Picker.Item label={'PDP'} value={'PDP'} />
                            <Picker.Item label={'APGA'} value={'APGA'} />
                        </Picker>
                    </Item>

                    <Label style={styles.labelStyle}>Select Political Office</Label>
                    <Item picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Lga"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.office}
                            onValueChange={value => this.props.requestUpgradeUpdate({ prop: 'office', value: value })}
                        >
                            <Picker.Item label={'President'} value={'President'} />
                            <Picker.Item label={'Governor'} value={'Governor'} />
                            <Picker.Item label={'Minister'} value={'Minister'} />
                        </Picker>
                    </Item>

                    <Form style={{ flex: 1 }}>
                        <Textarea
                            value={this.props.aboutParty}
                            onChangeText={value => { this.props.requestUpgradeUpdate({ prop: 'aboutParty', value: value }) }}
                            rowSpan={5}
                            style={{ borderWidth: 0.5, marginTop: 45 }}
                            placeholder="Tell us about your party" />
                    </Form>

                    <Form style={{ flex: 1 }}>
                        <Textarea
                            value={this.props.aboutYou}
                            onChangeText={value => { this.props.requestUpgradeUpdate({ prop: 'aboutYou', value: value }) }}
                            rowSpan={5}
                            style={{ borderWidth: 0.5, marginTop: 45 }}
                            placeholder="Tell us about your you" />
                    </Form>

                    <ListItem style={{ borderBottomWidth: 0, marginLeft: 0, marginTop: 25 }}>
                        <CheckBox onPress={() => this.props.requestUpgradeUpdate({ prop: 'tos', value: !this.props.tos })} checked={this.props.tos} />
                        <Body>
                            <Text style={{ fontSize: 14 }}>By Clicking I agree with terms and conditions</Text>
                        </Body>
                    </ListItem>

                    <Button
                        disabled={this.props.isLoading && this.props.tos} block rounded
                        onPress={() => this.upgrade()}
                        style={{ backgroundColor: buttoncolor, marginTop: 15 }}>
                        {this.renderButton()}
                    </Button>

                </Content>
            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    inputStyle: {

        borderColor: BORDER_COLOR,
    },

    iconViewStyle: {
        borderRadius: 100,
        padding: 7
    },

    linkedinViewStyle: {
        borderWidth: 0,

    },

    labelStyle: {
        marginTop: 35
    }
}

const mapStateToProps = (state) => {
    const { auth, email, password } = state.auth;
    const { isLoading } = state.loading;
    const { error } = state.errors;
    const { aboutParty, aboutYou, tos, office, party } = state.requestupgrade;
    return {
        aboutParty, aboutYou, tos, office,
        party, auth, email, password, isLoading,
        error
    };
};

export default connect(mapStateToProps, { requestUpgradeUpdate, requestUpgrade })(RequestUpgrade);

