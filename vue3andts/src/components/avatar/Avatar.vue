/**
 * 头像组件
 */
<template>
  <div class="avatar_wrapper">
    <img class="avatar_wrapper_img" :src="imgSrc" :style="{ width: size + 'px', height: size + 'px' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '200',
    },
  },
})
</script>

<style lang="scss" scoped>
.avatar_wrapper {
  display: inline-block;
  .avatar_wrapper_img {
    display: flex;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
