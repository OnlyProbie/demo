<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <img alt="Vue logo" style="width:350px;height: 200px;" :src="imgUrl" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div  class="nav" :class="classes.border">hello vite</div>
  <label>{{ t('language') }}</label>
  <select v-model="locale">
    <option value="en">en</option>
    <option value="zh">zh</option>
  </select>
  <p>{{ t('name') }}</p>
</template>

<script setup>
import { getCurrentInstance, ref, computed } from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
// 解析为地址
import imgUrl from '@/assets/test.jpg'
import classes from './app.module.css'
// 获取组件实例
const ins = getCurrentInstance()

function usei18n () {
  const locale = ref('zh')
  // 获取资源信息
  const i18n = ins.type.i18n
  const t = msg => {
    return computed(() => i18n[locale.value][msg]).value
  }
  return { locale, t }
}
const { locale, t } = usei18n()
</script>

<i18n>
{
  "en": {
    "language": "language",
    "name": "English"
  },
  "zh": {
    "language": "中文",
    "name": "中文"
  }
}
</i18n>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  width: 350px;
  height: 200px;
  background-image: url(@/assets/test.jpg);
  background-size: cover;
}
</style>

<style lang="scss" scoped>
$link-color: #f40;
.nav {
  color: $link-color;
  font-size: 30px;
}
</style>