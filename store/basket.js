export const state = () => ({
  totalPrice: 0,
  selectedItemsPrice: 0,
  selectedItemsIds: ["ID_07"],

  basketItems: [
    { id: "ID_01", label: "L01", price: 20 },
    { id: "ID_02", label: "L02", price: 23 },
    { id: "ID_03", label: "L03", price: 34 },
    { id: "ID_04", label: "L04", price: 96 },
    { id: "ID_05", label: "L05", price: 57 },
    { id: "ID_06", label: "L06", price: 32 },
    { id: "ID_07", label: "L07", price: 39 },
    { id: "ID_08", label: "L08", price: 47 },
    { id: "ID_09", label: "L09", price: 49 },
    { id: "ID_11", label: "L11", price: 11 },
    { id: "ID_12", label: "L12", price: 68 },
    { id: "ID_13", label: "L13", price: 25 },
    { id: "ID_14", label: "L14", price: 51 },
    { id: "ID_15", label: "L15", price: 97 },
    { id: "ID_16", label: "L16", price: 96 },
    { id: "ID_17", label: "L17", price: 26 },
    { id: "ID_18", label: "L18", price: 63 },
    { id: "ID_19", label: "L19", price: 17 },
    { id: "ID_20", label: "L20", price: 46 },
    { id: "ID_21", label: "L21", price: 91 }
  ]
});

export const getters = {
  getBasketItems: state => {
    return state.basketItems;
  },
  getSelectedItemsIds: state => {
    return state.selectedItemsIds;
  },
  getTotalPriceOfAllItems: state => {
    return state.basketItems.reduce(
      (acc, currentValue) => acc + currentValue.price,
      0
    );
  },
  getSelectedItemsPrice: state => {
    return state.basketItems
      .filter(item => state.selectedItemsIds.includes(item.id))
      .reduce((acc, currentItem) => acc + currentItem.price, 0);
  }
};

export const actions = {
  updateSelectedItemsIds({ commit }, newSelectedItemsIds) {
    commit("UPDATE_SELECTED_ITEMS_IDS", newSelectedItemsIds);
  }
};

export const mutations = {
  UPDATE_SELECTED_ITEMS_IDS: (state, newSelectedItemsIds) => {
    state.selectedItemsIds = newSelectedItemsIds;
  }
};
