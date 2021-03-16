/**
 * 头像组件
 */
<template>
  <div class="avatar-wrapper">
    <img class="avatar-wrapper-img" :src="imgUrl" :style="{ width: size + 'px', height: size + 'px', borderRadius: avatarRadius + '%' }" />
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
.avatar-wrapper {
  display: inline-block;
  &-img {
    display: flex;
    // border-radius: 50%;
    object-fit: cover;
  }
}
</style>
