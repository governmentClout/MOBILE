import React, { Component } from 'react';
import { View } from 'react-native';
import { getStyleSheet, ORANGE } from './../styles';


const Card = (props) => {
    const { useDarkTheme } = props;

    const chosenStyle = getStyleSheet(useDarkTheme || false);

    const { containerStyle } = styles;

    const externalStyle = props.style ? props.style : {};

    return (
        <View style={[containerStyle, chosenStyle.cardStyle, externalStyle]}>
            {props.children}
        </View>
    );
};


const styles = {

    containerStyle: {
        borderWidth: 0.1,
        borderRadius: 1,
        // borderColor: "#efefea",
        // borderBottomWidth: 0.1,
        // shadowColor: "#ddd",
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        elevation: 1,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 3

    }

}

export { Card };
