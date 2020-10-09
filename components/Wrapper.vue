<template>
  <div class="wrapper">
    <Checkbox v-model="selectedItemsIds" :value="itemProps.id">
      {{ itemProps.label }}
    </Checkbox>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Checkbox from "@/components/Checkbox.vue";

export default {
  components: { Checkbox },

  props: {
    itemProps: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters({ getSelectedItemsIds: "basket/getSelectedItemsIds" }),

    selectedItemsIds: {
      get() {
        return this.getSelectedItemsIds;
      },
      set(newSelectedItemsIds) {
        this.updateSelectedItemsIds(newSelectedItemsIds);
        return newSelectedItemsIds;
      }
    }
  },

  methods: {
    ...mapActions({ updateSelectedItemsIds: "basket/updateSelectedItemsIds" })
  }
};
</script>

<style>
.wrapper {
  background-color: #444;
  display: inline-block;
}
</style>
