class Person {
   constructor(public age:number) {
   }

   growOld = () => {
      this.age++
   }
}

var person = new Person(1)
setTimeout(person.growOld,1000)

setTimeout(function () {console.log(person.age)},2000)


class Adder {
   constructor(public a:number) {
   }

   add = (b:number):number => {
      return this.a + b
   }
}

class Child extends Adder{
   callAdd(b:number){
      return this.add(b)
   }
}

const child = new Child(123)
console.log(child.callAdd(123))

class Adder02 {
  constructor(public a:number) {
  }

  add = (b: number):number => {
     return this.a + b
  }
}

class Children02 extends Adder02{
    //when overriding method
    private superAdd = this.add
    add = (b:number):number => {
        return this.superAdd(b)
    }
}
