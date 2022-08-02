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
  }
   // git commit -m " FizzBuzz Answered"