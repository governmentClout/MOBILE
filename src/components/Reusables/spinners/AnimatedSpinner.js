import React from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';

const AnimatedSpinner = ({ text, textStyle, right, size, style, type, color }) => {
    return (
        <View style={[{ flexDirection: 'row' }, style]}>
            {/* {right == undefined ? <Text style={[{ marginRight: 20 }, textStyle]}>{text}</Text> : <Text></Text>} */}
            <Spinner size={size} type={type} color={color} />
            {/* {right == true ? <Text style={[{ marginLeft: 20 }, textStyle]}>{text}</Text> : <Text></Text>} */}
        </View>
    )
};

export { AnimatedSpinner }