import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import { IFilmItem } from '../types';
import { inject, observer } from 'mobx-react';
import ModalWrapper from '../components/Modals/ModalWrapper';

interface Props {
    navigation: any;
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

@inject('modalStore')
@observer
export default class DetailsScreen extends React.Component<Props, {}> {
    render() {
        const {
            name,
            summary,
            image,
        } = this.props.navigation.state.params.item;
        const { modalStore } = this.props;

        return (
            <>
                <View style={styles.container}>
                    <Image source={{ uri: image.medium }} />
                    <Text style={styles.mb1}>{name}</Text>
                    <Text>{summary.replace(/<[^>]+>/g, '')}</Text>
                    <TouchableHighlight
                        style={{
                            backgroundColor: '#2196F3',
                            marginTop: 20,
                            padding: 10,
                        }}
                        onPress={() => {
                            modalStore.openModal();
                        }}
                    >
                        <Text style={{ color: 'white' }}>Open Modal</Text>
                    </TouchableHighlight>
                </View>
                <ModalWrapper />
            </>
        );
    }
}
