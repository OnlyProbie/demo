/**
 * 分页组件
 */
<template>
  <!-- 只有总页数大于1时才显示 -->
  <div class="pager-wrapper" v-if="allPagesNumber > 0">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"><icon type="double-arrow-left" /></a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"><icon type="arrow-left" /></a>
    <a @click="handleClick(n)" v-for="(n, i) in pageNumbers" :class="{ active: n === current }" :key="i">{{n}}</a>
    <a @click="handleClick(current + 1)" :class="{ disabled: current === allPagesNumber }"><icon type="arrow-right" /></a>
    <a @click="handleClick(allPagesNumber)" :class="{ disabled: current === allPagesNumber }"><icon type="double-arro-right" /></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../icon/Icon.vue'

export default defineComponent({
  components: { Icon },
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 分页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    allPagesNumber(): number { // 总页数
      return Math.ceil(this.total / this.limit)
    },
    visibleMin(): number { // 得到显示的最小数字
      const min = this.current - Math.floor(this.visibleNumber / 2);
      return min < 1 ? 1 : min;
    },
    visibleMax(): number { // 得到显示的最大数字
      const max = this.visibleMin + this.visibleNumber - 1;
      return max > this.allPagesNumber ? this.allPagesNumber : max;
    },
    pageNumbers(): number[] { // 得到显示的页数数组
      const pageNumArr: number[] = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        pageNumArr.push(i);
      }
      return pageNumArr;
    },
  },
  methods: {
    handleClick(newPage: number) { // 抛出事件
      console.log(newPage);
      this.$emit('pageChange', newPage)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/const.scss';

.pager-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  a {
    margin: 0 6px;
    width: 22px;
    color: $primary;
    cursor: pointer;
    &:hover {
      color: $words;
      font-weight: bold;
    }
    &.disabled {
      color: $lightWorlds;
      cursor: not-allowed;
    }
    &.active {
      color: $words;
      font-weight: bold;
      cursor: not-allowed;
    }
  }
}
</style>
