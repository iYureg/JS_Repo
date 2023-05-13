<script>
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5],
      strings: ["q", "w", "e", "r", "t", "y"],
      obj: { name: "Иван", surn: "Иванов", patronamic: "Иванович" },
    };
  },
  name: "Data",
};
</script>
<template>
  <div class="data">
    ---- Компонент DataComp ----
    <p>nums[0]: {{ nums[0] }}</p>
    <p>nums[0]: {{ nums[1] }}</p>
    <p>nums[0]: {{ nums[2] }}</p>
    <p>sum of nums: {{ nums[0] + nums[1] + nums[2] }}</p>
    <p>strings[0]: {{ strings[0] }}</p>
    <p>strings[0]: {{ strings[1] }}</p>
    <p>strings[0]: {{ strings[2] }}</p>
    <p>strings[0]: {{ strings[3] }}</p>
    <p>strings[0]: {{ strings[4] }}</p>
    <p>strings[0]: {{ strings[5] }}</p>
    <p>
      sum of strings:
      {{ strings.join("") }}
    </p>
    <p>obj: {{ obj.surn }} {{ obj["name"] }} {{ obj.patronamic }}</p>
  </div>
</template>

<style>
.data {
  text-align: center;
}
</style>
