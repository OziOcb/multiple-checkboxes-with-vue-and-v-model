<template>
  <div>
    <div>this is wrapper</div>

    <Checkbox v-model="checked" :val="item.value" @input="onChange">
      {{ item.label }}
    </Checkbox>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";

export default {
  components: {
    Checkbox
  },
  props: ["item", "value"],

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
