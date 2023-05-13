<script>
export default {
  data() {},
  methods: {
    now: () => new Date(),
  },
  name: "HelloMethods",
};
</script>
<template>
  <div class="date">
    Дата: {{ now().getFullYear() }}-{{
      now().getMonth() < 10
        ? "0" + (now().getMonth() + 1)
        : now().getMonth() + 1
    }}
    -{{ now().getDate() < 10 ? "0" + now().getDate() : now().getDate() }}
    <br />
    Время:
    {{ now().getHours() < 10 ? "0" + now().getHours() : now().getHours() }}
    :
    {{
      now().getMinutes() < 10 ? "0" + now().getMinutes() : now().getMinutes()
    }}
    :
    {{
      now().getSeconds() < 10 ? "0" + now().getSeconds() : now().getSeconds()
    }}
  </div>
</template>
