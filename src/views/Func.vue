<template>
  <div class='function'>
    <div>
      <h2>函数类型</h2>
      <p>书写完整函数类型</p>
      <p>myAdd(return x + y)<span>{{myAdd(2, 3)}}</span></p>
      <p>add(return x + y)<span>{{add(2, 3)}}</span></p>
      <p>推断类型-按上下文归类</p>
    </div>
    <div>
      <h2>可选参数和默认参数</h2>
      <p>TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。</p>
      <p>简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。</p>
      <p>buildName(return firstName + ' ' + lastName)<span>{{buildName('Bob', 'Sr.')}}</span></p>
      <p>buildNameElse(return firstName + ' ' + lastName?)<span>{{buildNameElse('Bob')}}</span></p>
      <p>可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。</p>
      <p>buildNameDefault(return firstName + ' ' + lastName[default=Smith])<span>{{buildNameDefault('Bob')}}</span></p>
    </div>
    <div>
      <h2>剩余参数</h2>
      <p>buildNameElseAll(return firstName + ' ' + restOfName.join(' '))<span>{{buildNameElseAll('Joseph', 'Sr.', 'Lucas')}}</span></p>
      <p>剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。</p>
    </div>
    <div>
      <h2>重载</h2>
      <p>pickCard方法根据传入参数的不同会返回两种不同的类型。 如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 如果用户想抓牌，我们告诉他抓到了什么牌。</p>
      <p>pickCard(支持对象，数字)<span>{{pickCard(10)}}</span></p>
      <p>为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。</p>
      <button @click='printCard'>抽牌</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Func extends Vue {
  public suits = ['hearts', 'spades', 'clubs', 'diamonds']
  add(x: number, y: number): number {
    return x + y
  }
  myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y }
  buildName(firstName: string, lastName: string) {
    return firstName + ' ' + lastName
  }
  buildNameElse(firstName: string, lastName?: string) {
    if (lastName) {
      return firstName + ' ' + lastName
    } else {
      return firstName
    }
  }
  buildNameDefault(firstName: string, lastName = 'Smith') {
    return firstName + ' ' + lastName
  }
  buildNameElseAll(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ')
  }
  pickCard(x: {suit: string; card: number; }[]): number
  pickCard(x: number): {suit: string; card: number; }
  pickCard(x: any): any {
    let self = this
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === 'object') {
      let pickedCard = Math.floor(Math.random() * x.length)
      return pickedCard
    } else if (typeof x === 'number') {
      let pickedSuit = Math.floor(x / 13)
      return { suit: self.suits[pickedSuit], card: x % 13 }
    }
  }
  printCard() {
    let self = this
    let myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }]
    console.log(myDeck)
    let pickedCard1 = myDeck[self.pickCard(myDeck)]
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

    let pickedCard2 = self.pickCard(15)
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
  }
}
</script>
<style scoped>
.function {
  text-align: center;
  margin: 0 auto;
}
.function div {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.function button {
  display: block;
}
span {
  margin-left: 10px;
  float: right;
}
</style>

