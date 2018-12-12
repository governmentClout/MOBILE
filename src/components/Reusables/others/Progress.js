import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { SITE_COLOR, FONT_FAMILY } from '../../../style';


const Progress = ({ onPress, borderColor = ASH, barColor = ASH, disabled = false, textStyle, percentage = 0, height = 35, text }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={onPress} disabled={disabled} style={{ flex: 8, justifyContent: 'center', borderWidth: 1, borderColor, borderRadius: 5 }}>
                <View style={{ width: `${percentage}%`, height, backgroundColor: barColor }}></View>
                <Text style={[{ position: 'absolute', fontFamily: FONT_FAMILY }, textStyle]}>{text}</Text>
            </TouchableOpacity>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ marginLeft: 15, marginRight: 5, fontFamily: FONT_FAMILY }}>{percentage + '%'}</Text>
            </View>
        </View>
    )
};

const ASH = '#BDBDBD';

const styles = {

}

export { Progress }