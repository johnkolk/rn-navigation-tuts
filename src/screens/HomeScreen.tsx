import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
    ListRenderItem,
    TouchableOpacity,
} from 'react-native';
import { DETAILS_PAGE } from '../routes';
import { IFilmItem } from '../types';
import FilmCard from '../UI/FilmCard';

interface State {
    data: [];
}

interface Props {
    navigation: any;
}

const url = 'http://api.tvmaze.com/shows/1/episodes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    flatlist: {
        padding: 10,
    },
});

export default class HomeScreen extends React.PureComponent<Props, State> {
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

    renderItem: ListRenderItem<IFilmItem> = ({ item }) => (
        <FilmCard item={item} onPress={() => this.onPressHandler(item)} />
    );

    render() {
        const { data } = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    style={styles.flatlist}
                />
            </View>
        );
    }
}
