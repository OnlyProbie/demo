/**
 * 菜单组件
 */
<template>
  <nav class="nav-wrapper">
    <a
      v-for="(item, index) in navList"
      :key="index"
      :class="{ is_selected: isSelected(item) }"
      :href="item.link"
      @click="itemClick" >
      <div class="icon">
        <Icon :type="item.icon_type" />
      </div>
      <span class="name">{{item.name}}</span>
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../icon/index.vue'

/**
 * export interface NavListType {
 *   icon_type: string;
 *   name: string;
 *   link: string;
 *   start_with?: boolean;
 * }
 *
 * navList: NavListType[]
 */

export interface NavListType {
  icon_type: string;
  name: string;
  link: string;
  start_with?: boolean;
}

export default defineComponent({
  components: { Icon },
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isClick: true
    }
  },
  methods: {
    isSelected(item: NavListType) {
      const link = item.link.toLowerCase();
      // eslint-disable-next-line
      const curPathName = location.pathname.toLowerCase()
      if (item.start_with) {
        return curPathName.startsWith(link)
      }
      return curPathName === link;
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/const.scss';
.nav-wrapper {
  a {
    padding: 8px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: $gray;
    height: 35px;
    line-height: 35px;
    // font-size: 25px;
    .icon {
      margin-right: 10px;
      font-size: 28px;
    }
    &:hover {
      color: #fff;
    }
    &.is_selected {
      background-color: #2d2d2d;
    }
  }
}
</style>
