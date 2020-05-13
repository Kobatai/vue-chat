<template>
  <div v-show="message" class="fixed w-1/5 px-3">
    <div class="flex bg-red-500 text-white font-bold rounded-t px-4 py-2">
      <label>エラー</label>
      <button class="ml-auto" @click="deleteMessage">
        <i class="material-icons text-white text-1xl">
          clear
        </i>
      </button>
    </div>
    <div
      class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
    >
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  // 本来ならthis.$store.getters["alert/message"]ってやる必要があるが,
  // mapGettersでこのコンポーネント上のcomputedでmessageのgettersを使えるようになる
  computed: {
    ...mapGetters("alert", ["message"])
  },

  // こっちも同じくthis.$store.commit("alert/deleteMessage");
  methods: {
    ...mapMutations("alert", ["deleteMessage"])
  }
};
</script>
