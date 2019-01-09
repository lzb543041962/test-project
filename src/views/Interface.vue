<template>
  <div class='interface'>
    <div>
      <h2>接口初探</h2>
      <p>类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。</p>
      myObj({size: 10, label: 'Size 10 Object'})<span>{{myObj}}</span>
      <button @click='printLabel(myObj)'>输出LabelledValue.label</button>
    </div>
    <div>
      <h2>可选属性</h2>
      <p>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。</p>
      mySquare({color: 'black'})<span>{{mySquare}}</span>
      <button @click='createSquare(mySquare)'>createSquare</button>
    </div>
    <div>
      <h2>只读属性</h2>
      p1(Point)<span>{{p1}}</span>
      <button @click='changeP1'>changeP1 x=5</button>
      <h3>readonly vs const</h3>
      <p>最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。</p>
    </div>
    <div>
      <h2>额外的属性检查</h2>
      <p>我们在第一个例子里使用了接口，TypeScript让我们传入{ size: number label: string }到仅期望得到{ label: string }的函数里。 我们已经学过了可选属性，并且知道他们在“option bags”模式里很有用。</p>
      <p>然而，天真地将这两者结合的话就会像在JavaScript里那样搬起石头砸自己的脚。</p>
      mySquareError()<span>{{mySquareError}}</span>
    </div>
    <div>
      <h2>函数类型</h2>
      <p>接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。</p>
      <button @click='createFunc()'>mySearch('aaa', 'bbbb')</button>
      <p>函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。 函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。</p>
    </div>
    <div>
      <h2>继承接口</h2>
      <p>和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。</p>
      square(Square)<span>{{square}}</span>
      <button @click='changeSquare()'>changeSquare</button>
    </div>
    <div>
      <h2>混合类型</h2>
      c(c)<span>{{c}}</span>
      <button @click='printC()'>printC</button>
      <p>在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
interface LabelledValue {
  label: string
}
interface SquareConfig {
  color?: string
  width?: number
  // [propName: string]: any
}
interface Point {
  readonly x: number
  readonly y: number
}
// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
// 继承接口
interface Shape {
  color: string
}
interface Square extends Shape {
  sideLength: number
}
// 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {}
  counter.interval = 123
  counter.reset = function () {}
  return counter
}

@Component({
})
export default class Interface extends Vue {
  public myObj = { size: 10, label: 'Size 10 Object'}
  public mySquare = { color: 'black' }
  public p1: Point = { x: 10, y: 20 }
  public mySquareError = this.createSquareReturn({ colour: 'red', width: 100 })
  public square = <Square>{}
  public c = getCounter()
  // public mySquareError = this.createSquareReturn({ colour: 'red', width: 100 } as SquareConfig)

  printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
  }
  createSquare(config: SquareConfig): void {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    this.mySquare = newSquare
  }
  createSquareReturn(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
  }
  changeP1() {
    this.p1.x = 5
  }
  createFunc() {
    let mySearch: SearchFunc
    mySearch = function(src: string, sub: string): boolean {
      let result = src.search(sub)
      return result > -1
    }
    console.log(mySearch('aaa', 'bbbb'))
  }
  changeSquare() {
    console.log(this.square)
    this.square.color = 'blue'
    this.square.sideLength = 10
    console.log(this.square)
  }
  printC() {
    this.c(10)
    this.c.reset()
    this.c.interval = 5.0
    console.log(this.c)
  }
}
</script>
<style scoped>
.interface {
  text-align: center;
  margin: 0 auto;
}
.interface div {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
.interface button {
  display: block;
}
span {
  margin-left: 10px;
  float: right;
}
</style>

