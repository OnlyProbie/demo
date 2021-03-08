<template>
  <div class="form-wrapper">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Demo 创建</span>
          <!-- <el-button class="button" type="text">操作按钮</el-button> -->
        </div>
      </template>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="Demo 名称">
          <el-input placeholder="请输入 Demo 名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Demo 区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="娱乐区域一" value="recreation"></el-option>
            <el-option label="游戏区域二" value="game"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Demo 时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Demo 简介">
          <el-input type="textarea" v-model="form.desc" placeholder="请输入 Demo 简介"></el-input>
        </el-form-item>
        <el-form-item label="Demo 封面">
          <UploadImg />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UploadImg from './UploadImg.vue';

export default defineComponent({
  components: { UploadImg },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
})
</script>

<style lang="scss">
.form-wrapper {
  /* margin-top: 100px; */
  .box-card {
    .card-header {
      font-weight: 500;
      font-size: 24px;
    }
  }
}
</style>
