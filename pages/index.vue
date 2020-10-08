<template>
  <div>
    <br />
    <div>{{ myCheckBoxModel }}</div>
    <br />

    <div v-for="item in checkOptions" :key="item.id">
      <input
        :value="item.value"
        v-model="myCheckBoxModel"
        :id="item.id"
        type="checkbox"
      />

      <label :for="item.id">input {{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    myCheckBoxModel: [],

    checkOptions: [
      { id: 1, label: "Option 1", value: "value of option 1" },
      { id: 2, label: "Option 2", value: "value of option 2" },
      { id: 3, label: "Option 3", value: "value of option 3" },
      { id: 4, label: "Option 4", value: "value of option 4" }
    ]
  })
};
</script>
