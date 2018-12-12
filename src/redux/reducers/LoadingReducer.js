import {
    LOADING, IMAGE_UPLOAD_LOADING
} from './../actions/Types';

const INITIAL_STATE = {
    isLoading: false,
    isImageUploadLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: action.payload };

        case IMAGE_UPLOAD_LOADING:
            return { ...state, isImageUploadLoading: action.payload };

        default:
            return state;
    }
};