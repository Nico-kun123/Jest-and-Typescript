// import { describe, expect } from "@jest/globals";

import Animal from "../../src/Parent Classes/Animal";
import Bird from "../../src/Parent Classes/Bird";
import Fish from "../../src/Parent Classes/Fish";
import Penguin from "../../src/Birds/Penguin";
import Flamingo from "../../src/Birds/Flamingo";
import Shark from "../../src/Fishes/Shark";
import BabyShark from "../../src/Fishes/Baby Shark";

// Creating instances of the classes
const penguin = new Penguin("Rico");
const flamingo = new Flamingo("Doflamingo");
const shark = new Shark("Jaws");
const babyShark = new BabyShark("Baby Shark");

describe("Checking the inheritance of the Classes", () => {
  it('The prototypes of the Bird & Fish Classes are instances of the "Animal" Class', () => {
    expect(Bird.prototype).toBeInstanceOf(Animal);
    expect(Fish.prototype).toBeInstanceOf(Animal);
  });

  it('Penguin and Flamingo objects are instances of the "Bird" Class', () => {
    expect(penguin).toBeInstanceOf(Bird);
    expect(flamingo).toBeInstanceOf(Bird);
  });

  it('Shark and BabyShark objects are instances of the "Fish" Class', () => {
    expect(shark).toBeInstanceOf(Fish);
    expect(babyShark).toBeInstanceOf(Fish);
  });

  it('BabyShark object is an instance of the "Shark" Class', () => {
    expect(babyShark).toBeInstanceOf(Shark);
  });

  it('Access the property inside the prototype of the "Animal" Class', () => {
    expect(babyShark.ThePrototypeMessage).toBeDefined();
    expect(babyShark.ThePrototypeMessage).toEqual(
      "This data is stored in the prototype of the Animal class 😎"
    );
    // expect(Object.prop).toBe();
  });
});
