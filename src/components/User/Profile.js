import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

import Dash from 'react-native-dash';
import Post from './../Activities/Post';
import Article from './Article';
import { Text, AnimatedSpinner } from './../Reusables';

import { getMyProfile, uploadBackgroundImage, uploadImage } from './../../redux/actions';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSegment: POST
        }
    }

    componentDidMount() {
        this.props.getMyProfile(this.props.uuid);
    }

    pickBackgroundImage() {
        ImagePicker.openPicker({
            width: 500,
            height: 400,
            cropping: true
        }).then(image => {

            this.props.uploadBackgroundImage(this.props.uuid, image);
        });
    }

    pickImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {

            this.props.uploadImage(this.props.uuid, image);
        });
    }

    render() {
        let image = avatar;
        if (this.props.profile.photo != '') {
            image = { uri: this.props.profile.photo }
        }

        let backgroundimage = backdrop;
        if (this.props.profile.background != '') {
            backgroundimage = { uri: this.props.profile.background }
        }

        return (
            <ScrollView style={{ backgroundColor: WHITE }}>

                <Image
                    source={backgroundimage}
                    style={{ height: 200, width: '100%' }}
                />
                <TouchableOpacity disabled={this.props.isImageUploadLoading} onPress={() => this.pickBackgroundImage()} style={{ position: 'absolute', borderRadius: 20, right: 5, top: 5, padding: 4, backgroundColor: SITE_COLOR }}>
                    {this.props.isImageUploadLoading ?
                        <AnimatedSpinner type={'Bounce'} size={17} color={WHITE} />
                        :
                        <Icon name={'pencil'} color={WHITE} size={17} />
                    }
                </TouchableOpacity>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: -50 }}>
                        <Thumbnail
                            source={image}
                            style={{ width: 100, height: 100, borderRadius: 100 }}
                        />

                    </View>
                    <TouchableOpacity disabled={this.props.isImageUploadLoading} onPress={() => this.pickImage()} style={{ position: 'absolute', borderRadius: 20, right: -5, top: 10, padding: 4, backgroundColor: SITE_COLOR }}>
                        {this.props.isImageUploadLoading ?
                            <AnimatedSpinner type={'Bounce'} size={17} color={WHITE} />
                            :
                            <Icon name={'pencil'} color={WHITE} size={17} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                    <Button style={[styles.editButtonStyle, { backgroundColor: SITE_COLOR }]} small onPress={() => Actions.requestupgrade()}>
                        <Text style={{ color: WHITE, fontSize: 13, padding: 5, fontFamily: FONT_FAMILY }}>Upgrade</Text>
                    </Button>
                    <Button style={styles.editButtonStyle} bordered small onPress={() => Actions.editprofile()}>
                        <Text style={{ color: SITE_COLOR, fontSize: 13, padding: 5, fontFamily: FONT_FAMILY }}>Edit Profile</Text>
                    </Button>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontFamily: FONT_FAMILY, fontSize: 22, color }}>{this.props.profile.firstName} {this.props.profile.lastName}</Text>
                </View>

                <View style={[{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, paddingBottom: 15 }]}>
                    <View>
                        <Text style={{ textAlign: 'center', fontFamily: FONT_FAMILY, fontSize: 17 }}>Following</Text>
                        <Text style={{ textAlign: 'center', fontFamily: FONT_FAMILY, color: SITE_COLOR }}>800</Text>
                    </View>

                    <View>
                        <Text style={{ textAlign: 'center', fontFamily: FONT_FAMILY, fontSize: 17 }}>Friends</Text>
                        <Text style={{ textAlign: 'center', fontFamily: FONT_FAMILY, color: SITE_COLOR }}>200</Text>
                    </View>
                </View>

                <Dash dashColor={LINE_COLOR} style={{ width: '100%', height: 1 }} />

                <View style={[{ marginTop: 15, paddingBottom: 15, marginLeft: 10 }]}>
                    <View style={{ marginBottom: 8 }}>
                        <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17, color: headingcolor }}>Contact Information</Text>

                    </View>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>Email Address</Text>
                        <Text style={{ fontFamily: FONT_FAMILY }}>{this.props.email}</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>Phone Number</Text>
                        <Text style={{ fontFamily: FONT_FAMILY }}>+234 [0] {this.props.phone}</Text>
                    </View>
                </View>

                <Dash dashColor={LINE_COLOR} style={{ width: '100%', height: 1 }} />

                <View style={[{ marginTop: 15, paddingBottom: 15, marginLeft: 10 }]}>
                    <View style={{ marginBottom: 8 }}>
                        <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17, color: headingcolor }}>Other Information</Text>

                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 30, marginLeft: 10, marginRight: 30, justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>Country</Text>
                            <Text style={{ fontFamily: FONT_FAMILY }}>{this.props.profile.nationality_origin}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>State</Text>
                            <Text style={{ fontFamily: FONT_FAMILY }}>{this.props.profile.state}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 30, marginLeft: 10, marginRight: 30, justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>L.G.A</Text>
                            <Text style={{ fontFamily: FONT_FAMILY }}>{this.props.profile.lga}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17 }}>Date of Birth</Text>
                            <Text style={{ fontFamily: FONT_FAMILY }}>{this.props.dob}</Text>
                        </View>
                    </View>

                    <Dash dashColor={LINE_COLOR} style={{ width: '100%', height: 1 }} />


                </View>

                <View style={[{ marginTop: 15, paddingBottom: 15, marginLeft: 10 }]}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontFamily: FONT_FAMILY, fontSize: 17, color: headingcolor }}>Political Office Holders</Text>

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 20, justifyContent: 'space-around' }}>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>President</Text>
                        </View>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Governor</Text>
                        </View>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Councilor</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 20, justifyContent: 'space-around' }}>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>President</Text>
                        </View>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Governor</Text>
                        </View>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Councilor</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 20, justifyContent: 'space-around' }}>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>President</Text>
                        </View>
                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Governor</Text>
                        </View>

                        <View>
                            <Thumbnail small style={styles.thumbnailStyle} source={avatar} />
                            <Text style={styles.politicalHeadNameStyle}>Marks Webber</Text>
                            <Text style={styles.politicalTitleStyle}>Governor</Text>
                        </View>


                    </View>

                    <Dash dashColor={LINE_COLOR} style={{ width: '100%', height: 1, marginTop: 15 }} />

                </View>

            </ScrollView>
        );


    }
}

