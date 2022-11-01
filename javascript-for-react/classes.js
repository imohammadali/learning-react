class Car {
  constructor(model, power) {
    this.model = model;
    this.power = power;
  }
  getModel() {
    console.log(`The car model is ${this.model}`);
  }
  getPower() {
    console.log(`The car power is ${this.power} Hp`);
  }
}
const newCar = new Car("1987", "15");
// newCar.getModel();
// newCar.getPower();

class Engine extends Car {
  constructor(model, power, speed) {
    super(model, power);
    this.speed = speed;
  }
  getPower() {
    super.getPower();
    console.log(`And speed is ${this.speed} km/h`);
  }
}
const newEngine = new Engine("2001", "25", "220");
newEngine.getPower();
export default new Engine("2000", "23", "200");
