<template>
  <div></div>
</template>

<script>
export default {
  async mounted() {
    console.log("hogehoge");
    console.log(
      JSON.stringify(
        await this.$axios.$get("https://qiita.com/api/v2/items?query=tag:nuxt")
      )
    );
  }
};
</script>
