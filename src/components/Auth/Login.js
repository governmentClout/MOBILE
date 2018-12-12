import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Text, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import LinkedInModal from 'react-native-linkedin'
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUpdate, loginUser, initializeUser } from './../../redux/actions';
import { Spinner, MaterialInput, AnimatedSpinner } from './../Reusables';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE, FONT_FAMILY } from './../../style';
import { calculateOpacity } from './../../Helper';
const { RNTwitterSignIn } = NativeModules

const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: "U62lLugwJ5DjrpN3qbf9bPWXL",
    TWITTER_CONSUMER_SECRET: "gvcIXjdhzbcickM6fqjOL3JXUMsko2XnnV2piAiWA6JEIbOovm"
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigninInProgress: false,
            userInfo: {}
        }
    }

    twitterSignIn = () => {

        RNTwitterSignIn.logIn()
            .then(loginData => {
                console.log(loginData)
                const { authToken, authTokenSecret, email } = loginData
                if (authToken && authTokenSecret) {

                    let data = {
                        email,
                        provider: 'twitter',
                    }
                    this.props.loginUser(data);
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
            }
            this.props.loginUser(data);
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
                        console.log(res.data);
                        const { email } = res.data;
                        let data = {
                            email,
                            provider: 'facebook'
                        }
                        this.props.loginUser(data);
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
            }
            this.props.loginUser(data);
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

                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                }
                this.getFacebookUserProfile();
            })
            .catch(err => console.log(err));
    }


    loginUser() {
        let data = {
            email: this.props.email,
            password: this.props.password,
            provider: 'email'
        }
        this.props.loginUser(data);
    }



    renderButton() {
        if (!this.props.isLoading) {

            return (
                <Text>LOGIN</Text>
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
            <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>
                <View style={{ alignSelf: 'center', marginBottom: 10, marginTop: 20 }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, color: '#4F4F4F', fontFamily: FONT_FAMILY }}>User Login</Text>
                </View>
                <View style={{ marginTop: 25, alignSelf: 'center' }}>
                    <Text style={{ color: 'red' }}>{this.props.error}</Text>
                </View>
                <Content style={{ marginLeft: 15, marginRight: 15, marginTop: 40 }}>
                    <MaterialInput
                        value={this.props.email}
                        label={"Email Address"}
                        placeholder={"Enter Email"}
                        onChangeText={value => { this.props.loginUpdate({ prop: 'email', value: value }) }}
                    />
                    <MaterialInput
                        value={this.props.password}
                        label={"Password"}
                        secureTextEntry
                        placeholder={"Enter Password"}
                        onChangeText={value => { this.props.loginUpdate({ prop: 'password', value: value }) }}
                    />

                    <Button
                        disabled={this.props.isLoading} block rounded
                        onPress={() => this.loginUser()}
                        style={{ backgroundColor: buttoncolor, marginTop: 15 }}>
                        {this.renderButton()}
                    </Button>

                    <TouchableOpacity onPress={() => Actions.forgotpassword()} style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center' }}>Forgot Password ?</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => Actions.register()}>
                            <Text style={{ color: SITE_COLOR }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15, alignSelf: 'center' }}>
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
                                closeStyle={{ width: 23, height: 23, marginBottom: -4, borderColor: WHITE }}
                                containerStyle={styles.linkedinViewStyle}
                                wrapperStyle={styles.linkedinViewStyle}
                                renderButton={() => <Icon name="linkedin" color='white' size={25} />}
                            />

                        </TouchableOpacity>
                    </View>

                    {/* <View>
                        <GoogleSigninButton
                            style={{ width: 48, height: 48 }}
                            size={GoogleSigninButton.Size.Icon}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => this.googleUserSignin()}
                            disabled={this.state.isSigninInProgress} />
                    </View> */}

                    {/* <View style={{ marginTop: 20 }}>
                        <LoginButton
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                            (data) => {
                                                console.log(data.accessToken.toString())
                                            }
                                        )
                                    }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")} />
                    </View>

                    <View style={{ marginTop: 20 }}>

                        <LinkedInModal
                            clientID="86j13jcngy51qo"
                            clientSecret="hI9gUVvpjSYukRx9"
                            redirectUri="https://abit.bluebecks.com/auth/linkedin/callback"
                            onError={(err) => { console.log(err) }}
                            onSuccess={(token) => { this.getUserProfile(token) }}
                            permissions={['r_basicprofile', 'r_emailaddress']}
                            linkText=" "
                        />

                    </View> */}
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

    }
}

const mapStateToProps = (state) => {
    const { auth, email, password } = state.auth;
    const { isLoading } = state.loading;
    const { error } = state.errors;
    return { auth, email, password, isLoading, error };
};

export default connect(mapStateToProps, { loginUpdate, loginUser, initializeUser })(Login);

