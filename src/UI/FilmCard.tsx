import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IFilmItem } from '../types';

interface Props {
    item: IFilmItem;
    onPress: (item: IFilmItem) => void;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginBottom: 5,
    },
    item: {
        backgroundColor: '#efefef',
        padding: 10,
    },
});

export default class FilmCard extends React.Component<Props, {}> {
    render() {
        const { item, onPress } = this.props;

        return (
            <TouchableOpacity
                onPress={() => onPress(item)}
                style={styles.container}
            >
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}
