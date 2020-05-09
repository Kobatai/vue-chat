<template>
  <main class="container relative min-h-screen pt-16">
    <Header />
    <!-- nuxtタグの中にcompileした結果が反映される -->
    <!-- nuxtタグ以外は全ページ共通 -->
    <nuxt />
  </main>
</template>

<script>
// ~はホームディレクトリ = vue-chat配下
import Header from "~/components/Header";

export default {
  components: {
    // 本来、Header:Headerだがimport名とcomponent名が同じ場合は省略可
    Header
  }
};
</script>
