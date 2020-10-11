import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IFilmItem } from '../types';

interface Props {
    item: IFilmItem;
    onPress: (item: IFilmItem) => void;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        paddingHorizontal: 2,
    },
    item: {
        padding: 10,
        justifyContent: 'center',
    },
    text: {},
    img: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
    },
});

export default class FilmCard extends React.Component<Props, {}> {
    render() {
        const { item, onPress } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => onPress(item)}
                    style={styles.item}
                >
                    <Image
                        style={styles.img}
                        source={{
                            uri: item.image.medium,
                        }}
                    />
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
