<template>
  <div class="home">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="13">
          <div class="grid-content">
            <Carousel cusHeight="430px"/>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="10">
          <div class="grid-content">
            <Form></Form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Carousel from '@/components/Carousel.vue'; // @ is an alias to /src
import Form from '@/components/Form.vue'

@Options({
  components: {
    Carousel,
    Form,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  .content {
    margin-top: 50px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  min-height: 36px;
  height: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
