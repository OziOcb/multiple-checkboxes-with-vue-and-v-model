<template>
  <div class="checkbox">
    <input
      :id="value"
      type="checkbox"
      :value="value"
      v-model="checkedItems"
      @change="onChange"
    />
    <label :for="value">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",

  model: {
    prop: "checked",
    event: "change"
  },

  props: {
    checked: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
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
.checkbox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

label {
  background-color: #333;
  cursor: pointer;
  padding: 5px 10px;
}

input {
  position: absolute;
  left: 8px;
  display: none;
}

input:checked + label {
  background-color: #ada;
  color: #222;
}
</style>
