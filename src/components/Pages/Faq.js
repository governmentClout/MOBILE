import React, { Component } from 'react';
import { Container, Header, Body, Content, Input, ListItem, Item, CheckBox, DatePicker, Button, Label } from 'native-base';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from './../Reusables';
import { logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './../../style';
import Footer from './Footer';
class Faq extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <ScrollView style={{ backgroundColor: WHITE }}>
                <View style={{ backgroundColor: SITE_COLOR, paddingTop: 70, paddingBottom: 70, flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: WHITE }}>Frequently Asked Questions</Text>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 40, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Text style={{ color: SITE_COLOR }}>General</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Text style={{ color: SITE_COLOR }}>Expand All</Text>
                        </TouchableOpacity>
                        <Text> | </Text>
                        <TouchableOpacity>
                            <Text style={{ color: SITE_COLOR }}>Collapse All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, borderWidth: 0.5, }}>
                    <View style={{ backgroundColor: SITE_COLOR, paddingTop: 10, paddingBottom: 10, flex: 1 }}>
                        <Text style={{ fontSize: 17, color: WHITE, paddingLeft: 10 }}>What is Gclout?</Text>
                    </View>
                    <View style={{ backgroundColor: BACK_COLOR }}>
                        <Text style={{ textAlign: 'justify', padding: 10, fontSize: 14 }}>
                            GClout is an  Google, to encourage teamwork, we emphasize the product triad. This triad consists of UX, PM and eng, and the reason why we emphasize this triad is because it is essentially what leads to the development of a product (done well when everyone works together).
                            At Google, to encourage teamwork, we emphasize the product triad. This triad consists of UX, PM and eng, and the reason why we emphasize this triad is because it is essentially what leads to the development.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ paddingTop: 10, paddingBottom: 10, flex: 1, marginTop: 30 }}>
                    <Text style={{ fontSize: 17, color: SITE_COLOR, paddingLeft: 15 }}>Our Approach</Text>
                </View>

                <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, borderWidth: 0.5 }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ paddingTop: 10, paddingBottom: 10, flex: 1, marginTop: 30 }}>
                    <Text style={{ fontSize: 17, color: SITE_COLOR, paddingLeft: 15 }}>Account Setup</Text>
                </View>

                <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, borderWidth: 0.5 }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: BACK_COLOR, justifyContent: 'space-between', padding: 10 }}>
                        <Text>How does Tutstack work?</Text>
                        <TouchableOpacity style={{ borderRadius: 100, padding: 3, paddingLeft: 9, paddingRight: 9, backgroundColor: SITE_COLOR }}>
                            <Text style={{ color: WHITE, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const BACK_COLOR = '#F2F2F2';

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

    footer: {
        marginTop: 50,
        borderTopWidth: 3,
        borderTopColor: SITE_COLOR
    },

    footercontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15,
    },

    footerlinks: {
        fontSize: 14
    }

}
export default Faq;
