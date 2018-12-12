import React, { Component } from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Text, Button, Tab, Tabs,
    TabHeading, Badge, Label,
    Picker
} from 'native-base';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    FONT_FAMILY, TWITTER_COLOR,
    GOOGLE_COLOR, WHITE
} from './../../style';

import { profileUpdate, createProfile, getCountries, getStates, getLgas } from './../../redux/actions';
import { MaterialInput, Spinner } from '../Reusables';

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentState: "Anambra"
        }
    }

    createProfile() {
        let data = {
            nationality_origin: this.props.nationality_origin,
            nationality_residence: this.props.nationality_residence,
            state: this.props.userState,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            lga: this.props.lga,
            photo: this.props.photo,
        }
        this.props.createProfile(this.props.uuid, data);
    }

    componentWillMount() {
        this.props.getCountries();
        this.props.getStates();
        this.props.getLgas(this.state.currentState);
    }

    renderButton() {
        if (this.props.isLoading) {
            return (
                <Spinner />
            );
        } else {
            return (
                <Button
                    onPress={() => this.createProfile()}
                    style={{ paddingRight: 15, paddingLeft: 15, backgroundColor: SITE_COLOR }}
                >
                    <Text>Create</Text>
                </Button>
            );
        }
    }

    renderCountries() {
        let countries = [];
        if (this.props.countries) {
            for (i in this.props.countries) {
                let country = this.props.countries[i];
                countries.push(
                    <Picker.Item key={country.name} label={country.name} value={country.name}
                    />);
            }
        }

        return countries;
    }

    renderStates() {
        let states = [];
        if (this.props.states) {
            for (i in this.props.states) {
                let state = this.props.states[i];
                states.push(
                    <Picker.Item key={state.name} label={state.name} value={state.name}
                    />);
            }
        }
        if (this.props.nationality_origin == "Nigeria") {
            return (
                <View>
                    <Label style={styles.labelStyle}>State of residence/interest</Label>
                    <Item picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select State"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.userState}
                            onValueChange={value => this.props.profileUpdate({ prop: 'userState', value: value })}

                        >
                            {states}
                        </Picker>
                    </Item>
                </View>

            );
        }
    }

    renderLgas() {
        let lgas = [];
        if (this.props.lgas) {
            for (i in this.props.lgas) {
                let lga = this.props.lgas[i];
                lgas.push(
                    <Picker.Item key={lga} label={lga} value={lga}
                    />);
            }
        }
        if (this.props.nationality_origin == "Nigeria") {
            return (
                <View>
                    <Label style={styles.labelStyle}>Lga of residence/interest</Label>
                    <Item picker>

                        <Picker
                            mode="dropdown"
                            iosIcon={<FontAwesomeIcon name="caret-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Lga"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.lga}
                            onValueChange={value => this.props.profileUpdate({ prop: 'lga', value: value })}

                        >
                            {lgas}
                        </Picker>
                    </Item>
                </View>
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userState != this.state.currentState) {
            this.setState({ currentState: nextProps.userState });
            nextProps.getLgas(nextProps.userState);
        }

    }

    render() {

        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>

                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
                    <Content>
                        {/* <Label style={styles.labelStyle}>First Name</Label> */}

                        <MaterialInput
                            value={this.props.firstName}
                            label={"First Name"}
                            placeholder={"First Name"}
                            onChangeText={value => { this.props.profileUpdate({ prop: 'firstName', value: value }) }}
                        />

                        <MaterialInput
                            value={this.props.lastName}
                            label={"Last Name"}
                            placeholder={"Last Name"}
                            onChangeText={value => { this.props.profileUpdate({ prop: 'lastName', value: value }) }}
                        />

                        <MaterialInput
                            value={this.props.email}
                            disabled={true}
                            label={"Email"}
                            placeholder={"Email"}
                        />

                        <MaterialInput
                            value={this.props.phone}
                            disabled={true}
                            label={"Phone"}
                            placeholder={"Phone"}
                            onChangeText={value => { this.props.profileUpdate({ prop: 'phone', value: value }) }}
                        />

                        <MaterialInput
                            value={this.props.photo}
                            label={"Photo"}
                            placeholder={"Photo"}
                            onChangeText={value => { this.props.profileUpdate({ prop: 'photo', value: value }) }}
                        />

                        {/* <Item style={styles.itemStyle} regular>

                            <Input
                                value={this.props.firstName}
                                onChangeText={value => { this.props.profileUpdate({ prop: 'firstName', value: value }) }}


                            />
                        </Item>

                        <Label style={styles.labelStyle}>Last Name</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input
                                value={this.props.lastName}
                                onChangeText={value => { this.props.profileUpdate({ prop: 'lastName', value: value }) }}

                            />
                        </Item>

                        <Label style={styles.labelStyle}>Email Address</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input disabled value={this.props.email} />
                        </Item>

                        <Label style={styles.labelStyle}>Phone Number</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input
                                disabled
                                value={this.props.phone}

                            />
                        </Item> */}

                        {/* <Label style={styles.labelStyle}>Photo</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input
                                value={this.props.photo}
                                onChangeText={value => { this.props.profileUpdate({ prop: 'photo', value: value }) }}

                            />
                        </Item> */}

                        <Label style={styles.labelStyle}>Country of Origin</Label>
                        <Item picker>

                            <Picker
                                mode="dropdown"
                                iosIcon={<FontAwesomeIcon name="caret-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Country of origin"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.props.nationality_origin}
                                onValueChange={value => this.props.profileUpdate({ prop: 'nationality_origin', value: value })}

                            >

                                {this.renderCountries()}
                            </Picker>
                        </Item>

                        <Label style={styles.labelStyle}>Country of Residence</Label>
                        <Item picker>

                            <Picker
                                mode="dropdown"
                                iosIcon={<FontAwesomeIcon name="caret-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Country of residence"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.props.nationality_residence}
                                onValueChange={value => this.props.profileUpdate({ prop: 'nationality_residence', value: value })}

                            >

                                {this.renderCountries()}
                            </Picker>
                        </Item>



                        {this.renderStates()}

                        {this.renderLgas()}

                        {/* <Label style={styles.labelStyle}>Password</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input secureTextEntry />
                        </Item>

                        <Label style={styles.labelStyle}>Confirm Password</Label>
                        <Item style={styles.itemStyle} regular>

                            <Input secureTextEntry />
                        </Item> */}
                        <View style={{ marginTop: 45, marginBottom: 20 }}>
                            {this.renderButton()}
                        </View>

                    </Content>
                </View>
            </ScrollView >
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
        marginBottom: 15,
        marginTop: 15,
        fontSize: 14,
        fontFamily: FONT_FAMILY,
        color: '#c4c4c4'
    },

    itemStyle: {
        borderColor: '#BDBDBD',
        borderBottomWidth: 1
    }
}

const tabIconSize = 20;


const mapStateToProps = (state) => {
    const { email, phone, uuid } = state.auth.user;
    const { lastName, firstName, nationality_origin, nationality_residence, userState, lga, photo } = state.profile;
    const { isLoading } = state.loading;
    const { countries, states, lgas } = state.location;
    // console.log(state.location);
    return {
        email, lastName, firstName,
        phone, nationality_origin, nationality_residence, userState,
        lga, photo, isLoading, countries,
        states, lgas, uuid
    };
};

export default connect(mapStateToProps, { createProfile, profileUpdate, getCountries, getStates, getLgas })(CreateProfile);

