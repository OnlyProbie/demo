/**
 * 图标组件
 *
 * 修改图标样式可以在组件元素上直接通过style属性进行修改
 *
 * 具体图标见：https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2422722
 */
<template>
  <i class="iconfont icon-wrapper" :class=" 'icon-' + type " />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 支持的icon type
// 具体图标见：https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2422722
export const iconType = [
  'community',
  'comment',
  'top',
  'top-faster',
  'editor',
  'chuangzuo',
  'faxian',
  'shouye',
  'search',
  'picture',
  'weixin',
  'all',
  'bussiness-man',
  'integral',
  'QRcode',
  'add',
  'arrow-right',
  'arrow-left',
  'ashbin',
  'category',
  'close',
  'code',
  'double-arro-right',
  'double-arrow-left',
  'ellipsis',
  'link',
  'messagecenter',
  'map',
  'password',
  'reeor',
  'save',
  'seleted',
  'success',
  'smile',
  'Daytimemode',
  'nightmode',
  'usercenter',
  'account',
  'comments',
  'home',
  'list',
  'empty',
  'qq',
  'location',
  'ego-blog',
  'github',
  'email',
  'phone'
];

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_2422722_vglbrn5n4t9.css';

  .icon-wrapper {
    font-size: 24px;
  }
</style>
