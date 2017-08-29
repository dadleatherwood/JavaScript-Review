//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
  function Animal (species, name, legs, color, food) {
    this.species = species
    this.name = name
    this.legs = legs
    this.color = color
    this.food = food
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  function person (name, age, height, gender) {
    return {
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }


//Create a animal array and a person array.

  //code here
  var animals =[]
  var people = []


//Create two instances of Animal and push those into your animal array

  //code here
  var houseCat = new Animal("cat","Timmy",4,"white",["mice", "cat food"])
  var houseDog = new Animal("dog", "Snickers", 3, "black",["slow cats", "dog food", "chicken fried steak"])
  animals.push(houseCat, houseDog)



//Create two instances of person and push those into your person array.

  //code here
  var jacob = person("Jacob", 37, "5 foot 9 inches", "male")
  var lucy = person("Lucy", 7, "itty bitty", "female")
  people.push(jacob, lucy)


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

Animal.prototype.eat = function () {
  var randomIndex = Math.floor(Math.random() * this.food.length)
  alert(this.name + ' ate ' + this.food[randomIndex])
}

houseCat.eat()

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?

  // No, because it had no contexual bindings, and there is no access to 'this keyword'



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    //creates a new instance of the object with passed in argumanets
  2) What's a good way to describe the keyword 'this'
    //a pointer to objects, which defines context
  3) Can a normal function which creates an object and then returns that object use the prototype?
    //yes, but with static values.  (Really the answer should be NO!)
  4) What happens if you forget to use 'new' when calling a constructor?
    //binds to window, which is not good!!!
*/
