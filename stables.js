                                            /*LESSON-4 CODE*/


//Defining variables
let horseName = "Caitlyn";
let horseNickname = "Cait";
let horseAge = 2;
isHorseInside = true;
//console.log(`This is my horse ${horseName} and her nickname is ${horseNickname}.`);



//fees 
const STABLE_MONTH_FEE = 100;
let saved_MONEY = (100 * 3)/10;

//console.log(`You've saved $${saved_MONEY} with a 10% discount applied with your 3 month stay at the stables.`);


                                            /*LESSON 5 CODE*/

/*if (isHorseInside === true){
    console.log(`${horseName} is outside galloping freely`); 
}*/



                                            /*LESSON 6 CODE*/


// horse s= ["name", age, isInside, nickname]
let horseOne = [horseName, horseAge, isHorseInside, horseNickname];
let horseTwo = ["Lemonade", 2, true, "crunchy ice"];
let horseThree = ["Shortcake", 1, true, "cakey"]


/*console.log(horseOne);
console.log(horseTwo);
console.log(horseOne.length); */


//how to push

/*
horseOne.push("pink");
console.log(horseOne);
*/


// Introduction to my horses
console.log(horseOne[0] + " the horse nickname is " + horseOne[3] );
console.log(`${horseTwo[0]} the horse nickname is ${horseTwo[3]}`);
console.log(`${horseThree[0]} the horse nickname is ${horseThree[3]}  `);



// checking if my horses are inside or outside
if( horseOne[2] === true){
    console.log(`${horseOne[0]} is outside.`);
}else{
    console.log(`${horseOne[0]} is inside.`);
}


if( horseTwo[2] === true){
    console.log(`${horseTwo[0]} is outside.`);
}else{
    console.log(`${horseTwo[0]} is inside.`);
}


if( horseThree[2] === true){
    console.log(`${horseThree[0]} is outside.`);
}else{
    console.log(`${horseThree[0]} is inside.`);
}

