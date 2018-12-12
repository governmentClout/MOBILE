import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";
import { Content, List, ListItem, Thumbnail } from 'native-base';
import { logoutUser, initializeUser, getMyProfile } from './../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from './../components/Reusables';
import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../style';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            theme: false
        }
    }


    componentWillMount() {
        this.props.getMyProfile(this.props.user.uuid);
    }


    renderAvatar() {

        let image = avatar;
        if (this.props.profile.photo != '') {
            image = { uri: this.props.profile.photo }
        }

        return (
            <View>
                <View style={{ flex: 1, backgroundColor: '#27A9F8', paddingLeft: 20, paddingTop: 40, paddingBottom: 20 }}>
                    <Thumbnail
                        source={image}
                        large
                        style={{ width: 80, height: 80 }}
                    />
                    <View style={{ marginTop: 20, flex: 1 }}>
                        <Text style={{ color: WHITE, fontSize: 17 }}>{this.props.profile.lastName} {this.props.profile.firstName}</Text>
                        <Text style={{ color: WHITE }}>{this.props.user.email}</Text>

                    </View>
                </View>


            </View>
        );

    }

    renderLogout() {
        if (this.props.auth) {
            return (
                <ListItem onPress={() => this.props.logoutUser()} style={styles.listItemStyle}>
                    <View style={styles.listItemViewStyle}>
                        <Icon name="power" color={ICON_COLOR} size={30} />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={[styles.listItemTextStyle]}>Logout</Text>
                        </View>
                    </View>
                </ListItem>
            );
        }

        // Actions.login();
    }



    render() {

        return (

            <ScrollView style={{ marginBottom: 15 }}>

                {this.renderAvatar()}

                <View style={{ flex: 1, marginTop: 20 }}>
                    <Content>
                        <List>
                            <ListItem onPress={() => Actions.dashboard()} style={styles.listItemStyle}>
                                <View style={styles.listItemViewStyle}>
                                    <Icon name="home" color={ICON_COLOR} size={30} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={styles.listItemTextStyle}>Home</Text>
                                    </View>
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.profile()} style={styles.listItemStyle}>
                                <View style={styles.listItemViewStyle}>
                                    <Icon color={ICON_COLOR} name="account-box" size={30} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={[styles.listItemTextStyle]}>Profile</Text>
                                    </View>
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.settings()} style={styles.listItemStyle}>
                                <View style={styles.listItemViewStyle}>
                                    <Icon color={ICON_COLOR} name="settings" size={30} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={[styles.listItemTextStyle]}>Settings</Text>
                                    </View>
                                </View>

                            </ListItem>

                            <ListItem onPress={() => Actions.faq()} style={styles.listItemStyle}>
                                <View style={styles.listItemViewStyle}>
                                    <Icon color={ICON_COLOR} name="help-circle" size={30} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={[styles.listItemTextStyle]}>FAQs</Text>
                                    </View>
                                </View>

                            </ListItem>

                            {this.renderLogout()}

                        </List>
                    </Content>


                </View>
            </ScrollView>
        );
    }
}

const ICON_COLOR = '#4F4F4F';

const styles = {
    backgroundImageStyle: {
        width: '100%',
        height: 400,
        backgroundColor: 'transparent',
        opacity: 1,
        marginBottom: -100

    },

    listItemStyle: {
        borderBottomWidth: 0,
        paddingLeft: 15,
        marginLeft: 0
    },

    listItemViewStyle: {
        flex: 1,
        flexDirection: 'row'
    },

    listItemTextStyle: {
        fontSize: 16,
        marginLeft: 20,
        color: ICON_COLOR
    },

    listIconStyle: {
        width: 18,
        height: 18
    }
}

const mapStateToProps = (state) => {

    const { auth, user } = state.auth;
    const { profile } = state.profile;
    // console.log(profile);
    return { auth, user, profile }
};

export default connect(mapStateToProps, { logoutUser, initializeUser, getMyProfile })(Menu); 