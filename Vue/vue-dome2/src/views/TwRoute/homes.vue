<template>
  <div class='homes'>
      <div class="THRoute">
          <router-link 
            :to="(item.path)"
            tag="span"
            v-for="(item,index) in list" :key="index">
            {{item.name}}</router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'homes',
    data(){
      return{
        list:[
          {name:'关注',path:'/follow'},
          {name:'推荐',path:'/recommend'},
          {name:'热搜',path:'/heat'}
        ]
      }
    }
}
</script>

<style lang="scss">
.THRoute{
  width:100%;
  height: 45px;
  border-bottom:1px solid #ccc;
  display: flex;
  justify-content: space-around;
  span{
    line-height: 45px;
  }
}
</style>
