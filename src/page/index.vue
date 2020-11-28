
<template>
  <div>
    <div>
      <div class="head dis">
        <div class="head-left">
          <img src="@/assets/banner.png" alt="">
        </div>
        <div class="head-center">
          <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
        </div>
        <div class="head-right">搜索</div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style  scoped>
.head {
  width: 100%;
 
  height: 60px;
}
.head-left img{
  width: 100%;
  height: 100%;
}
.head-left{
  flex: 1;
   border: 1px solid red;
  }
.head-center{
  flex: 7;
   border: 1px solid red;
}
.head-right{
  flex: 4;
   border: 1px solid red;
}
</style>