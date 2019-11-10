<template>
  <div id="app">
     <van-nav-bar
       title="标题"
       left-text="返回"
       right-text="按钮"
       left-arrow
       @click-left="onClickLeft"
       @click-right="onClickRight"
      />
      <router-view></router-view>
    <footer>
     <van-tabbar v-model="active">
     <van-tabbar-item icon="home-o" replace to='/'>首页</van-tabbar-item>
     <van-tabbar-item icon="search" replace to='/vip'>会员</van-tabbar-item>
     <van-tabbar-item icon="friends-o" replace to='/shop'>购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to='/search'>查找</van-tabbar-item>
    </van-tabbar>
    </footer>
  </div>
</template>
<script>

export default {
  data(){
    return{
      active:0
    }
  },
  name: 'app',
  components: {
  },
  methods: {
    onClickLeft() {
    },
    onClickRight() {
    }
  },
  watch:{
  }
}
</script>

<style>

</style>
