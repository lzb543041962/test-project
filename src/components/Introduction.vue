<template>
  <div class="hello">
    <p>{{msg}}</p>
    <h2>简介</h2>
    <p>
      TypeScript 是 JavaScript 的强类型版本。然后在编译期去掉类型和特有语法，生成纯粹的 JavaScript 代码。由于最终在浏览器中运行的仍然是 JavaScript，所以 TypeScript 并不依赖于浏览器的支持，也并不会带来兼容性问题。
    </p>
    <p>
      TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。使用过Java的同学就更能够明白这个道理。
    </p>
    <h3>优势</h3>
    <ul>
      <li><a>静态类型检查</a></li>
      <li><a>IDE 智能提示</a></li>
      <li><a>代码重构</a></li>
      <li><a>可读性</a></li>
    </ul>
    <h3>不方便改造成Typescript项目的原因主要可能有</h3>
    <ul>
      <li>项目太小，没有必要</li>
      <li>项目中大量依赖了第三方 JavaScript 类库，并且这些类库没有 .d.ts 文件</li>
      <li>需要在 HTML 里大量嵌入 JavaScript 代码，而非 HTML 和 JavaScript 分离。</li>
    </ul>
    <h2>环境搭建</h2>
    <h3>1、 安装 Vue CLI 3</h3>
    <blockquote>
      <p>npm install –global @vue/cli</p>
    </blockquote>
    <p>注意，如果本地环境还是vue-cli2.x版本，需要先卸载原版本的vue-cli，再安装3.x版本</p>
    <h3>2、 创建项目</h3>
    <blockquote>
      <p>vue create project-name</p>
    </blockquote>
    <p>选择默认还是手动，我们选择手动配置</p>
    <img src="../assets/1.png" alt="">
    <p>可以根据项目实际需要进行选择</p>
    <img src="../assets/2.png" alt="">
    <p>接下来Yes就行，我们需要Router路由和支持Less，还有Telint校验</p>
    <p>最后会选择是Lint on save还是Lint and fix on commit，这里我们选择Lint on save保存时校验，然后把我们的配置单独存在package.json里</p>
    <p>这样，我们的项目就创建完成了</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 800px;
  margin: 0 auto;
  text-align: left;
  img {
    width: 100%;
  }
}
blockquote {
  display: block;
  padding: 16px;
  margin: 0 0 24px;
  border-left: 8px solid #dddfe4;
  background: #eef0f4;
  overflow: auto;
  p {
    font-size: 14px;
    line-height: 22px;
    color: #999;
    font-weight: 400;
    margin-bottom: 0;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
