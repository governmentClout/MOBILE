import React from 'react';
import { View, Text } from 'react-native'
import { SITE_COLOR } from '../../../style';


const Badge = ({ style, children }) => {
    return (
        <View style={[styles.badgeStyle, style]}>
            {children}
        </View>
    )
};

const styles = {
    badgeStyle: {
        justifyContent: 'center',
        height: 25,
        // paddingTop: 5,
        // paddingBottom: 5,
        // paddingLeft: 10,
        position: 'absolute',
        zIndex: 3,
        right: 10,
        // left: 15,
        // paddingRight: 10,
        borderRadius: 100,
        backgroundColor: SITE_COLOR
    }
};

export { Badge }