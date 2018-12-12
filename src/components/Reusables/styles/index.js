
const useDarkTheme = false;

// const ORANGE = '#ee4b48';

const DEEP_ORANGE = '#F32A27';

const DEEP_ASH = '#363640';

const ORANGE = '#F04B48'

const WHITE = '#fff';

const LIGHT_WHITE = '#c5c5c5';

const GRAY = '#f4f3f3';

const DARK = '#2f3039';

const BLACK = '#000000';

const LIGHT_DARK = '#3d3d48';

const FONT_FAMILY = 'Montserrat';

const DISABLED = '#dddddd'

const NEWS_IMAGE_HEIGHT = 85;

// start light theme
const LightTheme = {
    roundedButtonStyle: {
        backgroundColor: ORANGE,
        borderColor: '#ee4b44',

    },

    listItemTextStyle: {

    },

    textColor: {

    },



    titleHeadingStyle: {
        color: DARK
    },

    biographyTitleStyle: {
        color: '#000'
    },

    biographyDescriptionStyle: {
        color: DARK
    },

    twitterNameStyle: {

    },

    twitterTextStyle: {

    },

    urbanMusicHeadingStyle: {

    },

    urbanMusicArtistNameAndSongTextStyle: {

    },

    singleNewsTimeStyle: {
        color: LIGHT_DARK,
        fontFamily: FONT_FAMILY
    },

    singleNewsTitleStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        // color: DARK
    },

    singleNewsDescriptionStyle: {
        color: BLACK,
        fontFamily: FONT_FAMILY,
        lineHeight: 20,
        fontSize: 14
    },

    programNameStyle: {
        fontWeight: 'bold',
        fontSize: 13
    },

    buttonTextStyle: {
        color: WHITE,
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY
    },

    tabBarTextStyle: {
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 10
    },

    tabBarBackgroundColor: {
        color: WHITE
    },

    tabBarUnderlineStyle: {
        borderBottomColor: ORANGE,
        borderColor: ORANGE,
        backgroundColor: ORANGE,
        borderBottomWidth: 2,
    },

    tabBarInactiveColor: {
        color: '#737374'
    },

    inputTextStyle: {
        color: ORANGE,
        fontFamily: FONT_FAMILY
    },

    property: {
        blurColor: '#5c5d63',
        focusColor: ORANGE
    },

    backgroundStyle: {
        backgroundColor: GRAY,
        flex: 1,
    },

    newsBackgroundStyle: {
        backgroundColor: WHITE,
    },

    memberTextStyle: {
        fontSize: 18,
        color: ORANGE,
        marginLeft: 20,
        fontFamily: FONT_FAMILY
    },

    newsDescriptionStyle: {
        color: DARK,
        fontFamily: FONT_FAMILY
    },

    cardStyle: {
        backgroundColor: WHITE
    },

    artistOfTheWeekValueViewStyle: {
        backgroundColor: WHITE
    },

    artistOfTheWeekValueTextStyle: {
        color: DEEP_ORANGE

    }


};
// end of light theme

// start of dark theme
const DarkTheme = {
    roundedButtonStyle: {
        backgroundColor: DARK,
        borderColor: DARK,
    },

    titleHeadingStyle: {
        color: WHITE
    },

    biographyTitleStyle: {
        color: LIGHT_WHITE
    },

    singleNewsTimeStyle: {
        color: LIGHT_DARK,
        fontFamily: FONT_FAMILY
    },

    textColor: {
        color: WHITE
    },

    singleNewsTitleStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: WHITE
    },

    singleNewsDescriptionStyle: {
        fontFamily: FONT_FAMILY,
        lineHeight: 20,
        fontSize: 14,
        color: WHITE
    },

    twitterNameStyle: {
        color: WHITE
    },

    twitterTextStyle: {
        color: LIGHT_WHITE
    },

    biographyDescriptionStyle: {
        color: WHITE
    },

    listItemTextStyle: {
        color: WHITE
    },

    urbanMusicHeadingStyle: {
        color: WHITE
    },

    urbanMusicArtistNameAndSongTextStyle: {
        color: LIGHT_WHITE
    },

    programNameStyle: {
        color: WHITE,
        fontWeight: 'bold',
        fontSize: 13
    },

    buttonTextStyle: {
        color: WHITE,
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY
    },

    tabBarUnderlineStyle: {
        borderBottomColor: ORANGE,
        borderColor: ORANGE,
        backgroundColor: ORANGE,
        borderBottomWidth: 2,
    },

    tabBarBackgroundColor: {
        color: DARK
    },

    tabBarInactiveColor: {
        color: '#737374'
    },

    tabBarTextStyle: {
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 10
    },

    property: {
        blurColor: '#5c5d63',
        focusColor: ORANGE,

    },

    inputTextStyle: {
        color: WHITE,
        fontFamily: FONT_FAMILY
    },

    backgroundStyle: {
        backgroundColor: LIGHT_DARK,
        flex: 1,

    },

    memberTextStyle: {
        fontSize: 17,
        color: WHITE,
        marginLeft: 20,
        fontFamily: FONT_FAMILY
    },

    cardStyle: {
        backgroundColor: DARK
    },

    newsDescriptionStyle: {
        color: WHITE,
        fontFamily: FONT_FAMILY
    },

    artistOfTheWeekValueViewStyle: {
        backgroundColor: DEEP_ASH
    },

    artistOfTheWeekValueTextStyle: {
        color: WHITE

    }
};
// end of dark theme


const WhiteStyle = {
    roundedButtonStyle: {
        backgroundColor: WHITE,
        borderColor: WHITE,

    },
    buttonTextStyle: {
        color: ORANGE,
        fontWeight: 'bold'
    }
};

const getStyleSheet = (useDarkTheme = false, useWhiteButton = false) => {

    if (useWhiteButton) return WhiteStyle;
    return useDarkTheme ? DarkTheme : LightTheme;
}


export {
    getStyleSheet, NEWS_IMAGE_HEIGHT,
    ORANGE, DARK, WHITE,
};

