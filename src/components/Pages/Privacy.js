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
                    <Text style={{ fontSize: 20, color: WHITE }}>Privacy Policy</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <View>
                        <Text style={styles.textStyle}>
                            This Privacy Policy was last modified on December 7, 2011, and was first published and made effective on December 7, 2011. Tutstack provides this Privacy Policy to explain our practices regarding the collection, use, disclosure, and protection of information that apply to our Service, as well as your choices regarding the collection and use of information. This Privacy Policy does not apply to information we collect by means (including offline) or from other sources other than through the Service. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Use.

                        </Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 16 }}>1. HOW WE COLLECT AND USE INFORMATION</Text>
                        <Text style={styles.textStyle}>

                            Personally Identifiable Information: We collect information that can be used to identify you as an individual (“Personally Identifiable Information”) only when you provide such information directly to us in connection with the Service.
                        </Text>
                        <Text style={styles.textStyle}>
                            We ask for Personally Identifiable Information such as your name and e-mail address when you register for a Member account with the Service, or if you correspond with us (in which case we will also retain our responses). We may also collect demographic information, such as your age, gender, preferences, and interests. If you purchase products or services or sign up for a paid subscription, then we will also ask for additional information, such as your credit card number and billing address. We may also retain any messages you send through the Service, and may collect information you provide in User Content you post to the Service.
                        </Text>
                        <Text style={styles.textStyle}>
                            We may receive Personally Identifiable Information about you from third parties, including, for example, information about your transactions, purchase history, or relationships with various product and service providers, and your use of certain applications. For example, if you access our website or Service through a third-party connection or log-in, for example, through Facebook Connect, by “following,” “liking,” adding the Bloc application, linking your account to the Bloc service, etc., that third party may pass certain information about your use of its service to Bloc. This information could include, but is not limited to, the user ID associated with your account, any information you have permitted the third party to share with us, and any information you have made public in connection with that service. You should always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to Bloc’s website or Service.
                        </Text>
                        <Text style={styles.textStyle}>
                            We use Personally Identifiable Information to communicate directly with you. We may send you emails containing newsletters, promotions and special offers. If you do not want to receive these marketing communications, you may change your preferences in your user profile settings page. We also use your Personally Identifiable Information to send you Service-related emails (e.g., account verification, purchase and billing confirmations and reminders, changes/updates to features of the Service, technical and security notices). You may not opt out of Service-related e-mails.
                        </Text>
                        <Text style={styles.textStyle}>
                            If you choose to use our invitation service to invite a third party to the Service, we will ask you for that person’s email address and automatically send an email invitation to the invitee. Bloc stores this information to send this
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
        lineHeight: 23,
        marginTop: 15,
        marginBottom: 15
    }
}
export default Privacy;
