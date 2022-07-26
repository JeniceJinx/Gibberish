//Codes for Loops (chosing 5)

//First Loop

for(let i = 0; i <= 99; i++) {
  console.log(i);
}

//Expected result, numbers 0 - 99 will print to the console

//Second Loop

for(let i = 99; i >= 0; i--) {
  console.log(i);
}

//expected result: numbers 99-0 will print to the console

//Third Loop

for(let i = 3; i <= 90; i++) {
  const multipleOf3 = i % 3 === 0;
  if(multipleOf3) {
    console.log(i);
  }
  }
  //expected result: multiples of 3 are printed to the console up to 90
  
  
  //Fourth Loop
  
  for(let i = 0; i <= 99; i++) {
   const isOdd = i % 2 === 1;
   if(isOdd) {
     console.log(i);
 }
 }
  
 
//Fifth Loop

for(let i = 0; i <= 98; i++) {
  const isEven = i % 2 === 0;
  if(isEven) {
    console.log(i);
  }
}

//expected results: even numbers print from 2-98


//Five Minutes of Funk
for (var i = 0; i < 9; i++) {
  if (i === 1) console.log(i + " for the treble");
  else if (i === 2) console.log(i + " for the bass");
  else if (i === 3) console.log(i + " for the fellas");
  else if (i === 4) console.log(i + " for the plaid");
  else if (i === 5) console.log(i + " , minutes of funk, this ain't no junk So pull your bottom, off the tree stump" + " fellas real pretty, from city to city, But now we're gettin down to the nitty gritty" + "  From the bottom to the top, the top to the bottom, I'm gonna rock em, while I still got em" + " Our rappin shower has style and power" + "   And this, is our disco hour");
  else console.log(i);
}