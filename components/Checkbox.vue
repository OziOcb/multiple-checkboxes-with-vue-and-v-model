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
export default {
  model: {
    prop: "selectedItemsIdsProps",
    event: "changeState"
  },

  props: {
    selectedItemsIdsProps: {
      type: Array,
      required: true
    },
    itemId: {
      type: String,
      required: true
    }
  },

  computed: {
    selectedItemsIds: {
      get() {
        return this.selectedItemsIdsProps;
      },
      set(newSelectedItemsIdsArray) {
        this.$emit("changeState", newSelectedItemsIdsArray);
      }
    }
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
