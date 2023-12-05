<template>
  <div>
    <header>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        rounded
        border="blue-200 2"
        @click="handleNavigateTo('/')">
        home
      </button>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        rounded
        border="blue-200 2"
        @click="handleNavigateTo('product')">
        product
      </button>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        rounded
        border="blue-200 2"
        @click="handleNavigateTo('/my')">
        my
      </button>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        rounded
        border="blue-200 2"
        @click="handleNavigateTo('/login')">
        login
      </button>
    </header>
    <slot />
    <footer>footer</footer>
  </div>
</template>

<script lang="ts" setup>
  const handleNavigateTo = (path: string) => {
    navigateTo(path)
  }
</script>

<style></style>
