import {
    PROFILE_UPDATE, PROFILE_UPDATE_SUCCESS,
    GET_MY_PROFILE, GET_USER_PROFILE
} from './../actions/Types';

const INITIAL_STATE = {
    nationality_origin: "Nigeria",
    nationality_residence: "Nigeria",
    userState: "Anambra",
    lga: "Anambra East",
    photo: "",
    firstName: "",
    lastName: "",
    profile: {},
    userprofile: {}

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PROFILE_UPDATE:
            // action.payload == {prop: 'name', value: 'jane'}

            return { ...state, [action.payload.prop]: action.payload.value };

        case PROFILE_UPDATE_SUCCESS:

            return { ...state, profile: action.payload };

        case GET_MY_PROFILE:

            return {
                ...state,
                profile: action.payload,
                nationality_origin: action.payload.nationality_origin,
                nationality_residence: action.payload.nationality_residence,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userState: action.payload.state,
                photo: action.payload.photo,
                lga: action.payload.lga
            };

        case GET_USER_PROFILE:

            return {
                ...state,
                userprofile: action.payload,
            };



        default:
            return state;
    }
};
