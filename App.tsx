import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/screens/Navigation';
import TabNavigator from './src/TabNavigator'


export default function App() {
    return (
        <View style={styles.container}>
            <TabNavigator /> 
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
