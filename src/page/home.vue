<template>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white" style="height:200px;background:red">
      <van-swipe-item v-for="item in imglist" :key="item.id"><img :src="item.imgsrc" style="width:100%;"></van-swipe-item>
    </van-swipe>
    <ul>
        <li v-for=" item in fontList" :key="item.id">
            <a href="javascript:void(0)">
                <i :class="[item.fontname]" class="iconfont"></i></a> 
                <p align="center" style="font-size:12px">{{item.title}}</p>
                </li>
    </ul>
    </div>
</template>
 <script>
 import picture1 from "../assets/picture/timg (1).jpg"
 import picture2 from "../assets/picture/timg (2).jpg"
 import picture3 from "../assets/picture/timg.jpg"
export default {
   data() {
      return {
          picture1,
          picture2,
          active:0,
          imglist:[{id:0,imgsrc:picture1},
          {id:1,imgsrc:picture2},
           {id:2,imgsrc:picture3}],
          fontList:[{id:0,fontname:"icon-zhanshi",title:"展示"},
          {id:1,fontname:"icon-xinwenzixun",title:"新闻资讯"},
          {id:2,fontname:"icon-liuyan",title:"留言"},
          {id:3,fontname:"icon-lianxiwomen",title:"联系我们"},
          {id:4,fontname:"icon-fenxiang",title:"分享"},
          {id:5,fontname:"icon-ziyuan",title:"咨询"},
          ]
      }
   },

}
</script>
<style lang="scss">
.iconfont{
    position: relative;
    font-size:40px !important;
    left:25%;
    color: black;
    &:hover{
       color: red 
    }
}
ul{
    list-style:none
}
li{
    display: inline-block;
}
ul>li{
    width: 80px;
    height: 80px;
    margin: 20px;
}
</style>