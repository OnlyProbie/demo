/**
 * 图标组件
 */
<template>
  <i :class="'icon-' + type" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>


