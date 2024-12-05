//
//
//                                                                       ,
//                                                                      ./(.
//                                                              .     /.,///(/
//                                                                   .,,..../((/
//                                                                      ,,,..///
//                                                                     /,.,,,*/
//                                                                      *  ,/. /****
//                                                                      .  .   ,/......,/  /. /
//                                                                       /   ./,,,.///.,,,/ ,  .
//                                                                          /,//,,../,.,#&//,/&&&%
//                                                               /,//    (,,,,,,/&&%%%%%/*/,,(%%%%%%&,
//                                                             /,,,,,//,./,,/,/%%%%%%%/*/,,,/%%&%%%%%%%&
//                                                            /,,,,,,(,(*,//*%%(((%%%%,,,*//%&%%%%%%%&%%&%
//                                                           /,,/,,,,,,.,./%%%%%(((#%%%,,/%%%%%%%%%%&&%%%&
//                                                           ,/,,/,,,,,*../%%%%%%(((((%%%(%%%%%&%%%%%& &%%%&
//                                                            /,,,,,,,,.,/%%%%%%%#(((((%%%%%%%%%%%%%%% &%%%%&
//                                                            /*,,,,#*,,/%%%%%%%%(((%&&&%/,#    #/
//                                                             ,,,/**,,/&%%%&&&* @,,,,,,,,,@@@@  @
//                                                             ,/*/*,/,&&    @&*@@@,,,,,,,(  #@& /
//                                                              &&,*,,,     &    @@@,,,,,,&%@@@% /
//                                                              &%*,,,*     %   @@@@,,,,,,*@@@@(
//                                                             .%&,,,*@    /(@@ @@@,,,,,,,%%%# &
//                                                               &%(,,,#,,    #%&&%(,,,,,,,,,///
//                                                               %&%(,,,,,,,,,,,,,,,,,,,,,,/*,,/
//                           &&&&%%%%&&&%                        %%%%&%,,,%,,,,,,,,,,,,,,/*,,/*
//                      #&%%%%%&&&&&&&%%%%%%&*                  *%%%%%%%%%%////*,*,,**,*///
//                   (&%%&%%%%%#((((((((#%%%%%%%.               &(%%%&&%%%%&*******/
//                 &%%&%%%#(((((((((%%%%((((((/*****///******///&(%%&%%&************
//               #%%&%%%((((((%%%%%%%%%%%%%%%%%/***/***/**/****%%%(%%%%%%%%&&*******/
//              &%%%%%(((((#%%%%%%%%%&%%%%%&&%%%//***/***/******%%%(%%%%%%%%&********
//            &%&%%((((((%%%%%%%%%%%%%&.       //*/****/*/*****&%%%((%%%%%&*********.
//           ,%%%%%((((((%%%%%%%%%%%&/         /*/*/*****/*******%%%%((#%%%(*********.
//          .&%%%%((((((%%%%%%%%%%%&           /.* ///**///******/*&%%%((&/*********/
//          &%%%%((((((%%%%%%%%%%%&            /,**/./*//*******/****&%%&************
//         &%&%%%((((((%%%%%%&%%%&             /**,/*.,/***////*******************/,
//        ,%%%%%%((((((%%%%%%&%%%&              /*******/***********************//
//        &%&%%%%((((((%%%%%%&%%%.              /********//******************//
//        &%%%%%%((((((%%%%%%&%%&             ///******/////////*******////////
//       ,%%%%%%%((((((#%%%%%%%%&           /*********/////////*******/////////*
//       %%%%&&%%(((((((%%%%%%&%%.         /*********/////////********//////////
//       #%%%&(%%%((((((#%%%%%%&%&        /*********/////////**********/////////,
//        &%%%,&%%(((((((%%%%%%%%&        /********/////////*********/ //////////
//           && %%%(((((((%%%%%%%%&      /*********/////////*********/ *//////////
//               &%#(((((((%%%%%%%%,    ***********/////////*********/  //////////.
//                  ,&#(((((%%%%%%%&    /**********////////***********  ///////////
//                      &%((%%%%%%%&   /**********////////***********/ *///////////.
//                          /&%%%%%%& /***********////////***********/  /////////////
//                                .&%%&/************///////************,  /////////////
//                                     /************/,/////************/   (////////////
//                                      //***********/    /*************/
//                                                         ///*****//////

//------------------------- Seting up shop -------------------------//

//Variable initialization

let horses;

let welcomeMessage = "Welcome to Stars Stables, enjoy your visit!";

let availableStalls = 30;

// Fees

const stableMonthFee = 100;

const latePaymentFee = 200;

//------------------------- First day -------------------------//
// constructor
//*NOTE location = true (it is outside)

function Horse(
  name,
  nickname,
  favoriteTreat,
  age,
  monthlyRent,
  location,
  accessory,
  color
) {
  this.name = name;
  this.nickname = nickname;
  this.favoriteTreat = favoriteTreat;
  this.age = age;
  this.monthlyRent = monthlyRent;
  this.location = location; // boolean true = outside
  this.accessory = accessory;
  this.color = color;

  //methods
  this.horseIntroduction = function () {
    console.log(
      `This is ${this.name} aka ${this.nickname}! ${this.name} is ${this.age} years old.`
    );
  };

  this.horseDetails = function () {
    console.log(
      `${this.name} hair coat is ${this.color} and wears ${this.accessory}.`
    );
  };
}

