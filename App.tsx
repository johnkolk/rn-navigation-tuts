import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';
import TabNavigator from './src/TabNavigator';
import ModalStore from './src/services/ModalStore';

export default function App() {
    return (
        <Provider modalStore={new ModalStore()}>
            <View style={styles.container}>
                <TabNavigator />
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
