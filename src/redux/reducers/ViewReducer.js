import {
    PETITION_VIEW, POST_VIEW, NOTIFICATION_VIEW,
    MESSAGE_LIST_VIEW, PROFILE_VIEW, ACTIVITY_VIEW,
    TOGGLE_SEARCH_BAR
} from './../actions/Types';


const INITIAL_STATE = {
    activeView: ACTIVITY_VIEW,
    navbarTitle: 'Home',
    showSearchBar: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PETITION_VIEW:
            return { ...state, activeView: PETITION_VIEW, navbarTitle: 'Home' };

        case POST_VIEW:

            return { ...state, activeView: POST_VIEW, navbarTitle: 'Home' };

        case MESSAGE_LIST_VIEW:

            return { ...state, activeView: MESSAGE_LIST_VIEW, navbarTitle: '' };

        case PROFILE_VIEW:

            return { ...state, activeView: PROFILE_VIEW, navbarTitle: 'Profile' };

        case NOTIFICATION_VIEW:

            return { ...state, activeView: NOTIFICATION_VIEW, navbarTitle: '' };

        case ACTIVITY_VIEW:

            return { ...state, activeView: ACTIVITY_VIEW, navbarTitle: 'Home' };

        case TOGGLE_SEARCH_BAR:

            return { ...state, showSearchBar: !state.showSearchBar };

        default:
            return state;
    }
};