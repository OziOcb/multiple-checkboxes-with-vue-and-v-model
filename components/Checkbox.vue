<template>
  <div class="checkbox">
    <input
      :id="value.id"
      type="checkbox"
      :value="value.id"
      v-model="selectedItemsIds"
    />
    <label :for="value.id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "selectedItemsIdsProp",
    event: "changeState"
  },

  props: {
    selectedItemsIdsProp: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedItemsIds: {
      get() {
        return this.selectedItemsIdsProp;
      },
      set(newArray) {
        this.$emit("changeState", {
          newArray: newArray,
          price: this.value.price
        });
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
