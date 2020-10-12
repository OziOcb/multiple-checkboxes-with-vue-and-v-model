import { basketItemsArr } from "~/basketItems-100";

export const state = () => ({
  totalPrice: 0,
  selectedItemsPrice: 0,
  selectedItemsIds: [],

  basketItems: basketItemsArr
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
      (acc, currentValue) => acc + currentValue.totalPrice,
      0
    );
  },
  getSelectedItemsPrice: state => {
    return state.basketItems
      .filter(item => state.selectedItemsIds.includes(item.id))
      .reduce((acc, currentItem) => acc + currentItem.totalPrice, 0);
  }
};

export const actions = {
  updateSelectedItemsIds({ commit }, newSelectedItemsIds) {
    commit("UPDATE_SELECTED_ITEMS_IDS", newSelectedItemsIds);
  },

  setAllItemsAsSelected({ commit }) {
    commit("SET_ALL_ITEMS_AS_SELECTED");
  }
};

export const mutations = {
  UPDATE_SELECTED_ITEMS_IDS: (state, newSelectedItemsIds) => {
    state.selectedItemsIds = newSelectedItemsIds;
  },
  SET_ALL_ITEMS_AS_SELECTED: state => {
    state.selectedItemsIds = state.basketItems.map(item => item.id);
  }
};
