import React, { Component } from 'react';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { Input } from 'native-base';
import {
    ORANGE, iconColor
} from './components/Reusables/styles';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Auth/Dashboard';
import EditProfile from './components/User/EditProfile';
import CreateProfile from './components/User/CreateProfile';
import Profile from './components/User/Profile';
import UserProfile from './components/User/UserProfile';
import Comment from './components/Activities/Comment';
import Chat from './components/User/Chat';
import RequestUpgrade from './components/User/RequestUpgrade';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import ChangePassword from './components/Auth/ChangePassword';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Initializer from './components/Initializer';
import Faq from './components/Pages/Faq';
import Privacy from './components/Pages/Privacy';
import Tos from './components/Pages/Tos';

import { avatar, logo, SITE_COLOR, FACEBOOK_COLOR, TWITTER_COLOR, GOOGLE_COLOR, WHITE } from './style';
import CreatePetition from './components/Activities/CreatePetition';
import FilterPetition from './components/Activities/FilterPetition';
import CreatePost from './components/Activities/CreatePost';
import CreatePoll from './components/Activities/CreatePoll';
import Poll from './components/Activities/Poll';
import { switchView, toggleSearchBar, initializeUser } from './redux/actions';
import { PROFILE_VIEW, ACTIVITY_VIEW } from './redux/actions/Types';
import TitleBar from './components/TitleBar';
import RightButton from './components/RightButton';
import RightButtonDash from './components/RightButtonDash';
import CreateArticle from './components/Activities/CreateArticle';
import Search from './components/User/Search';
import FilterPoll from './components/Activities/FilterPoll';
import PendingRequest from './components/User/PendingRequest';
import BlockedRequest from './components/User/BlockedRequest';
import Friends from './components/User/Friends';


const MenuIcon = () => {
    return (
        <Icon name="view-headline" color="grey" size={30} />
    );
};



const BackIcon = () => {
    return (
        <Icon name="keyboard-backspace" color="grey" size={30} />
    );
};

class RouterComponent extends Component {
    constructor(props) {
        super();

    }

    AppLogo = () => {
        return (
            <Image
                source={logo}
                style={{ width: 30, height: 30, marginLeft: 10 }}
            />

        );
    }

