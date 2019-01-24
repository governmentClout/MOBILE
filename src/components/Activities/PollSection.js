import React, { Component } from 'react';
import {
    Container, Header, Body,
    Content, Input, ListItem,
    Item, CheckBox, DatePicker,
    Button, Tab, Tabs, Radio,
    TabHeading, Badge, Thumbnail,
    Segment, CardItem, Left, Right,
    Card
} from 'native-base';
import { Image, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { Text, Progress } from './../Reusables';
import { setActivePost, respondToPoll } from './../../redux/actions';

import { isObjectEmpty, hasRespondedToPoll, calculateOpacity, analyzePoll } from '../../Helper';


import {
    logo, avatar, backdrop,
    SITE_COLOR, FACEBOOK_COLOR,
    TWITTER_COLOR, GOOGLE_COLOR,
    WHITE, FONT_FAMILY
} from './../../style';

class PollSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            participated: false,
            percentages: {}
        }
    }

    selectOption(selected) {
        let data = {
            status: selected + "",
            poll: this.props.polluuid
        }
        console.log(data);
        this.props.respondToPoll(data);
        this.setState({ selected, participated: true });

    }

    componentDidMount() {
        const { responses, useruuid } = this.props;
        let response = hasRespondedToPoll(useruuid, responses);
        this.setState({ percentages: analyzePoll(responses) });
        if (!isObjectEmpty(response)) {
            console.log(response);
            this.setState({ selected: response.status, participated: true })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.responses);
        if (nextProps) {
            const { responses, useruuid } = nextProps;
            let response = hasRespondedToPoll(useruuid, responses);
            this.setState({ percentages: analyzePoll(responses) });
            if (!isObjectEmpty(response)) {
                console.log(response);
                this.setState({ selected: response.status, participated: true })
            }
        }
    }


    render() {

        const { sector, poll, opinion, useravatar, firstname = '', lastname = '', responses, useruuid } = this.props;

        let image = null;
        if (useravatar != undefined && useravatar != "") {
            image = { uri: useravatar };
        } else {
            image = avatar;
        }
        return (
            <Card style={{ elevation: 0, borderTopWidth: 0, marginTop: 5, marginBottom: 5 }}>
                <CardItem style={{ paddingRight: 5 }}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.userprofile({ frienduuid: poll.created_by })}>
                            <Thumbnail small source={image} />
                        </TouchableOpacity>
                        <Body>
                            <Text style={{ fontWeight: 'bold' }}>{lastname + ' ' + firstname}</Text>
                            <Text note>{sector}</Text>
                        </Body>
                    </Left>
                    <Right>

                        <Menu>
                            <MenuTrigger>
                                <MaterialIcon color={ICON_COLOR} name="more-vert" size={25} />
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption style={styles.menuOptionStyle} onSelect={() => console.log("pressed")} text='Delete' />

                            </MenuOptions>
                        </Menu>
                    </Right>
                </CardItem>
                <CardItem cardBody style={{ marginBottom: 15 }}>

                    <Content>
                        <ListItem style={styles.listItemStyle}>
                            <Text>{opinion}</Text>
                        </ListItem>
                        <ListItem style={styles.listItemStyle}>
                            <Progress
                                disabled={this.state.participated}
                                percentage={this.state.percentages.yes}
                                onPress={() => this.selectOption(TRUE)}
                                barColor={this.state.selected == TRUE ? POLL_COLOR : ASH}
                                textStyle={{ paddingLeft: 15 }}
                                text={'Yes/Agree/True'}
                            />
                            {/* <Left>
                                <Radio disabled={this.state.participated} onPress={() => this.selectOption(TRUE)} selectedColor={POLL_COLOR} selected={this.state.selected == TRUE} />
                                <Text style={{ marginLeft: 15 }}>Yes/Agree/True</Text>
                            </Left> */}


                        </ListItem>
                        <ListItem style={styles.listItemStyle}>
                            <Progress
                                disabled={this.state.participated}
                                percentage={this.state.percentages.no}
                                onPress={() => this.selectOption(FALSE)}
                                barColor={this.state.selected == FALSE ? POLL_COLOR : ASH}
                                textStyle={{ paddingLeft: 15 }}
                                text={'No/Disagree/False'}
                            />
                            {/* <Left>
                                <Radio disabled={this.state.participated} onPress={() => this.selectOption(FALSE)} selectedColor={POLL_COLOR} selected={this.state.selected == FALSE} />
                                <Text style={{ marginLeft: 15 }}>No/Disagree/False</Text>
                            </Left> */}
                        </ListItem>

                        <ListItem style={styles.listItemStyle}>
                            <Progress
                                disabled={this.state.participated}
                                percentage={this.state.percentages.undecided}
                                onPress={() => this.selectOption(UNDECIDED)}
                                barColor={this.state.selected == UNDECIDED ? POLL_COLOR : ASH}
                                textStyle={{ paddingLeft: 15 }}
                                text={'Undecided/Ambiguous'}
                            />
                            {/* <Left>
                                <Radio disabled={this.state.participated} onPress={() => this.selectOption(UNDECIDED)} selectedColor={POLL_COLOR} selected={this.state.selected == UNDECIDED} />
                                <Text style={{ marginLeft: 15 }}>Undecided/Ambiguous</Text>
                            </Left> */}
                        </ListItem>
                    </Content>
                </CardItem>

            </Card>
        );


    }
}

const TRUE = 1;
const FALSE = 2;
const UNDECIDED = 3;
const ICON_COLOR = '#4F4F4F';
const ASH = '#BDBDBD';
const POLL_COLOR = '#27A9F8';
const styles = {
    listItemStyle: {
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 3,
        borderBottomWidth: 0
    }
}

const REACTION_COLOR = '#333333';


const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { respondToPoll })(PollSection);

