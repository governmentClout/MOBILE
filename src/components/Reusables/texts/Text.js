import React from 'react';
import { Text as UText } from 'react-native'


const Text = (props) => {

    return (
        <UText style={[styles.textStyle, props.style]}>
            {props.children}
        </UText>
    )
};

const styles = {
    textStyle: {
        color: '#4e4d4d',
        fontFamily: 'lato',
        lineHeight: 20
    }
};

export { Text }