<template>
  <label>
    <input type="checkbox" :value="val" v-model="checked" @change="onChange" />
    <slot />
  </label>
</template>

<script>
export default {
  name: "CheckBox",

  props: ["value", "val"],
  data() {
    return {
      checkedProxy: false
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedProxy = val;
      }
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit("input", this.checkedProxy);
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
