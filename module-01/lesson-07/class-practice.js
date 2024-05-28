class Human {
  constructor(name, gender, age, calories) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.calories = calories || 0;
  }
  introduction() {
    console.log(`hi im ${this.name} im ${this.age}, I ate ${this.calories}`);
  }
  eatFood(food) {
    this.calories += food.caloriesSum;
  }
}

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = 4 * protein;
    this.carbs = 4 * carbs;
    this.fat = 9 * fat;
    this.caloriesSum = this.protein + this.carbs + this.fat;
  }
  printCalories() {
    console.log(`${this.name} has ${this.caloriesSum} calories`);
  }
}

const steak = new Food("steak", 40, 0, 10);

const aHuman = new Human("Kanye West", "male", 44);

aHuman.eatFood(steak);

aHuman.introduction();

class Man extends Human {
  constructor(name, age, calories) {
    super(name, "Male", age, calories);
  }
}

const aMan = new Man('Alex', 35);
console.log('aMan', aMan);