    chatHead = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={avatar}
                    style={{ width: 40, height: 40, marginLeft: 10 }}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 5, fontSize: 18 }}>Mark Anthony</Text>
            </View>
        );
    }


    render() {

        const rightIcon = () => {
            return (
                <Icon name="unfold-more-vertical" color={iconColor} size={30} />
            );
        };

        return (
            <Router>

                <Scene key="root" hideNavBar>
                    <Scene key="initializer" component={Initializer} />
                    <Scene
                        key="auth"
                        navigationBarStyle={styles.commonNavigationBarStyle}>
                        <Scene key="login" onLeft={() => console.log('hger')} renderLeftButton={this.AppLogo()} component={Login} />
                        <Scene key="register" onLeft={() => console.log('hger')} renderLeftButton={this.AppLogo()} component={Register} />
                        <Scene key="forgotpassword" onLeft={() => console.log('hger')} renderLeftButton={this.AppLogo()} component={ForgotPassword} />
                        <Scene key="resetpassword" onLeft={() => console.log('hger')} renderLeftButton={this.AppLogo()} component={ResetPassword} />

                        <Scene key="changepassword" onLeft={() => console.log('hger')} renderLeftButton={this.AppLogo()} component={ChangePassword} />
                    </Scene>

                    <Scene
                        key="faq"
                        title="Frequently Asked Questions"
                        titleStyle={[styles.titleStyle, { color: '#000000' }]}
                        hideNavBar={false}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        onLeft={() => console.log('hger')}
                        backTitle="back"
                        component={Faq}
                    />
                    <Scene
                        key="privacy"
                        title="Privacy Policy"
                        titleStyle={[styles.titleStyle, { color: '#000000' }]}
                        hideNavBar={false}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        onLeft={() => console.log('hger')}
                        backTitle="back"
                        component={Privacy}
                    />

                    <Scene
                        key="tos"
                        title="Terms of use"
                        titleStyle={[styles.titleStyle, { color: '#000000' }]}
                        hideNavBar={false}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        onLeft={() => console.log('hger')}
                        backTitle="back"
                        component={Tos}
                    />
                    <Scene key="editprofile"
                        title="Edit Profile"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={EditProfile} />

                    <Scene key="poll"
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={Poll} />

                    <Scene key="createprofile"
                        title="Create Profile"
                        // backTitle="Back"
                        // backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        // initial
                        titleStyle={{ color: SITE_COLOR, flex: 1, textAlign: 'center' }}
                        navigationBarStyle={{ elevation: 1, }}
                        component={CreateProfile} />

                    <Scene key="chat"
                        backTitle="Back"
                        renderTitle={this.chatHead()}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        navigationBarStyle={{ elevation: 0, borderBottomWidth: 0.5, borderBottomColor: '#C4C4C4' }}
                        component={Chat} />

                    <Scene key="filterpetition"
                        title="Filter"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={FilterPetition} />

                    <Scene key="filterpoll"
                        title="Filter Polls"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={FilterPoll} />

                    <Scene key="createpetition"
                        title="Petition"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={CreatePetition} />

                    <Scene key="settings"
                        title="Settings"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={Settings}
                    />

                    <Scene
                        backTitle="Back"
                        key="profile"
                        component={Profile}
                        title={'Profile'}
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                    />

                    <Scene
                        backTitle="Back"
                        key="userprofile"
                        component={UserProfile}
                        title={'Profile'}
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                    />

                    <Scene key="createpost"
                        title="Post"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        component={CreatePost} />


                    <Scene key="createarticle"
                        title="Article"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={CreateArticle} />

                    <Scene key="createpoll"
                        title="Poll"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal' }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={CreatePoll} />

                    <Scene key="comment"
                        title="Comments"
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal', flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        component={Comment} />

                    <Scene key="search"

                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal', flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        component={Search}
                        renderTitle={<TitleBar />}
                        renderRightButton={<RightButton />}

                    />

                    <Scene key="pendingrequest"
                        backTitle="Back"
                        title="Pending Request"
                        titleStyle={{ fontWeight: 'normal', color: SITE_COLOR, flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        component={PendingRequest}
                        renderRightButton={<RightButton />}
                    />

                    <Scene key="friends"
                        backTitle="Back"
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        title="Friends"
                        titleStyle={{ fontWeight: 'normal', color: SITE_COLOR, flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}
                        component={Friends}
                        renderRightButton={<RightButton />}
                    />

                    <Scene key="blockedrequest"
                        backTitle="Back"
                        title="Blocked Request"
                        titleStyle={{ fontWeight: 'normal', color: SITE_COLOR, flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        navigationBarStyle={styles.commonNavigationBarStyle}
                        hideNavBar={false}
                        component={BlockedRequest}
                        renderRightButton={<RightButton />}
                    />

                    <Scene key="requestupgrade"
                        title=""
                        backTitle="Back"
                        titleStyle={{ fontWeight: 'normal', flex: 1 }}
                        backButtonTintColor={SITE_COLOR}
                        hideNavBar={false}

                        component={RequestUpgrade} />

                    <Scene
                        key="drawer"
                        drawer
                        contentComponent={Menu}
                        drawerWidth={330}
                        // initial
                        drawerIcon={MenuIcon}
                        // renderTitle={<TitleBar/>}
                        renderRightButton={<RightButtonDash />}

                    >
                        <Scene
                            key="dashboard"
                            component={Dashboard}
                            navigationBarStyle={[styles.commonNavigationBarStyle, { width: '100%' }]}

                        />


                    </Scene>
                </Scene>

            </Router>

        );
    }
}

const styles = {
    navigationBarTitleImageStyle: {
        width: 150,
        height: 40,
        flex: 1,
        alignSelf: 'center'
    },

    commonNavigationBarStyle: {
        elevation: 0,
        borderBottomWidth: 0.8,
        borderBottomColor: '#C4C4C4'
    },

    titleStyle: {
        textAlign: 'center',
        fontWeight: 'normal',
        marginLeft: -15,
        flex: 1,
        color: SITE_COLOR
    }

}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, { initializeUser, switchView, toggleSearchBar })(RouterComponent);
