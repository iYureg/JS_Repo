<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  name: "Data",
};
</script>
<template>
  <div class="data">
    ---- Компонент DataComp ----
    <p>arr[0]: {{ arr[0] }}</p>
    <p>arr[0]: {{ arr[1] }}</p>
    <p>arr[0]: {{ arr[2] }}</p>
  </div>
</template>

<style>
.data {
  text-align: center;
}
</style>
