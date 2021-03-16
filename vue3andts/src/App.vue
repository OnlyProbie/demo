<template>
  <div class="sidebar_menu">
    <div class="logo"><Avatar :isClick="true" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" size="180" /><Avatar avatarRadius="10" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" /></div>
    <icon type="comment" />
  </div>
</template>

<script lang="ts">
import Avatar from './components/avatar/Avatar.vue';
import Icon from './components/icon/Icon.vue';

export default {
  name: 'app',
  components: {
    Avatar,
    Icon,
  },
};

</script>

<style lang="scss" scoped>
</style>
