import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Text, Button, Tab, Tabs,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class Sponsored extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Card style={{ elevation: 0, borderTopWidth: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail small source={avatar} />
                        <Body>
                            <Text>Fresh and Clean with Four Brothers Plc.</Text>
                            <Text note>Sponsored</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Text style={{ marginRight: 15, marginLeft: 15, paddingBottom: 20, textAlign: 'justify' }}>
                        dolore incididunt exercitation laboris tempor veniam ullamco.
                        <Text style={{ paddingTop: 5 }}>
                            This ads was made possibly by Four Brothers Plc.
                        </Text>
                    </Text>


                </CardItem>
                <CardItem style={{ paddingRight: 0, paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }}>
                    <Body>
                        <Image source={backdrop} style={{ height: 230, width: '100%', flex: 1 }} />

                    </Body>
                </CardItem>
                <CardItem style={{ flexDirection: 'row', height: 60, backgroundColor: '#F1F1F1' }}>

                    <Button style={{ flex: 1 }} transparent>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon size={20} name="thumbs-o-up" />
                            <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>12 Likes</Text>
                        </View>
                    </Button>


                    <Button style={{ flex: 1 }} transparent>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon size={20} name="comment-outline" />
                            <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>4 Comments</Text>
                        </View>
                    </Button>

                    <Button style={{ flex: 1 }} transparent>
                        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                            <Icon size={20} name="share" />
                            <Text style={{ paddingLeft: 5, color: REACTION_COLOR }}>10 Shares</Text>
                        </View>
                    </Button>

                </CardItem>
            </Card>
        );


    }
}

const styles = {

}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    // console.log(state.auth);
    return {};
};

export default connect(mapStateToProps, {})(Sponsored);

