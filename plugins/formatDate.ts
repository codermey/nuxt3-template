export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      formatDate: () => '2023-12-01'
    }
  }
})
