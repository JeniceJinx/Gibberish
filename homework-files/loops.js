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
