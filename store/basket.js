import { basketItemsArr } from "~/basketItems";

export const state = () => ({
  totalPrice: 0,
  selectedItemsPrice: 0,
  selectedItemsIds: ["911c7664-bc0d-4905-ad66-1045ce17a6b3"],

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
  }
};

export const mutations = {
  UPDATE_SELECTED_ITEMS_IDS: (state, newSelectedItemsIds) => {
    state.selectedItemsIds = newSelectedItemsIds;
  }
};
