import { observable, action } from 'mobx';

class ModalStore {
    @observable isModal = true;

    @action openModal() {
        this.isModal = true;
        console.log('openModal', this.isModal);
    }

    @action closeModal() {
        this.isModal = false;
        console.log('closeModal-', this.isModal);
    }
}

export default ModalStore;
