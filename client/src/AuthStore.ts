import { makeObservable, observable } from "mobx";

// TODO: finish auth and this store

class AuthStore {
  loggedIn = false;
  constructor() {
    makeObservable(this, {
      loggedIn: observable,
    });
  }
}

export default AuthStore;
