<template>
  <view-container title="查询表格">
    <el-card>
      <el-form :model="form" :inline="true">
        <el-form-item label="数据中心">
          <el-input v-model="form.dataCenter"></el-input>
        </el-form-item>
        <el-form-item label="数据集群">
          <el-input v-model="form.dataCluster"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </view-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Index extends Vue {
    public form = {
      dataCenter: '',
      dataCluster: ''
    }
  }
</script>

<style lang="scss" scoped>
</style>
