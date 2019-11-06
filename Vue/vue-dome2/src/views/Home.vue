<template>
  <div class="home">
    <div class="Header">
        <input type="text">
      </div>
      <div class="Main">
        <router-view></router-view>
      </div>
      <div class="Footer">
        <router-link
          :to="(item.path)"
          class="TRoute"
          tag="span"
          v-for="(item,index) in list" :key="index"
        >{{item.name}}</router-link>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
          list:[
              {name:'首页',path:'/homes'},
              {name:'想法',path:'/dream'},
              {name:'大学',path:'/learn'},
              {name:'消息',path:'/market'},
              {name:'我的',path:'/my'}
          ]
    }
  }
};
</script>
<style lang="scss">
.home{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.Header{
  width:100%;
  height: 45px;
  background: #fff;
  input{
    width:85%;
    height: 40px;
    margin-left:7.5%;
    background: #999;
    border:none;
    border-radius: 6px;
    margin-top:2px;
  }
}
.Main{
  flex:1;
}
.Footer{
  width:100%;
  height:45px;
  background: yellow;
  display: flex;
  justify-content: space-around;
  span{
    line-height: 45px;
  }
}
</style>