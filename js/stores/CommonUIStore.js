import {observable, action} from 'mobx';

export default class CommonStore {
    @observable toggleSideBar = false;

    constructor() {

    }

    @action activateSideBar() {
        this.toggleSideBar = !this.toggleSideBar;
    }

}