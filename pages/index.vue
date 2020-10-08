<template>
  <div>
    <br />
    <div>{{ myCheckBoxModel }}</div>
    <br />

    <Wrapper
      v-for="item in checkOptions"
      :key="item.id"
      :item="item"
      v-model="myCheckBoxModel"
    >
      {{ item.label }}
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: {
    Wrapper
  },

  data: () => ({
    myCheckBoxModel: ["value of option 4", "value of option 2"],

    checkOptions: [
      { id: 1, label: "Option 1", value: "value of option 1" },
      { id: 2, label: "Option 2", value: "value of option 2" },
      { id: 3, label: "Option 3", value: "value of option 3" },
      { id: 4, label: "Option 4", value: "value of option 4" }
    ]
  })
};
</script>
