<template>
  <div>
    <h2>Total Price = {{ getTotalPriceOfAllItems }}</h2>
    <h2>Selected Items Price = {{ getSelectedItemsPrice }}</h2>

    <div style="display: flex">
      <div class="itemsBox">
        <Wrapper
          v-for="(item, index) in getBasketItems"
          :key="item.id"
          :item-props="item"
          :indexProps="index"
        >
          {{ item.label }}
        </Wrapper>
      </div>

      <ul>
        <li v-for="(item, index) in getSelectedItemsIds" :key="item">
          {{ index + 1 }}. {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: {
    Wrapper
  },

  computed: {
    ...mapGetters({
      getBasketItems: "basket/getBasketItems",
      getSelectedItemsIds: "basket/getSelectedItemsIds",
      getTotalPriceOfAllItems: "basket/getTotalPriceOfAllItems",
      getSelectedItemsPrice: "basket/getSelectedItemsPrice"
    })
  },

  methods: {
    ...mapActions({
      setAllItemsAsSelected: "basket/setAllItemsAsSelected"
    })
  },

  created() {
    this.setAllItemsAsSelected();
  }
};
</script>

<style>
.itemsBox {
  min-width: 800px;
  width: 800px;
}

ul {
  font-size: 10px;
  padding-left: 24px;
  list-style: none;
  columns: 200px 4;
}
</style>
