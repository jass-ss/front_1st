import { 구독, fnArr } from './pubsub';

export class Store {
  constructor({ state, mutations, actions }) {
    console.log('store', state);
    this.state = state;
    // this._state = state;
    this.mutations = mutations;
  }

  get state() {
    console.log('get ', this._state);
    return this._state;
  }

  set state(value) {
    console.log('set ', value);
    this._state = value;
  }

  commit(action, payload) {
    console.log('emit', { action: action, payload: payload });
    this.mutations[action](this.state, payload);
    console.log('newState', this.state);
    if (action === 'SET_A') {
      const count = [0, 2, 3];
      for (const i in count) {
        const idx = count[i];
        구독(fnArr[idx]);
      }
    }
    if (action === 'SET_B') {
      const count = [1, 2, 3];
      for (const i in count) {
        const idx = count[i];
        구독(fnArr[idx]);
      }
    }
  }
}
