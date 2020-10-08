import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b38cc9',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
});

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Title</Text>
            </View>
        );
    }
}
