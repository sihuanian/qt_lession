<template>
  <div>
    <button @click="open">开</button>
    <button @click="close">关</button>
    <el-table v-loading="dialogVisible" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import visiable from './visiable'
export default {
  mixins: [visiable],
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      // loading: true,
      // dialogVisible: false
    };
  },
  methods: {
    // open() {
    //   this.dialogVisible = true;
    // },
    // close() {
    //   this.dialogVisible = false;
    // }
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
button {
  padding: 5px 20px;
  border: 0;
  background-color: rgb(78, 198, 253);
  outline: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>