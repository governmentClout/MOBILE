import React, { Component } from 'react';
import {
    ScrollView, View, TouchableWithoutFeedback, Text, UIManager, Platform,
    LayoutAnimation, ImageBackground, Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Card } from './../index';
import {
    getStyleSheet, getArtistImage,
    getAuthBackgroundImage, ORANGE, DEEP_ORANGE,
    DARK, NEWS_IMAGE_HEIGHT, AUTH_BACKGROUND_IMAGE, WHITE
} from './../styles';

class PlaylistCard extends Component {
    constructor(props) {
        super();
        this.state = {
            theme: true
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental
                && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        const chosenStyle = getStyleSheet(this.state.theme);
        const backgroundImageUri = getArtistImage(this.state.theme);
        const { style } = this.props;
        return (
            <TouchableWithoutFeedback>
                <View>
                    <Card style={[{ backgroundColor: DEEP_ORANGE, borderRadius: 6, paddingBottom: 10 }, style]} useDarkTheme={this.state.theme}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                source={{ uri: 'http://www.dlisted.com/files/nickiminajface2013.jpg' }}
                                style={styles.imageStyle}
                            />
                            <Text style={styles.textStyle}>Nwanze Franklin</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                <Text style={styles.playlistTextStyle}>Playlist</Text>
                                <Text style={[styles.playlistTextStyle, { fontSize: 22 }]}>23</Text>
                                <Text style={styles.playlistTextStyle}>Tracks</Text>
                            </View>

                            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                <Text style={styles.playlistTextStyle}> </Text>
                                <Text style={[styles.playlistTextStyle, { fontSize: 22 }]}>20</Text>
                                <Text style={styles.playlistTextStyle}>Play</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'flex-end' }}>
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                    <Icon name="play-arrow" size={35} color={WHITE} />
                                </View>

                                <View style={{ flexDirection: 'column', marginTop: 6 }}>
                                    <Text style={[styles.playlistTextStyle]}>Play All</Text>

                                </View>
                            </View>

                        </View>

                    </Card>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    imageStyle: {
        width: 32,
        height: 32,
        marginLeft: 15,
        marginRight: 5,
        marginTop: 15,
        borderRadius: 100
    },

    textStyle: {
        color: WHITE,
        fontSize: 12,
        marginTop: 20
    },

    playlistTextStyle: {
        color: WHITE,
        fontSize: 12,
        marginTop: 2
    }

}

export { PlaylistCard };
