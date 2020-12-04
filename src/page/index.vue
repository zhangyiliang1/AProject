<style scoped>
.head {
  width: 100%;
  background: #348FF0;
}

.nav-wrap{
  display: flex;
  justify-content: space-around;
  line-height: 80px;
  color: #fff;
  
}
.nav-wrap div:hover{
   cursor: pointer;
   color: #ffae00;
}
.logo{
    height: 60px;
    width: 100px;
    padding: 10px 0;
    margin: 0px auto;
    border-radius: 50%;
}
.logo img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.head-left {
  text-align: center;
  flex: 2;

}
.head-center {
  flex: 7;
}
.head-right {
  flex: 3;
}
.search{
  width: 300px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  margin: 20px 0;
  border: 1px solid #f5f5f5;
  border-radius: 100px;
  padding-left: 20px;
  color: #fff;
}
.search img{
  width: 20px;
  height: 20px;
  vertical-align:middle;
}

</style>
<template>
  <div>
    <div>
      <div class="head dis">
        <div class="head-left">
        <div class="logo">
 <img src="@/assets/banner.png" alt="" />
        </div>
         
        </div>
        <div class="head-center">
          <div class="nav-wrap">
            <div>首页</div>
            <div>购物中心</div>
            <div>生活服务</div>
            <div>我的购物车</div>
          </div>
        </div>
        <div class="head-right">
           <div class="search">
           <img src="@/assets/icon_search.png" alt="">
             请输入你想搜索的商品
           </div>
        </div>
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
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
