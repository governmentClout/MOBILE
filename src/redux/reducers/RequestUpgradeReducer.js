import {
    REQUEST_UPGRADE_UPDATE
} from './../actions/Types';

const INITIAL_STATE = {
    party: 'APC',
    office: 'President',
    aboutYou: '',
    aboutParty: '',
    tos: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_UPGRADE_UPDATE:
            // action.payload == {prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};