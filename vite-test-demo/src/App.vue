<template>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <!-- <img alt="Vue logo" style="width:350px;height: 200px;" :src="imgUrl" /> -->

  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <div  class="test" :class="$style.nav">hello vite</div>

  <div>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="zh">zh</option>
    </select>
    <p>{{ t('name') }}</p>
  </div>

</template>
<script setup>
import { getCurrentInstance, ref, computed } from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
// 解析为地址
import imgUrl from '@/assets/test.jpg'
import classes from './app.module.css'
// 获取组件实例
const ins = getCurrentInstance()
// 定义i18n函数
function usei18n () {
  const locale = ref('zh')
  // 获取资源信息
  const i18n = ins.type.i18n
  const t = msg => computed(() => i18n[locale.value][msg]).value
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
    "language": "语言",
    "name": "中文"
  }
}
</i18n>

<style scoped module>
.nav {
  width: 350px;
  height: 200px;
  background-image: url(@/assets/test.jpg);
  background-size: cover;
}
</style>

<style lang="scss" scoped>
$link-color: #f40;
.test {
  color: $link-color;
  font-size: 30px;
}
</style>