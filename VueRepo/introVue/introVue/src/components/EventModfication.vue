<script>
export default {
  data() {
    return {};
  },
  methods: {
    showOnce: function () {
      alert("once message");
    },
  },

  name: "EventModification",
};
</script>
<template>
  <p><i> --- EventModification --- </i></p>
  <p><button @click.once="showOnce">show once</button></p>
  <p><a href="https://www.google.com" @click.prevent="">prevent link</a></p>
</template>

<style></style>
