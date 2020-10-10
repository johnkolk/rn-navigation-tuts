import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IFilmItem } from '../types';

interface Props {
    item: IFilmItem;
    onPress: (item: IFilmItem) => void;
}

const styles = StyleSheet.create({
    container: {        
        width: '50%',
        marginBottom: 5,
        backgroundColor: '#efefef',
        padding: 10,
    },
    text: {
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
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}
