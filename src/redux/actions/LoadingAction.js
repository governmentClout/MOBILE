import { LOADING, IMAGE_UPLOAD_LOADING } from './Types';


export const startLoading = () => {

    return {
        type: LOADING,
        payload: true
    }
};

export const startImageUploadLoading = () => {

    return {
        type: IMAGE_UPLOAD_LOADING,
        payload: true
    }
};

export const stopImageUploadLoading = () => {

    return {
        type: IMAGE_UPLOAD_LOADING,
        payload: false
    }
};

export const stopLoading = () => {

    return {
        type: LOADING,
        payload: false
    }
};