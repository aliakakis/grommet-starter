import {observable} from 'mobx';

export default class SignUpStore {
    @observable username = "John Doe";

    constructor() {

    }

    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }
}