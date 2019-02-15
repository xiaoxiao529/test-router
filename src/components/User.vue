<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <!-- <router-link style="padding:20px;" v-bind:key="index" :to="'/user/'+item.tip+'/'+item.id" v-for="item,index in userlist">
      {{item.userName}}
    </router-link> -->
    <router-link style="padding:20px;" v-bind:key="index" :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" v-for="item,index in userlist">
      {{item.userName}}
    </router-link>
    <ul class="list-group" v-if="userInfo.userName">
      <li class="list-group-item">姓名：{{userInfo.userName}}</li>
      <li class="list-group-item">性别：{{userInfo.sex}}</li>
      <li class="list-group-item">爱好：{{userInfo.hobby}}</li>
    </ul>
    <hr>
    <div v-if="userInfo.userName">
      <!-- <router-link exact to="?info=follow">他的关注</router-link>  -->
      <router-link exact :to="{path:'',query:{info:'follow'}}">他的关注</router-link>
      <router-link exact to="?info=share">他的分享</router-link> 
    </div>
    <p>{{$route.params}}</p>
    <p>{{$route.query}}</p>
  </div>
</template>

<script>
let data = [
  {
    id:1,
    tip:'vip',
    userName:'姓名一',
    sex:'男',
    hobby:'学习'
  },
  {
    id:2,
    tip:'common',
    userName:'姓名二',
    sex:'女',
    hobby:'唱歌'
  },
  {
    id:3,
    tip:'vip',
    userName:'姓名三',
    sex:'男',
    hobby:'读书'
  }
]
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '用户',
      userlist:data,
      userInfo:{}
    }
  },
  watch:{
    $route(){
      this.getData();
    }
  },
  created(){
    console.log(this.$route.params.userId)  //{userId: "1"}
    this.getData();
  },
  methods:{
    getData(){
      let id = this.$route.params.userId;
      if(id){
        this.userInfo = this.userlist.filter((item)=>{
          return item.id == id;
        })[0]
      }else{
        this.userInfo = {}
      }
    }
  }
}
</script>

