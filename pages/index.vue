<template>
  <div>
    <br />
    <div>{{ myCheckBoxModel }}</div>
    <br />

    <Checkbox
      v-for="item in checkOptions"
      :key="item.id"
      :val="item.value"
      v-model="myCheckBoxModel"
    >
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

  data: () => ({
    myCheckBoxModel: ["value of option 3"],

    checkOptions: [
      { id: 1, label: "Option 1", value: "value of option 1" },
      { id: 2, label: "Option 2", value: "value of option 2" },
      { id: 3, label: "Option 3", value: "value of option 3" },
      { id: 4, label: "Option 4", value: "value of option 4" }
    ]
  })
};
</script>
