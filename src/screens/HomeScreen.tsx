import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { DETAILS_PAGE } from '../routes';
import { IFilmItem } from '../types';
import FilmCard from '../components/UI/FilmCard';
import ModalWrapper from '../components/Modals/ModalWrapper';
import { inject, observer } from 'mobx-react';
import ModalStore from '../services/ModalStore';

interface State {
    data: [];
}

interface IModalStore {
    modalStore: ModalStore;
}

interface Props extends IModalStore {
    navigation: any;
}

const url = 'http://api.tvmaze.com/shows/1/episodes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        padding: 10,
    },
});

class HomeScreen extends React.PureComponent<Props, State> {
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

    onPressHandler = (item: IFilmItem): void => {
        const { navigation } = this.props;
        navigation.navigate(DETAILS_PAGE, { item });
    };

    renderItem: ListRenderItem<IFilmItem> = ({ item }) => {
        const { modalStore } = this.props;
        return <FilmCard item={item} onPress={this.onPressHandler} />;
    };

    render(): React.ReactNode {
        const { data } = this.state;

        return (
            <View style={styles.container}>
                {/*<ModalWrapper />*/}
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

export default inject('modalStore')(observer(HomeScreen));
