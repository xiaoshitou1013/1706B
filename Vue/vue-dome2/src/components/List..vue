<template>
  <div class="list">

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:"list",
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions(['list'])
    
    },
    computed:{
        ...mapState(['contList'])
    },
    created(){
        this.lists()
    }

}
</script>

<style>

</style>
