<template>
  <div class='baseType'>
    <div>
      <h2>类</h2>
      <p>greeter(Greeter)
        <span>{{greeter}}</span>
      </p>
      <p>在引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。</p>
    </div>
    <div>
      <h2>继承</h2>
      <p>在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。</p>
      <p>dog(Dog extends Animal)
        <span>{{dog}}</span>
      </p>
      <p>
        <button @click="dog.bark()">Dog bark</button>
      </p>
      <p>
        <button @click="dog.move(10)">Dog.move(10)</button>
      </p>
      <p>类从基类中继承了属性和方法。 这里， Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 派生类通常被称作 子类，基类通常被称作 超类。</p>
      <p>因为 Dog继承了 Animal的功能，因此我们可以创建一个 Dog的实例，它能够 bark()和 move()。</p>
      <p>sam(Snake extends Animal)
        <span>{{sam}}</span>
      </p>
      <p>tom(Horse extends Animal)
        <span>{{tom}}</span>
      </p>
      <p>
        <button @click="sam.move()">sam.move()</button>
      </p>
      <p>
        <button @click="tom.move(34)">tom.move(34)</button>
      </p>
      <p>派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。</p>
    </div>
    <div>
      <h2>理解<a>private</a></h2>
      <p>当成员被标记成 private时，它就不能在声明它的类的外部访问。</p>
      <p>privateAnimal(PrivateAnimal)
        <span>{{privateAnimal}}</span>
      </p>
      <p>如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。</p>
      <p>因为 PrivateGoat和 Rhino共享了来自 PrivateAnimal里的私有成员定义 private name: string，因此它们是兼容的。 然而 Employee却不是这样。当把 Employee赋值给 PrivateGoat的时候，得到一个错误，说它们的类型不兼容。 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。</p>
    </div>
    <div>
      <h2>理解<a>protected</a></h2>
      <p>protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。</p>
      <p>howard(Staff extends Person)
        <span>{{howard}}</span>
      </p>
      <p>{{howard.getElevatorPitch()}}</p>
      <p>我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。</p>
      <p>构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。</p>
      <p>john(Person)
        <span>{{john}}</span>
      </p>
    </div>
    <div>
      <h2>readonly修饰符</h2>
      <p>可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。</p>
      <p>dad(Octopus)
        <span>{{dad}}</span>
      </p>
      <p>在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，并且立刻将 theName的值赋给 name，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。</p>
      <p>参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// 简介
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}
// 继承
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}
class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}
// private
class PrivateAnimal {
  private name: string;
  constructor(theName: string) { this.name = theName }
}
class Rhino extends PrivateAnimal {
  constructor() { super('Rhino') }
}
class Employee {
  private name: string
  constructor(theName: string) { this.name = theName }
}
// protected
class Person {
  protected name: string;
  // protected constructor(theName: string) { this.name = theName }
  constructor(theName: string) { this.name = theName }
}

class Staff extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

// readonly修饰符
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor (theName: string) {
    this.name = theName
  }
  // 省略构造函数内的赋值
  // constructor(readonly name: string) {
  // }
}

@Component({})
export default class ClassType extends Vue {
  // 简介
  greeter = new Greeter('world')
  // 继承
  dog = new Dog('pabi')
  sam = new Snake('sammy the Python')
  tom: Animal = new Horse('Tommy the Palomino')
  // private
  privateAnimal = new PrivateAnimal('Cat').name
  privateGoat = new PrivateAnimal('Goat')
  rhino = new Rhino()
  employee = new Employee('Bob')
  // protected
  howard = new Staff('Howard', 'Sales')
  john = new Person('John') // 修改Person类的构造函数为protected，会报错
  // readonly修饰符
  dad = new Octopus('Man with the 2 strong legs')
  mounted () {
    // 简介
    this.greeter.greet()
    // private
    this.privateGoat = this.rhino
    this.privateGoat = this.employee
    // protected
    console.log(this.howard.name)
    // readonly修饰符
    this.dad.name = 'Man with the 3-piece suit'
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

