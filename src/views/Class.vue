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
    <div>
      <h2>存取器</h2>
      <p>privateEmployee(PrivateEmployee)
        <span>{{privateEmployee.fullName}}</span>
      </p>
      <p>我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。</p>
      <p>存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 get不带有 set的存取器自动被推断为 readonly。</p>
    </div>
    <div>
      <h2>抽象类</h2>
      <p>抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。（见AbstractAnimal类）</p>
      <p>抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。</p>
      <p>department(AccountingDepartment extends Department)
        <span>{{department}}</span>
      </p>
    </div>
    <div>
      <h2>把类当做接口使用</h2>
      <p>类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。</p>
      <p>point3d(interface Point3d extends Point)
        <span>{{point3d}}</span>
      </p>
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

// 存取器
let passcode = 'secret passcode'

class PrivateEmployee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

// 静态属性
class Grid {
  static origin = { x: 0, y: 0 }
  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
  constructor (public scale: number) { }
}

// 抽象类
abstract class AbstractAnimal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...')
  }
}
abstract class Department {
  constructor(public name: string) {
  }
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void // 必须在派生类中实现
}
class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}
let department: Department // 允许创建一个对抽象类型的引用

// 把类当做接口使用
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
interface Point3d extends Point {
  z: number
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
  // 存取器
  privateEmployee = new PrivateEmployee()
  // 静态属性
  grid1 = new Grid(1.0) // 1x scale
  grid2 = new Grid(5.0) // 5x scale
  // 抽象类
  // department = new Department() // 错误: 不能创建一个抽象类的实例
  department = new AccountingDepartment()
  // 把类当做接口使用
  point3d: Point3d = {x: 1, y: 2, z: 3}

  mounted () {
    // 简介
    console.log('简介')
    this.greeter.greet()
    // private
    console.log('private')
    this.privateGoat = this.rhino
    this.privateGoat = this.employee
    // protected
    console.log('protected')
    console.log(this.howard.name)
    // readonly修饰符
    console.log('readonly修饰符')
    this.dad.name = 'Man with the 3-piece suit'
    // 存取器
    console.log('存取器')
    this.privateEmployee.fullName = 'Bob Smith'
    if (this.privateEmployee.fullName) {
      console.log(this.privateEmployee.fullName)
    }
    // 静态属性
    console.log('静态属性')
    console.log(this.grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
    console.log(this.grid2.calculateDistanceFromOrigin({x: 10, y: 10}))
    // 抽象类
    console.log('抽象类')
    this.department.printName();
    this.department.printMeeting();
    this.department.generateReports(); // 错误: 方法在声明的抽象类中不存在（官网说报错，但例子里没有）
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

