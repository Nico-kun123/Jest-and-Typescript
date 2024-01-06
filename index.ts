import Animal from "./src/Parent Classes/Animal";
import Bird from "./src/Parent Classes/Bird";
import Fish from "./src/Parent Classes/Fish";

import Penguin from "./src/Birds/Penguin";
import Flamingo from "./src/Birds/Flamingo";
import Shark from "./src/Fishes/Shark";
import BabyShark from "./src/Fishes/Baby Shark";

import { getPigeonKeys, getLength } from "./src/Generics/Gererics";
import { Pigeon } from "./src/Generics/Gererics";

const PENGUIN = new Penguin("Skipper");
const FLAMINGO = new Flamingo("Doffy");
const DaddyShark = new Shark("Nemo");
const SharkBaby = new BabyShark("Baby Shark");

const myAnimals = new Set([PENGUIN, FLAMINGO, DaddyShark, SharkBaby]);

myAnimals.forEach((animal) => {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.dir(animal.getName());
  console.log(animal.eats());
  console.log(animal.info);

  const special = "\nWhat can I do that's special?\nI can do this: ";
  const anotherSpecial = "...and also this: ";

  if (animal instanceof Bird) {
    console.log(special + animal.sing());
    if (animal instanceof Penguin) {
      console.log(anotherSpecial + animal.analysis());
    }
    if (animal instanceof Flamingo) {
      console.log(anotherSpecial + animal.pose());
    }
  }

  if (animal instanceof Fish) {
    console.log(animal.whatThatMeans());
    console.log(special + animal.splash());
    if (animal instanceof Shark) {
      console.log(anotherSpecial + animal.smile());
    }
    if (animal instanceof BabyShark) {
      console.log(anotherSpecial + animal.sing());
    }
    // console.log(animal.getPrivateSecret);
  }
  console.log("\n");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The following code is for testing purposes only. It is not part of the solution.

let show: boolean;

show = false;
if (show) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Calling methods that're unique to the classes:\n");
  console.dir(PENGUIN.sing());
  console.dir(PENGUIN.getName());
  console.dir(PENGUIN.analysis());
  console.dir(FLAMINGO.sing());
  console.dir(FLAMINGO.getName());
  console.dir(FLAMINGO.pose());
  console.dir(DaddyShark.splash());
  console.dir(DaddyShark.getName());
  console.dir(DaddyShark.eats());
  console.dir(SharkBaby.sing());
  console.dir(SharkBaby.getName());
  console.dir(SharkBaby.eats());
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Calling methods that're inherited from the parent classes:\n");
  console.log(DaddyShark.smile()); // Its own method
  console.log(SharkBaby.smile()); // Taken from the "Shark" class
  console.log(DaddyShark.splash()); // Taken from the "Fish" class
  console.log(SharkBaby.splash()); // Taken from the "Shark" class, which extends the "Fish" class
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Print out the prototype of the Animal class:\n");
  console.log(PENGUIN.ThePrototypeMessage);
  console.log(FLAMINGO.ThePrototypeMessage);
  console.log(DaddyShark.ThePrototypeMessage);
  console.log(SharkBaby.ThePrototypeMessage);
  console.log(Fish.prototype.ThePrototypeMessage);
  console.log(Bird.prototype.ThePrototypeMessage);
  console.log(Animal.prototype.ThePrototypeMessage);
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Prototypes of the objects:\n");
  console.log(Object.getPrototypeOf(SharkBaby)); // "Shark {}"
  console.log(Object.getPrototypeOf(DaddyShark)); // "Fish {}"
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Prototypes of the classes:\n");
  console.log(Object.getPrototypeOf(BabyShark)); // "[class Shark extends Fish]"
  console.log(Object.getPrototypeOf(Shark)); // "[class Fish extends Animal]"
  console.log(Object.getPrototypeOf(Fish)); // "[class Animal]"
  console.log(Object.getPrototypeOf(Animal)); // "{}"
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Prototypes of the prototypes of the classes:\n");
  console.log(Object.getPrototypeOf(BabyShark.prototype)); // "Fish {}"
  console.log(Object.getPrototypeOf(Shark.prototype)); // "Animal {}"
  console.log(Object.getPrototypeOf(Fish.prototype)); // ThePrototypeMessage
  console.log(Object.getPrototypeOf(Animal.prototype)); // "[Object: null prototype] {}"
  console.log("\n");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Prototypes of the prototypes of the objects:\n");
  console.log(Object.getPrototypeOf(Fish.prototype)); // ThePrototypeMessage
  console.log(Object.getPrototypeOf(Bird.prototype)); // ThePrototypeMessage
  console.log(Object.getPrototypeOf(Animal.prototype)); // "[Object: null prototype] {}"
  console.log(Object.getPrototypeOf(Fish.prototype.ThePrototypeMessage)); // "{}"
  console.log("\n");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The following code is for testing purposes only. It is not part of the solution.
show = true;
if (show) {
  const PIGEON = new Pigeon("Pidgey");
  console.log(getPigeonKeys(PIGEON));

  // Function overloading (supports only two types: number and string)
  console.log(PIGEON.overloadFunction(123));
  console.log(PIGEON.overloadFunction("123"));
  
  // Generic function (supports any type)
  console.log(PIGEON.overloadFunctionGenerics(123));
  console.log(PIGEON.overloadFunctionGenerics("123"));
  console.log(PIGEON.overloadFunctionGenerics(null));
  console.log(PIGEON.overloadFunctionGenerics([]));

  // Generic function with constraints
  console.log(getLength<string>("123"));
  console.log(getLength([1, 2, 3]));

  if ("shart" in PIGEON) {
    console.log("Pigeons can shart!");
  }
  console.log("\n");
}
