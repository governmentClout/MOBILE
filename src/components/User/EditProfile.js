import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

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

import { profileUpdate, createProfile, getCountries, getStates, getLgas, saveProfile, uploadImage } from './../../redux/actions';
import { MaterialInput, Spinner, AnimatedSpinner } from '../Reusables';
import { calculateOpacity } from './../../Helper';

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentState: "Anambra",
            profile: 'hgh',
            imageLink: 'Photo'
        }
    }

    editProfile() {
        let data = {
            nationality_origin: this.props.nationality_origin,
            nationality_residence: this.props.nationality_residence,
            state: this.props.userState,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            lga: this.props.lga,
        }
        this.props.saveProfile(this.props.uuid, data);
    }

    pickImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ imageLink: image.path });
            console.log(image);
            this.props.uploadImage(image);
        });
    }

    componentWillMount() {
        this.props.getCountries();
        this.props.getStates();
        this.props.getLgas(this.state.currentState);
    }

    renderCountries() {
        let countries = [];
        if (this.props.countries) {
            for (i in this.props.countries) {
                let country = this.props.countries[i];
                countries.push(
                    <Picker.Item
                        key={country.name}
                        label={country.name}
                        value={country.name}
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

    renderButton() {
        if (!this.props.isLoading) {

            return (
                <Text>Save</Text>
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
            <ScrollView style={{ backgroundColor: '#fff' }}>

                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
                    <Content>

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


                        {/* <MaterialInput
                            value={this.props.phone}
                            disabled={true}
                            label={"Phone"}
                            placeholder={"Phone"}
                            onChangeText={value => { this.props.profileUpdate({ prop: 'phone', value: value }) }}
                        /> */}
                        <View style={{ marginLeft: 10 }}>
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
                        </View>
                        <View style={{ marginTop: 45, marginBottom: 20 }}>

                            <Button
                                disabled={this.props.isLoading} block rounded
                                onPress={() => this.editProfile()}
                                style={{ backgroundColor: buttoncolor, marginTop: 15 }}>
                                {this.renderButton()}
                            </Button>
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
        // marginLeft: 5,
        fontFamily: FONT_FAMILY,
        fontSize: 14,
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

export default connect(mapStateToProps, { createProfile, profileUpdate, getCountries, getStates, getLgas, saveProfile, uploadImage })(EditProfile);

