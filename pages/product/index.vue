<template>
  <div class="text-xl font-600 text-[#37f]">product</div>
  <button @click="navigateTo('/product/1')">详情</button>
  <button class="text-[#37f]" @click="$router.back()">返回</button>
</template>

<script lang="ts" setup>
  // definePageMeta({
  //   middleware: [
  //     function (to, form) {
  //       console.log('to', to)
  //       console.log('form', form)
  //     }
  //   ]
  // })
</script>

<style scoped lang="scss"></style>
