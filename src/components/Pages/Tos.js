import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from './../Reusables';
import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Footer from './Footer';

class Privacy extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <ScrollView style={{ backgroundColor: WHITE }}>
                <View style={{ backgroundColor: SITE_COLOR, paddingTop: 70, paddingBottom: 70, flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: WHITE }}>Terms Of Use</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <View>
                        <Text style={styles.textStyle}>
                            Terms of Use Agreement
                        </Text>
                        <Text style={styles.textStyle}>
                            This Agreement was last modified on July 19, 2016, and was first published and made effective on December 7, 2011.
</Text>
                        <Text style={styles.textStyle}>
                            Welcome to bloc.io, the website and online service of Bloc, Inc. (Bloc, we, or us). This page explains the terms by which you may use our online and/or mobile services, web site, and software provided on or in connection with the service (collectively the Service). By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement (Agreement) and to the collection and use of your information as set forth in the Bloc Privacy Policy https://www.bloc.io/privacy, whether or not you are a registered user of our Service. This Agreement applies to all visitors, users, and others who access the Service (Users).
</Text>
                        <Text style={styles.textStyle}>
                            PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION.
</Text>
                        <Text style={styles.textStyle}>
                            Bloc may, in its sole discretion, modify or update this Agreement from time to time, and so you should review this page periodically. When we change the Agreement, we will update the last modified date at the top of this page. If there are material changes to this Agreement, we will notify you either by prominently posting a notice of such changes prior to implementing the change or by directly sending you a notification. Your continued use of the Service after any such change constitutes your acceptance of the new Terms of Use. If you do not agree to any of these terms or any future Terms of Use, do not use or access (or continue to access) the Service.
</Text>
                        <Text style={styles.textStyle}>
                            Use of Our Service
</Text>

                        <Text style={styles.textStyle}>
                            Bloc provides a place for beginners to learn how to program.
</Text>
                        <Text style={styles.textStyle}>
                            Eligibility
</Text>
                        <Text style={styles.textStyle}>
                            The Service is not available to any Users previously removed from the Service by Bloc.
</Text>
                        <Text style={styles.textStyle}>
                            Tutstack Accounts
</Text>
                        <Text style={styles.textStyle}>
                            Your Bloc account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion. We may maintain different types of accounts for different types of Users. If you open a Bloc account on behalf of a company, organization, or other entity, then (a) you includes you and that entity, and (b) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to this Agreement, and that you agree to this Agreement on the entity’s behalf. By connecting to Bloc with a third-party service, you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service.
</Text>
                        <Text style={styles.textStyle}>
                            You may never use another User's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We encourage you to use strong passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account. You must notify Bloc immediately of any breach of security or unauthorized.
                        </Text>
                    </View>

                </View>
                <Footer />
            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';
const ASH = '#333333';

const styles = {
    inputStyle: {
        marginTop: 30,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
    },

    iconViewStyle: {
        borderRadius: 100,
        padding: 7
    },

    textStyle: {
        color: ASH,
        fontSize: 15,
        lineHeight: 25,
        marginTop: 15,
        marginBottom: 15
    }
}
export default Privacy;
