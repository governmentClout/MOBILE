import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getStyleSheet, ORANGE, DISABLED } from './../styles';


const RoundedButton = ({ onPress, children, useDarkTheme, useWhiteButton, style, disabled }) => {

    const chosenStyle = getStyleSheet(useDarkTheme || false, useWhiteButton);

    const { roundedButtonStyle, buttonTextStyle } = styles;

    const externalStyle = style ? style : {};

    const isDisabled = disabled == undefined ? false : disabled;

    if (isDisabled) {
        externalStyle['backgroundColor'] = DISABLED;
        externalStyle['borderColor'] = DISABLED;
    }

    return (
        <TouchableOpacity disabled={isDisabled} onPress={onPress} style={[roundedButtonStyle, chosenStyle.roundedButtonStyle, externalStyle]}>
            <Text style={[buttonTextStyle, chosenStyle.buttonTextStyle]}>
                {children}
            </Text>
        </TouchableOpacity >
    );
};


const styles = {

    roundedButtonStyle: {
        alignSelf: 'stretch',
        borderRadius: 30,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: ORANGE,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.1,
        elevation: 3,
    },

    buttonTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '400',
        paddingTop: 9,
        paddingBottom: 9
    }

}

export { RoundedButton };
