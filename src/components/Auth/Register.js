import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Text, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, NativeModules } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import LinkedInModal from 'react-native-linkedin'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { registerUpdate, registerUser } from './../../redux/actions';
import { Spinner, MaterialInput, AnimatedSpinner } from './../Reusables';
import { calculateOpacity } from './../../Helper';
import {
    logo, SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR, WHITE,
    FONT_FAMILY
} from './../../style';

const { RNTwitterSignIn } = NativeModules

const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: "U62lLugwJ5DjrpN3qbf9bPWXL",
    TWITTER_CONSUMER_SECRET: "gvcIXjdhzbcickM6fqjOL3JXUMsko2XnnV2piAiWA6JEIbOovm"
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            accept: false,
            isSigninInProgress: false,
            userInfo: {}
        };

    }

    twitterSignIn = () => {

        RNTwitterSignIn.logIn()
            .then(loginData => {
                // console.log(loginData)
                const { authToken, authTokenSecret, email, } = loginData
                if (authToken && authTokenSecret) {
                    let data = {
                        email,
                        provider: 'twitter',
                        tosAgreement: true
                    }
                    this.props.registerUser(data);
                }
            })
            .catch(error => {
                console.log(error, "error occured")
            }
            )
    }

    getLinkedUserProfile(token) {
        let Authorization = 'Bearer ' + token.access_token;
        axios.get('https://api.linkedin.com/v1/people/~:(id,first-name,last-name,num-connections,picture-url,email-address,positions,date-of-birth,phone-numbers)', {
            headers: {
                Authorization
            },
            params: {
                format: 'json'
            }

        }).then(res => {
            const { emailAddress } = res.data;
            let data = {
                email: emailAddress,
                provider: 'linkedin',
                password: 'svddxde',
                tosAgreement: true
            }
            this.props.registerUser(data);

        }).catch(err => {
            console.log(err);
        });
    }

    getFacebookUserProfile() {
        AccessToken.getCurrentAccessToken()
            .then((data) => {
                const { accessToken } = data;
                axios.get('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
                    .then(res => {
                        const { email } = res.data;
                        let data = {
                            email,
                            provider: 'facebook',
                            password: 'rdgvrdsfer',
                            tosAgreement: true
                        }
                        this.props.registerUser(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch(err => console.log(err));

    }

    componentWillMount() {
        RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
            .then(value => console.log(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET));
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '581412017249-ljn5cb0b7mc13l7ef143g31ltartb353.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
            accountName: '', // [Android] specifies an account name on the device that should be used
            iosClientId: '581412017249-ljn5cb0b7mc13l7ef143g31ltartb353.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }


    async getGoogleUserProfile() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo.user);
            const { email } = userInfo.user;
            let data = {
                email,
                provider: 'google',
                tosAgreement: true
            }
            this.props.registerUser(data);
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    handleFacebookLogin() {
        // let that = this;
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
            .then(result => {

                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    this.getFacebookUserProfile();
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                }

            })
            .catch(err => console.log(err));
    }


    registerUser() {
        data = {
            email: this.props.email,
            password: this.props.password,
            phone: this.props.phone,
            provider: 'email',
            tosAgreement: this.props.tosAgreement,
            dob: moment(this.props.dob).format('DD/MM/YYYY'),
        }
        this.props.registerUser(data);
    }

    renderButton() {
        if (!this.props.isLoading) {

            return (
                <Text>CREATE ACCOUNT</Text>
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
        let buttoncolor = !this.props.tosAgreement || this.props.isLoading ? SITE_COLOR + calculateOpacity(60) : SITE_COLOR;

        return (
            <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>
                <View style={{ alignSelf: 'center', marginBottom: 10, marginTop: 20 }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, color: '#4F4F4F', fontFamily: FONT_FAMILY }}>User Signup</Text>
                </View>
                <View style={{ marginTop: 25, alignSelf: 'center' }}>
                    <Text style={{ color: 'red' }}>{this.props.error}</Text>
                </View>
                <Content style={{ marginBottom: 30, marginLeft: 15, marginRight: 15, marginTop: 20 }}>


                    <MaterialInput
                        value={this.props.email}
                        label={"Email Address"}
                        placeholder={"Enter Email"}
                        onChangeText={value => { this.props.registerUpdate({ prop: 'email', value: value }) }}
                    />

                    <MaterialInput
                        value={this.props.password}
                        label={"Password"}
                        secureTextEntry
                        placeholder={"Enter Password"}
                        onChangeText={value => { this.props.registerUpdate({ prop: 'password', value: value }) }}
                    />

                    <MaterialInput
                        value={this.props.phone}
                        label={"Phone Number"}
                        placeholder={"Enter Phone number"}
                        onChangeText={value => { this.props.registerUpdate({ prop: 'phone', value: value }) }}
                    />

                    <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(1940, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Date of birth (DD/MM/YY)"
                        textStyle={{ fontSize: 16, height: 50, borderBottomWidth: 0.7, borderColor: BORDER_COLOR }}
                        placeHolderTextStyle={{ marginLeft: 10, marginRight: 10, color: "#d3d3d3", fontSize: 16, height: 50, borderBottomWidth: 0.7, borderColor: BORDER_COLOR }}
                        onDateChange={value => this.props.registerUpdate({ prop: 'dob', value: value })}

                    />


                    <ListItem style={{ borderBottomWidth: 0, marginLeft: 0, marginTop: 25 }}>
                        <CheckBox onPress={() => this.props.registerUpdate({ prop: 'tosAgreement', value: !this.props.tosAgreement })} checked={this.props.tosAgreement} />
                        <Body>
                            <Text style={{ fontSize: 14 }}>By Signing up I agree to the terms and conditions</Text>
                        </Body>
                    </ListItem>

                    <Button
                        disabled={!this.props.tosAgreement} block rounded
                        onPress={() => this.registerUser()}
                        style={{ backgroundColor: buttoncolor, marginTop: 15 }}>
                        {this.renderButton()}
                    </Button>


                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <Text style={{ color: SITE_COLOR }}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 25, alignSelf: 'center' }}>
                        <Text>OR</Text>

                    </View>

                    <View style={{ marginTop: 10, marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => this.handleFacebookLogin()} style={[styles.iconViewStyle, { backgroundColor: FACEBOOK_COLOR }]}>
                            <Icon name="facebook" color='white' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.twitterSignIn()} style={[styles.iconViewStyle, { backgroundColor: TWITTER_COLOR }]}>
                            <Icon name="twitter" color='white' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.getGoogleUserProfile()} style={[styles.iconViewStyle, { backgroundColor: GOOGLE_COLOR }]}>
                            <Icon name="google-plus" color='white' size={25} />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.iconViewStyle, { backgroundColor: TWITTER_COLOR }]}>
                            <LinkedInModal
                                clientID="86j13jcngy51qo"
                                clientSecret="hI9gUVvpjSYukRx9"
                                redirectUri="https://abit.bluebecks.com/auth/linkedin/callback"
                                onError={(err) => { console.log(err) }}
                                onSuccess={(token) => { this.getLinkedUserProfile(token) }}
                                permissions={['r_basicprofile', 'r_emailaddress']}
                                linkText=" "
                                closeStyle={{ width: 23, height: 23, marginBottom: -4, backgroundColor: SITE_COLOR, borderColor: SITE_COLOR }}
                                containerStyle={styles.linkedinViewStyle}
                                wrapperStyle={styles.linkedinViewStyle}
                                renderButton={() => <Icon name="linkedin" color='white' size={25} />}
                            />

                        </TouchableOpacity>
                    </View>

                </Content>
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
    },

    linkedinViewStyle: {
        borderWidth: 0,

    }
}
const mapStateToProps = (state) => {
    const { auth, email, dob, password, phone, tosAgreement } = state.auth;
    const { isLoading } = state.loading;
    const { error } = state.errors;

    return { auth, email, dob, password, phone, tosAgreement, isLoading, error };
};

export default connect(mapStateToProps, { registerUpdate, registerUser })(Register);

