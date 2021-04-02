<template>
  <div>
    <!-- <img src="../assets/logo.png" /> -->
    <div>{{ title }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const title = ref('hello, vite')
    // setInterval(() => {
    //   title.value = title.value.split('').reverse().join('')
    // }, 1000)
    return { title }
  }
}

</script>