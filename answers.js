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

//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
for(let turtle of ninjaTurtles){
    console.log(turtle.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));

//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//sorts alphabetically - permanently alters array
favMovies.sort();

//Use the method pop
//remove last method from the array - permanently alters array
favMovies.pop();

//push "Guardians of the Galaxy"
//adds elements to the end of the array and returns the length of the new array
favMovies.push("Guardians of the Galaxy");

//Reverse the array
//reverses array permanently
favMovies.reverse();

//Use the shift method
//removes first element of an array and returns the removed element. permanently alters array
favMovies.shift();

//unshift - what does it return?
//adds elements to the beginning of an array and returns the new length of the array
favMovies.unshift("Ratatouille");
//it returns the new length of the array

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar")

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//does not permanently alter array
favMovies.slice(0, (favMovies.length-1)/2);

//store the value of your slice in a variable, console.log it - Thought question: what is going on here?
var favMoviesSliced = favMovies.slice(0, (favMovies.length-1)/2);
console.log(favMoviesSliced);

//console.log your final results
console.log(favMovies);

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Django unchained"));

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);

//Change "Neff" to "No One"
for(i = 0; i < whereIsWaldo.length; i++){
    if (whereIsWaldo[i].includes("Neff")){
        whereIsWaldo[i].splice(whereIsWaldo.indexOf("Neff")-1,1,"No One");
    }
}
console.log(whereIsWaldo)

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////