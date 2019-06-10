const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  //efficient alternative to calling indiv setter methods
  addDishToCourse: function(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish); //assigns the new dish object to the appropriate category: app, main, or dessert
  },
  getRandomDishFromCourse: function(courseName){
    const dishes = this._courses[courseName]; //get the array of the course named
    const randIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randIndex];
  },
  generateRandomMeal: function(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    return `Your meal is: ${appetizer.name}, ${main.name}, ${dessert.name}.  The total cost is: $${appetizer.price + main.price + dessert.price}.`
  },
  get courses(){
    //this method returns an object that contains the key:value pairs for apps, mains, and desserts
    return {
      appetizers: this.appetizers, //'this' references the contents of the above arrays.  arrays will be populated using the setter methods
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appIn){
    this.appetizers.push(appIn);
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mainIn){
    this.mains.push(mainIn);
  },
  get desserts(){
    return this.courses.desserts;
  },
  set desserts(dessIn){
    this.desserts.push(dessIn);
  }
};
// menu.addDishToCourse('appetizers', 'mozz sticks', 4.50);
// console.log(menu.appetizers);
