const store = {
  isReady: false,
  state: {},
  dispatch: () => {
    console.error('store is NOT ready');
  },
  takeLatest: () => {
    console.error('store is NOT ready');
  },
};

export default store;