const BORDER_COLOR = '#C4C4C4';

const styles = {
    editButtonStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: SITE_COLOR,
        marginTop: -40,
        marginRight: 15
    },

    dottedStyle: {
        borderBottomWidth: 1,
        borderRadius: 5,
        borderStyle: 'dotted',
        borderColor: '#C4C4C4'
    },

    politicalTitleStyle: {
        fontFamily: FONT_FAMILY,
        textAlign: 'center',
        fontSize: 12
    },

    politicalHeadNameStyle: {
        fontFamily: FONT_FAMILY,
        textAlign: 'center',
        fontSize: 13
    },

    postArticleSegmentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    buttonSegmentStyle: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderColor: SITE_COLOR,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center'
    },

    thumbnailStyle: {
        alignSelf: 'center'
    }


}

const tabIconSize = 20;

const color = '#333333';

const headingcolor = '#034D79';

const POST = 1;

const ARTICLE = 2;

const LINE_COLOR = '#C4C4C4';

const mapStateToProps = (state) => {
    const { profile } = state.profile;
    const { email, phone, dob, uuid } = state.auth.user;
    const { isImageUploadLoading } = state.loading;
    return { profile, email, phone, dob, uuid, isImageUploadLoading };
};

export default connect(mapStateToProps, { getMyProfile, uploadImage, uploadBackgroundImage })(Profile);

