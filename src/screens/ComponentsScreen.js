import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.secondStyle}>My name is Stephen</Text>;
    return (
        // View안에 세미콜론을 지워야한다.
        // View에서 세미콜론을 텍스트로 간주되어서 에러가 발생한다.
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    secondStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;