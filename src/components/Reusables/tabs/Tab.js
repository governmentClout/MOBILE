import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
        <Text style={{ fontSize: 40 }}>WOW</Text>
    </View>
);
const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
        <Text style={{ fontSize: 40 }}>WOW</Text>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
        <Text style={{ fontSize: 40 }}>WOW</Text>
    </View>
);

const FourthRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
        <Text style={{ fontSize: 40 }}>WOW</Text>
    </View>
);

const FifthRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
        <Text style={{ fontSize: 40 }}>WOW</Text>
    </View>
);

class Tab extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
            { key: 'third', title: 'Third' },
            { key: 'fourth', title: 'fourth' },
            { key: 'fifth', title: 'fifth' },
        ],
    };

    onTabPress() {
        console.log(this.state.index, "pressed");
    }

    render() {
        return (
            <TabView style={{ flex: 1 }}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: ThirdRoute,
                    fourth: FourthRoute,
                    fifth: FifthRoute
                })}
                onTabPress={this.onTabPress()}
                useNativeDriver
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width, height: 80 }}
            />
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: 300
    }
}

export { Tab }