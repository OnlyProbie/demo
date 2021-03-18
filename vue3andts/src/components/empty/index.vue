/**
 * 空页面组件
 */
<template>
  <div class="empty-wrapper">
    <Icon style="font-size: 60px" type="empty" />
    <p class="empty-text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../icon/index.vue'

export default defineComponent({
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '无数据',
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';

.empty-wrapper {
  @include self-center;
  text-align: center;
  color: #999;
  .empty-text {
    margin-top: 10px;
  }
}
</style>
