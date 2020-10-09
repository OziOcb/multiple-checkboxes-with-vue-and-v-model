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
import { mapGetters, mapActions } from "vuex";
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: {
    Wrapper
  },

  computed: {
    ...mapGetters({
      getBasketItems: "basket/getBasketItems",
      getSelectedItemsIds: "basket/getSelectedItemsIds"
    }),

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
.itemsBox {
  width: 200px;
}

ul {
  font-size: 14px;
  padding-left: 24px;
}
</style>
