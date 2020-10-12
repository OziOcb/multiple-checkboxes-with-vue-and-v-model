<template>
  <div class="wrapper">
    <Checkbox :itemId="itemProps.id">
      {{ indexProps + 1 }}
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
    },
    indexProps: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
.wrapper {
  background-color: #444;
  display: inline-block;
}
</style>
