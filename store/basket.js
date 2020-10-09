export const state = () => ({
  basketItems: [
    { id: "9006f2bd-5fed-489d-8d13-e143a0305366", label: "01" },
    { id: "66ec44f5-5cb8-4de8-a570-9eae5df0ecb3", label: "02" },
    { id: "da58d07e-b1b6-4b51-b943-b4dd75b7ee1d", label: "03" },
    { id: "0a093feb-ea3f-4146-a21d-f36baa9b5b0c", label: "04" },
    { id: "6ff27d55-1fb6-40b0-a8ab-ffff7712021a", label: "05" },
    { id: "06072913-6841-4090-a0b4-1be6bb198618", label: "06" },
    { id: "a9ef84cd-d51c-49b8-9c2c-f3895c763725", label: "07" },
    { id: "e9a68830-8f49-439d-b288-d59d6d97bee4", label: "08" },
    { id: "7cd3c25e-e2a4-4d27-bce4-3d8978ff2915", label: "09" },
    { id: "ada20f28-b376-4181-9a2c-cb7410e6c36f", label: "11" },
    { id: "da0514b6-7006-41af-b171-4b5d14b14f1e", label: "12" },
    { id: "e7d6610e-e657-408a-b46e-f2b198f9b508", label: "13" },
    { id: "ff504237-f98b-41c9-938d-ab45c20c3b9c", label: "14" },
    { id: "3991c3c5-c747-44c8-8a95-fa9553c2d384", label: "15" },
    { id: "a17d6d3d-129f-4b48-8900-5b338d52ef27", label: "16" },
    { id: "b7db0d04-8dfa-4006-9d27-94feace17947", label: "17" },
    { id: "6c3bf48e-f0dc-4b64-8e6f-c9db8bb6aa38", label: "18" },
    { id: "9c0bb186-3780-4476-8bf0-52734dd720e7", label: "19" },
    { id: "ab851ff9-308d-4b1f-b40c-485db01df63e", label: "20" },
    { id: "742975e8-a79d-4921-a251-3a3cb591abed", label: "21" }
  ],
  selectedItemsIds: []
});

export const getters = {
  getBasketItems: state => {
    return state.basketItems;
  },
  getSelectedParcelsIds: state => {
    return state.selectedItemsIds;
  }
};

// export const actions = {
//   updateActionValue({ commit }) {
//     commit("updateValue", payload);
//   }
// };

// export const mutations = {
//   updateValue: (state, payload) => {
//     state.value = payload;
//   }
// };
