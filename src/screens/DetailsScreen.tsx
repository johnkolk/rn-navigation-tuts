import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IFilmItem } from '../types';

interface Props {
    navigation: any
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    mb1: {
        marginBottom: 10,
    },
});

export default class DetailsScreen extends React.Component<Props, {}> {
    render() {
        const {
            name,
            summary,
            image,
        } = this.props.navigation.state.params.item;

        return (
            <View style={styles.container}>
                <Image source={{ uri: image.medium }} />
                <Text style={styles.mb1}>{name}</Text>
                <Text>{summary.replace(/<[^>]+>/g, '')}</Text>
            </View>
        );
    }
}
