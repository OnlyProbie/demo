<template>
  <div class="sidebar_menu">
    <div class="logo"><Avatar :isClick="true" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" size="180" /><Avatar avatarRadius="10" imgUrl="http://cdn.qiniu.archerk.com.cn/meimei.jpeg" /></div>
    <Icon type="comment" />
    <Pager @pageChange="handlePageChange" :total="total" :current="current" :visibleNumber="10" />
    <div class="empty-wrap">
      <div class="empty-2">
        <LazyLoadImg :src="img" :placeholder="placeholder" :duration="3000" />
      </div>
      <div class="empty">
        <Contact style="color: #fff" :contactList="contactList"/>
      </div>
      <div class="empty-1">
        <Empty />
      </div>
      <div class="empty-3">
        <Nav :navList="navList" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from './components/avatar/index.vue';
import Icon from './components/icon/index.vue';
import Pager from './components/pager/index.vue';
import Empty from './components/empty/index.vue';
import Contact from './components/contact/index.vue';
import Nav from './components/nav/index.vue';
import LazyLoadImg from './components/lazy-load-img/index.vue';

export default defineComponent({
  name: 'app',
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    Contact,
    LazyLoadImg,
    Nav
  },
  data() {
    return {
      current: 10,
      total: 2000,
      img: 'http://cdn.qiniu.archerk.com.cn/fengmian.jpg',
      placeholder: 'http://cdn.qiniu.archerk.com.cn/meimei.jpeg',
      contactList: [
        {
          context: '864045511@qq.com',
          icon_type: 'email',
          img_src: '',
          url: ''
        },
        {
          context: '18392610514',
          icon_type: 'phone',
          img_src: '',
          url: ''
        },
        {
          context: '864045511',
          icon_type: 'qq',
          img_src: '',
          url: 'tencent://message/?uin=864045511&Site=&Menu-=yes'
        },
        {
          context: 'FedElvis',
          icon_type: 'weixin',
          img_src: 'http://cdn.qiniu.archerk.com.cn/qrcode.jpg',
          url: ''
        },
        {
          context: 'Alan Wang',
          icon_type: 'github',
          img_src: '',
          url: 'https://github.com/OnlyProbie'
        }
      ],
      navList: [
        {
          icon_type: 'home',
          name: 'HOME',
          link: '/'
        },
        {
          icon_type: 'account',
          name: 'about',
          link: '/about'
        },
        {
          icon_type: 'list',
          name: 'List',
          link: '/list',
          start_with: true
        }
      ]
    }
  },
  methods: {
    handlePageChange(pageNumber: number) {
      this.current = pageNumber
    },
    handleLoad() {
      console.log('原图加载完成')
    }
  },
});

</script>

<style lang="scss" scoped>
.empty-wrap {
  display: flex;
}
.empty {
  position: relative;
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
  background-color: gray;
}
.empty-1 {
  position: relative;
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
.empty-2 {
  position: relative;
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
.empty-3 {
  position: relative;
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
  background-color: gray;
}
</style>
