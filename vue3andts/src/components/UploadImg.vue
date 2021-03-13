<template>
  <el-upload
    action="#"
    class="upload-wrapper"
    list-type="picture-card"
    :auto-upload="false">
      <template #default>
        <i class="el-icon-plus"></i>
      </template>
      <template #file="{file}">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    handleRemove(file: unknown) {
      console.log(file);
    },
    handlePictureCardPreview(file: any) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file: unknown) {
      console.log(file);
    },
  },
})
</script>

<style lang="scss">

</style>
