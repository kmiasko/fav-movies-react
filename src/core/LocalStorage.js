export default class LocalStorage {

  constructor() {
    this.isAvailable = this.storageAvailable('localStorage');
    if (this.isAvailable) {
      this.storage = window['localStorage'];
    }
  }

  storageAvailable(type) {
    try {
      const storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch (e) {
      return false;

    }
  }

  load(resource) {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(resource)) || [];
    }
  }

  save(resource, data) {
    if (this.storage) {
      this.storage.setItem(resource, JSON.stringify(data));
    }
  }
}
