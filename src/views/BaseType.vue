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
      <p>
        listGeneric({{'Array<类型>'}}[1, 2, 3])
        <span>{{listGeneric}}</span>
      </p>
      <p>x([string, number]['hello', 10])
        <span>{{x}}</span>
      </p>
      <button @click='tupleError'>元组错误</button>
    </div>
    <div>
      <h2>枚举</h2>c(Color.Green)
      <span>{{c}}</span>
    </div>
    <div>
      <h2>Any</h2>notSure(any)
      <span>{{notSure}}</span>
      <button @click='changeAny'>修改any</button>
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
enum Color {
  Red,
  Green,
  Blue
}

@Component({})
export default class BaseType extends Vue {
  public isDone: boolean = false
  public decLiteral: number = 6
  public hexLiteral: number = 0xf00d
  public binaryLiteral: number = 0b1010
  public octalLiteral: number = 0o744
  public name: string = 'bob'
  public sentence: string = `Hello, my name is ${this.name}.`
  public list: number[] = [1, 2, 3]
  public listGeneric: Array<number> = [1, 2, 3]
  public x: [string, number] = ['hello', 10]
  public c: Color = Color.Green
  public notSure: any = 4
  public someValue: any = 'this is a string'
  public strLength: number = (<string>this.someValue).length
  public someValueAs: any = 'this is a string(as)'
  public strLengthAs: number = (this.someValueAs as string).length

  changeAny() {
    this.notSure = 'maybe a string instead'
    setTimeout(() => {
      this.notSure = false // okay, definitely a boolean
    }, 2000)
  }
  tupleError() {
    this.x = [10, 'hello']
    console.log(this.x[0].substr(1)) // OK
    console.log(this.x[1].substr(1)) // Error, 'number' does not have 'substr'
    this.x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型
    console.log(this.x[5].toString()) // OK, 'string' 和 'number' 都有 toString
    this.x[6] = true // Error, 布尔不是(string | number)类型
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

