export const state = () => ({
  basketItems: [
    { id: "ID_01", label: "L01" },
    { id: "ID_02", label: "L02" },
    { id: "ID_03", label: "L03" },
    { id: "ID_04", label: "L04" },
    { id: "ID_05", label: "L05" },
    { id: "ID_06", label: "L06" },
    { id: "ID_07", label: "L07" },
    { id: "ID_08", label: "L08" },
    { id: "ID_09", label: "L09" },
    { id: "ID_11", label: "L11" },
    { id: "ID_12", label: "L12" },
    { id: "ID_13", label: "L13" },
    { id: "ID_14", label: "L14" },
    { id: "ID_15", label: "L15" },
    { id: "ID_16", label: "L16" },
    { id: "ID_17", label: "L17" },
    { id: "ID_18", label: "L18" },
    { id: "ID_19", label: "L19" },
    { id: "ID_20", label: "L20" },
    { id: "ID_21", label: "L21" }
  ],
  selectedItemsIds: ["ID_07"]
});

export const getters = {
  getBasketItems: state => {
    return state.basketItems;
  },
  getSelectedItemsIds: state => {
    return state.selectedItemsIds;
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
