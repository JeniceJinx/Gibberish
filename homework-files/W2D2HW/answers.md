mkdir answers.js 
git add/git commit -m

test each section using 'node answers.js'

//comment out work 

make useful commit messages

git push to git hum 

PART I

    On all videos => 4
    
    
PART II: JavaScript Reps


EASY GOING

    Write a for loop that will log the numbers 1 through 20.
    
                for(i = 0; i <= 20, i++ ){
        console.log(i);
    }
    
    
git Commit -m "easy going answered"


for(i = 0; i <= 200; i++){
  let evenNumber = (i % 2 === 0)
  if(evenNumber){
      console.log(i);
  }
}
console.log(i);


  git commit -m " get even answered"  


FIZZ BUZZ

for(i = 0; i <= 100; i++){
  
  if(i % 15 === 0){
      console.log("Fizz");
  }else if(i % 3 === 0){
    console.log("Buzz");
  }else if(i % 5 === 0){
    console.log("Fizz-Buzz");
  }else{
    console.log(i);
  } 
  }
    git commit -m " FizzBuzz Answered"


WILD WILD LIFE


Plantee just had her birthday; change Plantee's array to reflect her being a year older.



Change Wolfy's hometown from "Yukon Territory" to "Gotham City".



Give D'Art a second hometown by adding "Hawkins"



Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;

console.log(plantee);

wolfy[3] = "Gotham City";

console.log(wolfy);

dart.push("Hawkins");

console.log(dart);

wolfy[0] = "Gameboy";

console.log(wolfy);

git commit -m "Completed wild wild life "




YELL AT NINJA TURTLES

Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles['Donatello','Leonardo', 'Raphael', 'Michaelangelo ' ]


console.log(ninjaTurtles);

Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

const ninjaTurtles= ['Donatello','Leonardo', 'Raphael', 'Michaelangelo']

console.log(ninjaTurtles);

for(const names of ninjaTurtles) {
  console.log(names.toUpperCase());
}

console.log(ninjaTurtles);

METHODS REVISITED

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));
// console.log(favMovies.sort());
// console.log(favMovies);

//console.log(favMovies.pop());

// console.log(favMovies.push('Guardians of the Galazy'));
// console.log(favMovies);
// console.log(favMovies.reverse());
// // console.log(favMovies);

// console.log(favMovies);
// console.log(favMovies.shift());
// console.log(favMovies.unshift());

//console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(3,'Avatar');
// console.log(favMovies);

console.log(favMovies.length.slice(-19,-8));





WHERE IS WALDO


const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",  ["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)


EXCITED KITTEN
const kittyTalk = [ 'Human,why you takin pictures of me', 'The catnip made me do it', 'It pushes the cups off the edge or it gets the hose', 'The dog did it', 'Mmm, lasagna']

//bracket notation `${kittyTalk[meow]}`

let meow =0;
kittyTalk[meow];


for(i = 1; i<= 100; i++){
  if(i % 5 === 0){
    console.log(i + " " + 'Love me, pet me! HSSSSSS!')
  }else if(i % 2 === 0 ) {
       let meow = Math.floor(Math.random()*kittyTalk.length)
      kittyTalk[meow]
      console.log(i + ' ' + `${kittyTalk[meow]}`)
  }else{
    console.log(i)
  }
  
}


FIND THE MEDIAN

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// nums.sort();

// console.log(nums);

function median(nums){
  const numSorted = nums.sort();
  return numSorted.length % 2 === 0 ? (numSorted[numSorted.length/2 -1] + numSorted[numSorted.length/2])/2 : numSorted[Math.floor(numSorted.length/2)];
}

console.log(`Median: ${median(nums)}`);

//looked up ternary operators on mdn web docs, the ? works to replace if else statements.  good for conditionals when pair with : 




