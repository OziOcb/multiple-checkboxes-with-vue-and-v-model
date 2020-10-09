<template>
  <div class="wrapper">
    <Checkbox v-model="checkedItems" :value="item.id" @change="onChange">
      checkbox label
    </Checkbox>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";

export default {
  components: { Checkbox },

  model: {
    prop: "checked",
    event: "change"
  },

  props: {
    checked: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
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
      set(val) {
        this.checkedProxy = val;
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

<style>
.wrapper {
  margin-bottom: 3px;
}
</style>
