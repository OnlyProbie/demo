<template>
  <div class="nav-box">
    <div class="logo">LOGO</div>
    <div class="nav-list">
      <router-link to="/">Home</router-link>
      <router-link to="/learn">Demo</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/activity">Activity</router-link>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  components: {
  },
};

</script>

<style lang="scss" scoped>
.nav-box {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  background-color: #3385ff;

  .logo {
    color: #fff;
  }
  .nav-list a {
    margin-left: 40px;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      font-weight: bold;
      color: #f40;
    }
  }
}

.container {
  margin-top: 60px;
}

.nav-box,
.container {
  padding-left: 200px;
  padding-right: 200px;
  min-width: 1300px;
}

</style>
