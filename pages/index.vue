<template>
  <h1 class="text-dark-200 text-xl font-600">This is a home page</h1>
  <ul>
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
    <li class="item">4</li>
  </ul>

  <div
    class="shadow-lg bg-white w-28 h-28 transition-all-300 cursor-pointer hover:(bg-dark -translate-y-2)"
  ></div>

  <div class="text-2xl text-dark-200 font-600">
    name: {{ userStore.userData?.name }} age: {{ userStore.userData?.age }}
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/stores'

const nuxtApp = useNuxtApp()
const userStore = useUserStore()

userStore.fetchUserData()

console.log('formatDate', nuxtApp.$formatDate())
</script>

<style lang="scss" scoped>
.item {
  @apply text-lg text-[#37f] font-500;
}
</style>
