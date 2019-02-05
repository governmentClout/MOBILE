import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";
import { Content, List, ListItem, Card, Left, Right, Switch } from 'native-base';
import { logoutUser, initializeUser, getMyProfile } from './../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { logo, avatar, backdrop, SITE_COLOR, FACEBOOK_COLOR, FONT_FAMILY, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../style';

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            enablePushNotification: false,
            enableSound: false
        }
    }


    render() {

        return (

            <ScrollView>


                <Card style={{ flex: 1, marginLeft: 0, marginTop: 5, marginRight: 0 }}>
                    <Content>
                        <List>
                            <ListItem style={[styles.listItemStyle, { paddingLeft: 0 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ borderLeftWidth: 5, borderLeftColor: SITE_COLOR, marginRight: 10 }}></View>
                                    <Text style={{ fontSize: 15, fontFamily: FONT_FAMILY, fontWeight: 'bold' }}> General Settings </Text>
                                </View>

                            </ListItem>
                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>Enable push notification</Text>
                                </Left>
                                <Right>
                                    <Switch thumbTintColor={SITE_COLOR} trackColor={SITE_COLOR} onValueChange={() => this.setState({ enablepushPotification: !this.state.enablepushPotification })} value={this.state.enablepushPotification} />
                                </Right>

                            </ListItem>

                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>Enable Sound</Text>
                                </Left>
                                <Right>
                                    <Switch thumbTintColor={SITE_COLOR} trackColor={SITE_COLOR} onValueChange={() => this.setState({ enableSound: !this.state.enableSound })} value={this.state.enableSound} />
                                </Right>

                            </ListItem>

                        </List>
                    </Content>
                </Card>

                <Card style={{ flex: 1, marginLeft: 0, marginTop: 25, marginRight: 0 }}>
                    <Content>
                        <List>
                           

                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>Privacy Policy</Text>
                                </Left>

                            </ListItem>

                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>Terms & Conditions</Text>
                                </Left>

                            </ListItem>

                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>About Gclout</Text>
                                </Left>

                            </ListItem>

                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.settingTextTitle}>Build Version 0.1</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 14 }}>Auto update</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {

    listItemStyle: {
        height: 60,
        paddingLeft: 15,
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef'
    },

    listItemViewStyle: {
        flex: 1,
        flexDirection: 'row'
    },

    listItemTextStyle: {
        paddingLeft: 25,
        fontSize: 18
    },

    listIconStyle: {
        width: 18,
        height: 18
    },

    settingTextTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: FONT_FAMILY
    }
}

const mapStateToProps = (state) => {

    return {}
};

export default connect(mapStateToProps, {})(Settings); 