class Human {
  constructor(name, gender, age, isMarried) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.isMarried = isMarried;
  }

  introduceSelf(){
    console.log(`Hi ! Im ${this.name}`)
  }
}


const aHuman = new Human('Lloyd Chambrier', 'male', 34, false)
const bHuman = new Human('Michael', 'Jordan', 56, true)

console.log('aHuman', aHuman)
console.log('bHuman', bHuman)

aHuman.introduceSelf()
