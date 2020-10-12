<template>
  <div class="checkbox">
    <input
      :id="itemId"
      type="checkbox"
      :value="itemId"
      v-model="selectedItemsIds"
    />
    <label :for="itemId">
      <slot />
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    itemId: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({ getSelectedItemsIds: "basket/getSelectedItemsIds" }),

    selectedItemsIds: {
      get() {
        return this.getSelectedItemsIds;
      },
      set(newSelectedItemsIds) {
        this.updateSelectedItemsIds(newSelectedItemsIds);
      }
    }
  },

  methods: {
    ...mapActions({
      updateSelectedItemsIds: "basket/updateSelectedItemsIds"
    })
  }
};
</script>

<style scoped>
.checkbox {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
  cursor: pointer;
}

input {
  display: none;
}

input:checked + label {
  background-color: #ada;
  color: #222;
}
</style>
