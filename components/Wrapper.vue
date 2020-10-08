<template>
  <div>
    <div>wrapper component</div>

    <Checkbox v-model="checkedItems" :value="item.id" @change="onChange">
      checkbox label
    </Checkbox>

    <br />
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";

export default {
  components: { Checkbox },

  props: ["checked", "item"],

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
