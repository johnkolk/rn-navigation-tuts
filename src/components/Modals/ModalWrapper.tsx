import React from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import ModalStore from '../../services/ModalStore';

interface IModalStoreProps {
    modalStore: ModalStore;
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .7)',
    },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

@inject('modalStore')
@observer
export default class ModalWrapper extends React.Component<IModalStoreProps> {
    render() {
        const { isModal, closeModal } = this.props.modalStore;
        console.log('modalStore.isModal', isModal);

        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModal}
                onRequestClose={() => {
                    console.log('Modal onRequest Close');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: '#2196F3',
                            }}
                            onPress={() => closeModal()}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}
