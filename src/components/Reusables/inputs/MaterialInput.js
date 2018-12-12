import React, { Component } from 'react';
import { View, Text, TextInput, Platform, LayoutAnimation, UIManager } from 'react-native';
import { getStyleSheet, ORANGE } from './../styles';
import { SITE_COLOR } from '../../../style';

class MaterialInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: '#c4c4c4',
            focusColor: SITE_COLOR,
            underlindColor: '#c4c4c4',
            theme: props.useDarkTheme
        };

        // checks for platform
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental
                && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {

        const styles = {
            labelStyle: {
                fontSize: 15,
                fontWeight: 'normal',
                height: 20
            },

            inputStyle: {
                paddingRight: 5,
                paddingLeft: 15,
                fontSize: 16,
                lineHeight: 15,
                height: 40
            },

            inputStyleFocus: {
                color: SITE_COLOR
            },

            errorStyle: {
                color: ORANGE,
                textAlign: 'right',
                marginRight: 10,
                fontWeight: '500'
            },

            containerStyle: {
                height: 50,
                flexDirection: 'column',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 2,
                marginBottom: 20
            }
        }

        // destructures the styles
        const { labelStyle, inputStyle, containerStyle, inputStyleFocus, errorStyle } = styles;
        const {
            label, onChangeText, value,
            placeholder, textContentType,
            autoCorrect, secureTextEntry,
            error, disabled
        } = this.props;

        return (
            <View style={containerStyle}>
                <Text style={[labelStyle, { color: this.state.color }]}>{label}</Text>

                <TextInput onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    disabled={disabled}
                    style={[inputStyle]}
                    textContentType={textContentType}
                    autoCorrect={autoCorrect || false}
                    onChangeText={onChangeText}
                    underlineColorAndroid={this.state.underlindColor}
                    onFocus={() => { this.setState({ underlindColor: this.state.focusColor }); LayoutAnimation.spring() }}
                    onBlur={() => this.setState({ underlindColor: this.state.color })}

                />
                <Text style={errorStyle}>{error}</Text>

            </View>
        );


    }
}
export { MaterialInput };
