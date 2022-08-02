//EASY GOING

   // Write a for loop that will log the numbers 1 through 20.
    
    //             for(i = 0; i <= 20; i++){
    //     console.log(i);
    // }

    // console.log(i);


/*
  Even Numbers 
  
  
    for(i = 0; i <= 200; i++){
        let evenNumber = (i % 2 === 0)
        if(evenNumber){
            console.log(i);
        }
      }
*/


//FIZZ BUZZ
/*
for(i = 0; i <= 100; i++){
  
  if(i % 15 === 0){
      console.log("Fizz-Buzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  } 
  }*/
   // git commit -m " FizzBuzz Answered"

/*
   WILD WILD LIFE


Plantee just had her birthday; change Plantee's array to reflect her being a year older.



Change Wolfy's hometown from "Yukon Territory" to "Gotham City".



Give D'Art a second hometown by adding "Hawkins"



Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

*/
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

//git commit -m "Completed wild wild life "

