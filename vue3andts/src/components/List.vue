<template>
  <el-table
    :data="tableList"
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Region"
      prop="region">
    </el-table-column>
    <el-table-column
      label="Day"
      prop="day">
    </el-table-column>
    <el-table-column
      label="Time"
      prop="time">
    </el-table-column>
    <el-table-column
      label="Desc"
      prop="desc">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'
import { FormType } from '@/types/index.d'

export default defineComponent({
  props: ['activityList'],
  setup() {
    const search = ref('')
    const store = useStore()
    const tableList = computed(() => store.getters.tableList)
    const handleEdit = function (index: number, row: FormType): void {
      console.log(index, row);
    }
    const handleDelete = function (index: number, row: FormType): void {
      console.log(index, row);
    }
    return {
      tableList,
      handleEdit,
      handleDelete,
    }
  },
});
</script>

<style lang="scss">

</style>
