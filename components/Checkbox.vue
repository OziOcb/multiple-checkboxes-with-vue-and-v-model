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
    event: "changeState"
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
      this.$emit("changeState", this.checkedProxy);
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
