import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';
import { Text } from './../Reusables';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY, sign
} from './../../style';

class Petition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSort: ALL
        }
    }

    activeStyle(value) {
        if (this.state.activeSort == value) {
            return {
                borderBottomWidth: 3,
                borderBottomColor: SITE_COLOR
            };
        } else {
            return {};
        }
    }

    render() {

        return (
            <View style={{ backgroundColor: '#E5E5E5' }}>
                <View style={{ backgroundColor: WHITE, paddingLeft: 15, paddingRight: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.setState({ activeSort: ALL })} style={[{ paddingTop: 12, paddingBottom: 12 }, this.activeStyle(ALL)]}>
                            <Text style={{ fontSize: 18 }}>    All    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ activeSort: PARTICIPATED })} style={[{ marginLeft: 25, paddingTop: 12, paddingBottom: 12 }, this.activeStyle(PARTICIPATED)]}>
                            <Text style={{ fontSize: 18 }}>Participated</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => Actions.filterpetition()} style={{ marginLeft: 15, paddingTop: 12, paddingBottom: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="filter-variant" size={25} />

                            <Text style={{ marginLeft: 15, fontSize: 18 }}>Filter</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ backgroundColor: '#E5E5E5', paddingTop: 15 }}>
                    <View>
                        <View style={styles.postArticleSegmentStyle}>
                            <TouchableOpacity onPress={() => Actions.createpetition()} style={[styles.buttonSegmentStyle, { borderRadius: 25, marginLeft: 15, marginRight: 15, paddingTop: 15 }]}>
                                <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                                    <FontAwesomeIcon name="file" color={SITE_COLOR} size={20} />
                                    <Text style={{ paddingLeft: 15 }}>Create Petition</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ paddingBottom: 20 }}>
                        <Card style={{ padding: 0, margin: 0, elevation: 0, borderTopWidth: 0, marginBottom: 10, marginTop: 10 }}>
                            <CardItem style={{ borderBottomWidth: 1, borderBottomColor: '#F1F1F1' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 15 }}>Petition to president Theresa May</Text>
                                    <Text style={{ fontSize: 15 }}>Economy</Text>
                                </View>

                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Thumbnail source={avatar} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>David Benjamin</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Text style={{ marginRight: 15, marginLeft: 15, paddingBottom: 20, textAlign: 'justify' }}>
                                    Deserunt aute excepteur excepteur est et. Id do duis ipsum consectetur amet sint duis adipisicing deserunt fugiat ea id dolor. Excepteur minim ipsum occaecat pariatur adipisicing aliqua et reprehenderit tempor. Officia cillum Lorem qui reprehenderit. In proident aliqua ea ad sint. Dolore laboris enim sit sunt veniam tempor consectetur esse in id amet culpa quis sunt.
                            </Text>
                            </CardItem>
                            <CardItem style={{ flexDirection: 'row', backgroundColor: '#F1F1F1', paddingTop: 0, paddingBottom: 0, height: 50 }}>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon size={20} name="comment-outline" />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>1</Text>
                                    </View>
                                </Button>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesomeIcon size={20} name="share" />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>10</Text>
                                    </View>
                                </Button>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={sign}
                                            style={{ width: 20, height: 20 }}
                                        />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>3</Text>
                                    </View>
                                </Button>

                                <Button small style={{ backgroundColor: SITE_COLOR, marginTop: 10 }}>
                                    <Text style={{ fontSize: 11, padding: 5, color: WHITE }}>Sign Petition</Text>
                                </Button>

                            </CardItem>
                        </Card>

                        <Card style={{ padding: 0, margin: 0, elevation: 0, borderTopWidth: 0, marginBottom: 10, marginTop: 10 }}>
                            <CardItem style={{ borderBottomWidth: 1, borderBottomColor: '#F1F1F1' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 15 }}>Petition to president Theresa May</Text>
                                    <Text style={{ fontSize: 15 }}>Economy</Text>
                                </View>

                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Thumbnail source={avatar} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>David Benjamin</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Text style={{ marginRight: 15, marginLeft: 15, paddingBottom: 20, textAlign: 'justify' }}>
                                    Deserunt aute excepteur excepteur est et. Id do duis ipsum consectetur amet sint duis adipisicing deserunt fugiat ea id dolor. Excepteur minim ipsum occaecat pariatur adipisicing aliqua et reprehenderit tempor. Officia cillum Lorem qui reprehenderit. In proident aliqua ea ad sint. Dolore laboris enim sit sunt veniam tempor consectetur esse in id amet culpa quis sunt.
                    </Text>
                            </CardItem>
                            <CardItem style={{ flexDirection: 'row', backgroundColor: '#F1F1F1', paddingTop: 0, paddingBottom: 0, height: 50 }}>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon size={20} name="comment-outline" />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>1</Text>
                                    </View>
                                </Button>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesomeIcon size={20} name="share" />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>10</Text>
                                    </View>
                                </Button>

                                <Button style={{ flex: 1 }} transparent>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={sign}
                                            style={{ width: 20, height: 20 }}
                                        />
                                        <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>3</Text>
                                    </View>
                                </Button>

                                <Button small style={{ backgroundColor: SITE_COLOR, marginTop: 10 }}>
                                    <Text style={{ fontSize: 11 }}>Sign Petition</Text>
                                </Button>

                            </CardItem>
                        </Card>
                    </View>

                </ScrollView>
            </View>
        );


    }
}

const styles = {
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
}

const REACTION_COLOR = '#333333';

const ALL = 'ALL';

const PARTICIPATED = 'PARTICIPATED';


const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(Petition);

