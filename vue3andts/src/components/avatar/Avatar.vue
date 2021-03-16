/**
 * 头像组件
 */
<template>
  <div class="avatar_wrapper">
    <img class="avatar_wrapper_img" :src="imgUrl" :style="{ width: size + 'px', height: size + 'px', borderRadius: avatarRadius + '%' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 头像url
    imgUrl: {
      type: String,
      required: true,
    },
    // 头像大小
    size: {
      type: String,
      default: '200',
    },
    // 头像圆角 百分比数值
    avatarRadius: {
      type: String,
      default: '50',
    },
  },
})
</script>

<style lang="scss" scoped>
.avatar_wrapper {
  display: inline-block;
  .avatar_wrapper_img {
    display: flex;
    // border-radius: 50%;
    object-fit: cover;
  }
  .img_hover:hover {
    cursor: pointer;
  }
}
</style>
