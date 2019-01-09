<template>
  <div class="home">
    <Introduction msg="Welcome to Your Vue.js + TypeScript App"/>
    <h2>Vue应用typescript例子</h2>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
    <button @click="addTimes(1)">addTimes+1</button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Watch, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue' // @ is an alias to /src

@Component({
  components: {
    Introduction
  }
})
export default class Home extends Vue {
  // data
  @Provide() public obj: object = {}
  @Provide() public msg: string = 'My typescript project!'
  @Provide() public times: number = 0

  // methods
  addTimes (a: number): number {
    this.times = this.times + a
    return this.times
  }

  greet () {
    alert('greeting: ' + this.msg)
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  @Watch('times')
  onChildChanged(val: number, oldVal: number) {
    console.log(val + ',' + oldVal)
  }

  // 生命周期
  mounted () {
    setTimeout(() => {
      console.log('loading')
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>

