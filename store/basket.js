import { basketItemsArr } from "~/basketItems";

export const state = () => ({
  totalPrice: 0,
  selectedItemsPrice: 0,
  selectedItemsIds: ["ID_07"],

  basketItems: [...basketItemsArr]
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
