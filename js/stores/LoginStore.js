import {observable} from 'mobx';

export default class LoginStore {
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