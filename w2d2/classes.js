console.log('Hello class');

//Always capitalize the first letter of a class
//that is what indicates to the developer its a class
//developers when we see a capital name we think of a class


//class is the blueprint, 
//this. is the specific instance of what is being built with the blueprint

class Vehicle{
    // use a clase || instantiate an object
    //instatiate object = create an object from a classs
    //use a new keyword
    //kind of treat it like a function

    constructor(colorParam, numberOfTiresParam, yearParam){
        //special function to add information to class object instantiation
        this.objectColor = colorParam;
        this.objectnumberOfTires = numberOfTiresParam;
        this.objectyear = yearParam;
        //this. is referencing the specific instance of that class
    }
}

const v1 = new Vehicle();
console.log(v1);

//constructor is a special function/method that we have in classes
//used to add information when ever you instantiate an object

//method is a function in side of an object 
//a constructor is a method
//methods do NOT have the function keyword
// methods are inside of a class
//you COULD take parameters inside of a method

//getters and setters

