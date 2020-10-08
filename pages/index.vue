<template>
  <div>
    <div>{{ arr }}</div>

    <div v-for="n in 10" :key="n">
      <input :value="n" v-model="arr" :id="`input ${n}`" type="checkbox" />
      <label :for="`input ${n}`">input {{ n }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    arr: []
  })
};
</script>
