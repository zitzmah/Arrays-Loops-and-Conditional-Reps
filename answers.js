////////////////////////////////
// Easy Going
////////////////////////////////
//Write a for loop that will log the numbers 1 through 20.
for(i=1; i < 21; i ++){
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for(i =0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//Write a javascript application that logs all numbers from 1 - 100.
//If a number is divisible by 3 log "Fizz" instead of the number.
//If a number is divisible by 5 log "Buzz" instead of the number.
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if (i% 3 === 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
wolfy[2] = 17;
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
//Give D'Art a second hometown by adding "Hawkins"
dart[4] = "Hawkins";
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////