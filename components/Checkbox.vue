<template>
  <div class="checkbox">
    <input
      :id="value"
      type="checkbox"
      :value="value"
      v-model="checkedItemsIds"
    />
    <label :for="value">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "checkedItemsIdsProp",
    event: "changeState"
  },

  props: {
    checkedItemsIdsProp: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },

  computed: {
    checkedItemsIds: {
      get() {
        return this.checkedItemsIdsProp;
      },
      set(value) {
        this.$emit("changeState", value);
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
