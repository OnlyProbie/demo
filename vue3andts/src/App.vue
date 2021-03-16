<template>
  <div class="sidebar_menu">
    <div class="logo"><Avatar :isClick="true" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" size="180" /><Avatar avatarRadius="10" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" /></div>
    <Icon type="comment" />
    <Pager @pageChange="handlePageChange" :total="total" :current="current" :visibleNumber="15" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from './components/avatar/Avatar.vue';
import Icon from './components/icon/Icon.vue';
import Pager from './components/pager/Pager.vue';

export default defineComponent({
  name: 'app',
  components: {
    Avatar,
    Icon,
    Pager,
  },
  data() {
    return {
      current: 10,
      total: 2000,
    }
  },
  methods: {
    handlePageChange(pageNumber: number) {
      this.current = pageNumber
    },
  },
});

</script>

<style lang="scss" scoped>
</style>
