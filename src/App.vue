<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">简介与环境搭建</router-link> |
      <router-link to="/baseType">基础类型</router-link> |
      <router-link to="/interface">接口</router-link> |
      <router-link to="/function">函数</router-link> |
      <router-link to="/class">类</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a,span {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
