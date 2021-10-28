import { RootStore } from "app/stores";
import { makeObservable, observable } from "mobx";

export class AuthStore{
    @observable
    state: 'unauthed'|'loggedin'|'error' = 'unauthed'
    constructor(public rootStore: RootStore){
        makeObservable(this)
    }
}