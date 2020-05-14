<template>
  <transition appear>
    <div
      class="z-10 max-w-sm h-screen w-screen fixed top-0 flex flex-col items-center justify-center modal-wrap"
    >
      <!-- ここにModalの中身が入る -->
      <!-- このコンポーネントを呼び出す側でslotにHTMLを差し込める　
      外側は共通で呼び出し側によって中身の違うModalになる -->
      <slot />

      <button @click="$emit('closeModal')">
        <i class="material-icons text-white text-5xl">
          clear
        </i>
      </button>
    </div>
  </transition>
</template>

<style scoped>
/* 要素が正に追加されている、消えているときの状態 ease-outで表示・非表示 */
.v-leave-active,
.v-enter-active {
  transition: opacity 0.4s ease-out;
}

/* 要素追加前と要素が消えるときは非表示 */
.v-enter,
.v-leave-to {
  opacity: 0;
}

/* 要素が追加された後と、要素が消える前は表示 */
.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>
