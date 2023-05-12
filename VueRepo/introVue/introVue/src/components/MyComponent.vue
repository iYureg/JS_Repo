<script>
export default {
  data() {
    return {
      aAttr: {
        yaHref: "https://www.ya.ru",
        yaText: "Яндекс",
        gooHref: "https://www.google.com",
        gooText: "Google",
      },
      name: "ivan",
      surn: "ivanov",
    };
  },

  name: "MyComponent",
};
</script>
<template>
  <div class="link">
    <div>
      <a :href="aAttr.yaHref">{{ aAttr.yaText }}</a>
    </div>
    <div>
      <a :href="aAttr.gooHref">{{ aAttr.gooText }}</a>
    </div>
  </div>
  <div class="content">{{ name }}</div>
  <div class="content">{{ surn }}</div>
</template>
<style>
.link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.link div {
  margin: 10px;
}
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
