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
    myCheckBoxModel: [
      "816c15e5-4c98-4f26-a747-ed8fc9c1d690",
      "b4cb3cf9-44f8-42ea-93f1-b02fceefbb0c"
    ],

    checkOptions: [
      { id: "816c15e5-4c98-4f26-a747-ed8fc9c1d690" },
      { id: "f112cc23-32d3-4b48-b112-52bbc2878a3b" },
      { id: "d2193120-928a-48c9-b17d-ddc2b7bdb47f" },
      { id: "b4cb3cf9-44f8-42ea-93f1-b02fceefbb0c" },
      { id: "4879e8c2-eb00-4c5c-bc63-7c4a1963e145" }
    ]
  })
};
</script>
