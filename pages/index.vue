<template>
  <div style="display: flex">
    <div class="itemsBox">
      <Wrapper
        v-for="item in getBasketItems"
        :key="item.id"
        :item-props="item"
        v-model="selectedItemsIds"
      >
        {{ item.label }}
      </Wrapper>
    </div>

    <ul>
      <li v-for="item in selectedItemsIds" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: {
    Wrapper
  },

  data: () => ({
    selectedItemsIds: [
      "06072913-6841-4090-a0b4-1be6bb198618",
      "9c0bb186-3780-4476-8bf0-52734dd720e7"
    ]
  }),

  computed: {
    ...mapGetters({ getBasketItems: "basket/getBasketItems" })
  }
};
</script>

<style>
.itemsBox {
  width: 200px;
}

ul {
  font-size: 14px;
  padding-left: 24px;
}
</style>
