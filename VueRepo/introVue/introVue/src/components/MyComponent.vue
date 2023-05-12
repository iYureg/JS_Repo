<script>
export default {
  data() {
    return {
      name: "ivan",
      surn: "ivanov",
    };
  },

  name: "MyComponent",
};
</script>
<template>
  <div class="content">{{ name }}</div>
  <div class="content">{{ surn }}</div>
</template>
<style>
.content:hover {
  color: blue;
}
.content {
  width: 100%;
  height: auto;
  color: green;
  text-align: center;
}
</style>
