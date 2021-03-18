/**
 * 个人联系信息组件
 */
<template>
  <ul class="contact-wrapper">
    <li v-for="(item, index) in contactList" :key="index">
      <a :href="item.url" :target="item.url ? '_blank': '_self' ">
        <div class="icon">
          <Icon :type="item.icon_type" />
        </div>
        <span>{{ item.context }}</span>
      </a>
      <div v-if="item.img_src" class="pop">
        <img :src="item.img_src" alt="" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Icon from '../icon/index.vue'

/**
 *
 * export interface ListType {
 *   context: string;
 *   icon_type: string;
 *   img_src: string;
 *   url: string;
 * }
 *
 * contactList: ListType[]
 *
 */

export default defineComponent({
  components: { Icon },
  props: {
    // 数据列表
    contactList: {
      type: Array,
      required: true
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/const.scss';
.contact-wrapper {
  padding: 20px;
  margin: 0;
  list-style: none;
  color: $words;
  $liItemHeight: 30px;
  li {
    position: relative;
    margin: 14px 0;
    height: $liItemHeight;
    line-height: $liItemHeight;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        margin-right: 10px;
        font-size: 26px;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: $liItemHeight + 8px;
      padding: 10px 15px;
      border-radius: 5px;
      background-color: #fff;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 150px;
        height: 150px;
      }
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
}
</style>
