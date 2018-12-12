import {
    TOGGLE_SHARE_MODAL, SET_SHARABLE_CONTENT
} from './../actions/Types';

const INITIAL_STATE = {
    content: {},
    url: '',
    message: '',
    subject: '',
    postuuid: '',
    shareVisibility: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_SHARE_MODAL:
            return { ...state, shareVisibility: action.payload };

        case SET_SHARABLE_CONTENT:
            return {
                ...state,
                url: action.payload.url,
                message: action.payload.message,
                subject: action.payload.subject,
                postuuid: action.payload.postuuid
            }

        default:
            return state;
    }
};