// Creating horses

let Twilight = new Horse(
  "Twilight",
  "Twily",
  "Oreos",
  7,
  100,
  true,
  "bow",
  "violet"
);
let Midnight = new Horse(
  "Midnight",
  "Midy",
  "chocolate chip cookies",
  8,
  200,
  false,
  "scarf",
  "Indigo blue"
);
let Sparkle = new Horse(
  "Sparkle",
  "Spark",
  "pocky",
  9,
  300,
  true,
  "fluffy socks",
  "gold"
);

horses = [Twilight, Midnight, Sparkle];

// extra horse

let Starlight = {
  name: "Starlight",
  nickname: "Star",
  favoriteTreat: "goldfish",
  age: 4,
  monthlyRent: 500,
  location: true,
  accessory: "gold watch",
  color: "beige",

  horseIntroduction: function () {
    console.log(
      `This is ${this.name}, also known as ${this.nickname}! ${this.name} is ${this.age} years old.`
    );
  },

  horseDetails: function () {
    console.log(
      `${this.name} has a ${this.color} coat and wears ${this.accessory}.`
    );
  },
};

horses.push(Starlight);

// Add a new property to the horses
Twilight.isHungry = true;
Midnight.isHungry = false;
Sparkle.isHungry = false;
Starlight.isHungry = true;

//------------------------- Stable roster -------------------------//

/**const Twilight = new Horse(
  "Twilight",
  "Twily",
  "Oreos",
  7,
  100,
  true,
  "bow",
  "violet",
  true
);
const Midnight = new Horse(
  "Midnight",
  "Midy",
  "chocolate chip cookies",
  8,
  200,
  false,
  "scarf",
  "Indigo blue",
  false
);
const Sparkle = new Horse(
  "Sparkle",
  "Spark",
  "pocky",
  9,
  300,
  true,
  "fluffy socks",
  "gold",
  false
);

const Starlight = {
  name: "Starlight",
  nickname: "Star",
  favoriteTreat: "goldfish",
  age: "4",
  monthlyRent: 500,
  location: true,
  accessory: "gold watch",
  color: "beige",
  isHungry: true,
};
 */

//---------------------- Growing business ----------------------//

//re-assign variable
availableStalls -= horses.length;

// avaiable stalls
if (availableStalls < 2) {
  console.log(`We have ${availableStalls}, we need to build more stalls.`);
} else {
  console.log(`We have ${availableStalls} available!`);
}

// LATE FEE FUNCTION
// if rent is late
function lateRent(horse) {
  const totalAmount = horse.monthlyRent + latePaymentFee;
  console.log(
    `${horse.name} will owe $${totalAmount} if the rent is paid late.`
  );
}

//invoking function for 2 horses
lateRent(Twilight);
lateRent(Midnight);

// like treats
for (let i = 0; i < horses.length; i++) {
  if (horses[i].favoriteTreat === "pocky") {
    console.log(`Yummy! ${horses[i].name} enjoyed that treat!`);
    break;
  } else {
    console.log(`Eww..${horses[i].name} did not like that treat!`);
  }
}

// NICKNAME FUNCTION
function horseNickname(horse) {
  return horse.nickname;
}

//output for chosen horse
console.log(horseNickname(Twilight));

//------------------------- Day to day operations -------------------------//

//UNIQUE PROPERTIES FUNCTION
function horseCheckAccesory(horse) {
  if (horse.accessory === "bow") {
    console.log(`${horse.name} loves wearing a bow!`);
  } else {
    console.log(`${horse.name} prefers to wear ${horse.accessory}.`);
  }
}

//invoking
horseCheckAccesory(Twilight);
horseCheckAccesory(Midnight);
horseCheckAccesory(Sparkle);
horseCheckAccesory(Starlight);

// OUTSIDE FUNCTION
// added last question into this
function horseOutside(horse, time) {
  if (horse.location === true && time === "dark") {
    horse.location = false; // Horse goes inside
    console.log(`It's getting dark, come inside ${horse.name}!`);
  } else if (horse.location === false && time !== "dark") {
    horse.location = true; // Horse goes outside
  }
}

horseOutside(Twilight, "dark");
horseOutside(Midnight, "dark");
horseOutside(Sparkle, "dark");
horseOutside(Starlight, "dark");

// INSIDE OR OUT FUNCTION
// move inside if they are outside vice versa
function horseInOrOut() {
  for (let i = 0; i < horses.length; i++) {
    if (horses[i].location) {
      horses[i].location = false;
      console.log(
        `${horses[i].name} come inside! *${horses[i].name} gets fed ${horses[i].favoriteTreat}*`
      );
    } else {
      horses[i].location = true;
      console.log(
        `${horses[i].name} go outside!*${horses[i].name} gets fed ${horses[i].favoriteTreat}*`
      );
    }
  }
}

//  EAT TIME FUNCTION
function feedHorses() {
  for (let i = 0; i < horses.length; i++) {
    if (horses[i].location) {
      //if outside
      horses[i].location = false;
      console.log(`${horses[i].name} come back inside!`);
    }
    console.log(`${horses[i].name} gets fed a ${horses[i].favoriteTreat}`);
  }
  console.log("All horses have been fed");
}

//log activity
feedHorses();

//--------------------------------------------------//
