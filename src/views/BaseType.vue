<template>
  <div class='baseType'>
    <div>
      <h2>布尔值</h2>
      <p>isDone(false)
        <span>{{isDone}}</span>
      </p>
    </div>
    <div>
      <h2>数字</h2>
      <p>decLiteral(6)
        <span>{{decLiteral}}</span>
      </p>
      <p>hexLiteral(0xf00d)
        <span>{{hexLiteral}}</span>
      </p>
      <p>binaryLiteral(0b1010)
        <span>{{binaryLiteral}}</span>
      </p>
      <p>octalLiteral(0o744)
        <span>{{octalLiteral}}</span>
      </p>
    </div>
    <div>
      <h2>字符串</h2>
      <p>name(bob)
        <span>{{name}}</span>
      </p>
      <p>
        sentence(Hello, my name is ${ name }.)
        <span>{{sentence}}</span>
      </p>
    </div>
    <div>
      <h2>数组</h2>
      <p>list([1, 2, 3])
        <span>{{list}}</span>
      </p>
      <p>list([1, '2', 3])
        <span>{{list[1]}}</span>
      </p>
      <p>
        listGeneric({{'Array<类型>'}}[1, 2, 3])
        <span>{{listGeneric}}</span>
      </p>
    </div>
    <div>
      <h2>元组Tuple</h2>
      <p>x([string, number]['hello', 10])
        <span>{{x}}</span>
      </p>
      <button @click='tupleError'>元组错误</button>
    </div>
    <div>
      <h2>枚举（枚举从0开始编号，支持自定义编号）</h2>c(Color.Green)
      <span>{{c}}</span>
      <p>colorName(Color[2])
        <span>{{colorName}}</span>
      </p>
      
    </div>
    <div>
      <h2>Any</h2>notSure(any)
      <span>{{notSure}}</span>
      <button @click='changeAny'>修改any</button>
    </div>
    <div>
      <h2>Void</h2>
      <button @click='warnUser'>warnUser</button>
    </div>
    <div>
      <h2>null和undefined</h2>
    </div>
    <div>
      <h2>never不能结束，常用于抛出错误</h2>
      <button @click='fail'>fail</button>
    </div>
    <div>
      <h2>object(通常与接口联用)</h2>
    </div>
    <div>
      <h2>类型断言</h2>
      <p>someValue(any)
        <span>{{someValue}}</span>
      </p>
      <p>strLength(number)
        <span>{{strLength}}</span>
      </p>
      <p>someValueAs(any)
        <span>{{someValueAs}}</span>
      </p>
      <p>strLengthAs(any)
        <span>{{strLengthAs}}</span>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// 枚举从0开始编号，支持自定义编号
enum Color {
  Red,
  Green,
  Blue
}

@Component({})
export default class BaseType extends Vue {
  // 布尔
  public isDone: boolean = false
  // 数字
  public decLiteral: number = 20
  public hexLiteral: number = 0x14 // 16进制
  public binaryLiteral: number = 0b10100 // 2进制
  public octalLiteral: number = 0o24 // 8进制
  // 字符串
  public name: string = 'bob'
  public sentence: string = `Hello, my name is ${this.name}.`
  // 数组
  public list: (number | string)[] = [1, '2s', 3]
  public listGeneric: Array<number> = [1, 2, 3]
  // 元组
  public x: [string, number] = ['hello', 10]
  // 枚举
  public c: Color = Color.Green
  public colorName: string = Color[2]
  // any
  public notSure: any = 4
  // void、null、undefined、never
  public unusable: void = undefined // 无意义
  public num: number = 3
  // 类型判定
  public someValue: any = 'this is a string'
  public strLength: number = (<string>this.someValue).length
  public someValueAs: any = 'this is a string(as)'
  public strLengthAs: number = (this.someValueAs as string).length
  
  tupleError() {
    this.x = [10, 'hello']
    console.log(this.x[0].substr(1)) // OK
    console.log(this.x[1].substr(1)) // Error, 'number' does not have 'substr'
    this.x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型
    console.log(this.x[5].toString()) // OK, 'string' 和 'number' 都有 toString
    this.x[6] = true // Error, 布尔不是(string | number)类型
  }
  changeAny() {
    this.notSure = 'maybe a string instead'
    setTimeout(() => {
      this.notSure = false // okay, definitely a boolean
    }, 2000)
  }
  warnUser(): void {
    console.log('This is my warning message.')
  }
  numToNull() {
    this.num = null // 当指定了strictNullChecks标记，null和undefined只能赋值给void和它们各自
  }
  error(message: string): never { // 不能结束，常用于抛出错误
    throw new Error()
  }
  fail() {
    return this.error('Something failed')
  }
  inifiniteLoop(): never {
    while (true) {
      // 无限循环，也符合never的规则
    }
  }
}
</script>
<style scoped>
.baseType {
  text-align: center;
}
.baseType div {
  margin: 0 auto;
  text-align: left;
  width: 600px;
}
span {
  margin-left: 10px;
  float: right;
}
.baseType button {
  display: block;
}
</style>

