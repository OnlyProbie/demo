/**
 * 图片延迟加载过渡组件
 */
<template>
  <div class="lazy-load-img-wrapper">
    <img
      v-if="!imgShowFinished"
      class="img-placeholder"
      :src="placeholder"
      alt="占位图">
    <img
      class="img-src"
      :style="{ opacity: imgOpacity, transition: `${duration}ms` }"
      :src="src"
      @load="handleLoad"
      alt="原图">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 要展示的图片地址
    src: {
      type: String,
      required: true
    },
    // 占位图片地址
    placeholder: {
      type: String,
      required: true
    },
    // 过渡动画时间
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      imgLoadFinished: false, // 原图是否加载完成
      imgShowFinished: false, // 原图展示完成
    }
  },
  computed: {
    imgOpacity(): number { // 设置原图的透明度
      return this.imgLoadFinished ? 1 : 0
    }
  },
  methods: {
    handleLoad() { // 原图加载完成
      this.$emit('imgLoadFinish')
      this.imgLoadFinished = true;
      setTimeout(() => {
        this.imgShowFinished = true
      }, this.duration)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';

.lazy-load-img-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .img-src {
    @include self-fill;
    object-fit: cover;
  }
  .img-placeholder {
    filter: blur(40px)
  }
  .origin {
    opacity: 0;
  }
}

</style>
