import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FilmCard from '../UI/FilmCard';
import { IFilmItem } from '../types';
import Header from '../UI/Header';
import { DETAILS_PAGE } from '../routes';

interface State {
    data: [];
}

interface Props {
    navigation: any;
}

const url: string = 'http://api.tvmaze.com/shows/1/episodes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default class HomeScreen extends React.Component<Props, State> {
    state: State = {
        data: [],
    };

    componentDidMount = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ data });
        } catch (e) {
            throw e;
        }
    };

    onPressHandler = (item: IFilmItem) => {
        const { navigation } = this.props;
        navigation.navigate(DETAILS_PAGE, { item });
    };

    render() {
        const { data } = this.state;

        return (
            <>
                <Header />
                <ScrollView style={styles.container}>
                    {data.map((item: IFilmItem) => (
                        <FilmCard
                            key={item.id.toString()}
                            item={item}
                            onPress={this.onPressHandler}
                        />
                    ))}
                </ScrollView>
            </>
        );
    }
}
