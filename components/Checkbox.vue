<template>
  <label>
    <input
      type="checkbox"
      :value="value"
      v-model="checkedItems"
      @change="onChange"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["checked", "value"],

  model: {
    prop: "checked",
    event: "change"
  },

  data() {
    return {
      checkedProxy: false
    };
  },

  computed: {
    checkedItems: {
      get() {
        return this.checked;
      },
      set(value) {
        this.checkedProxy = value;
      }
    }
  },

  methods: {
    onChange() {
      this.$emit("change", this.checkedProxy);
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}
</style>
