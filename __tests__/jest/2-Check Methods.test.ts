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

describe("Checking general methods of the Classes:", () => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  it('Methods of the "Penguin" Class', () => {
    expect(penguin.eats()).toEqual("I'm eating fish and krill!");
    expect(penguin.getName()).toEqual("Hey! I'm Rico the penguin! 🐧");
  });
  it('Methods of the "Flamingo" Class', () => {
    expect(flamingo.eats()).toEqual("I'm eating fish!");
    expect(flamingo.getName()).toEqual(
      "Helloooo!~ I'm Doflamingo the flamingo! 🦩"
    );
  });
  it('Methods of the "Shark" Class', () => {
    expect(shark.eats()).toEqual(
      "I'm eating fish and I don't feel bad about it! 😈"
    );
    expect(shark.getName()).toEqual("Grrrr! I'm Jaws the shark! 🦈");
  });
  it('Methods of the "BabyShark" Class', () => {
    expect(babyShark.eats()).toEqual("I'm eating balanced meals! 🍎");
    expect(babyShark.getName()).toEqual(
      "I'm Baby Shark the baby shark! Do do do do do do! 🦈"
    );
  });
});

describe("Checking unique methods of the Classes:", () => {
  it('Methods of the "Penguin" Class', () => {
    expect(penguin.sing()).toEqual("🎶");
    expect(penguin.analysis()).toEqual('"Kawalsky, analysis! 🐧"');
  });
  it('Methods of the "Flamingo" Class', () => {
    expect(flamingo.sing()).toEqual("🎵🎵");
    expect(flamingo.pose()).toEqual("(poses💅)");
  });
  it('Methods of the "Shark" Class', () => {
    expect(shark.splash()).toEqual("🌊");
    expect(shark.whatThatMeans()).toEqual("...and you know what that means? 🐟");
    expect(shark.smile()).toEqual("😁");
  });
  it('Methods of the "BabyShark" Class', () => {
    expect(babyShark.splash()).toEqual("🌊");
    expect(babyShark.whatThatMeans()).toEqual(
      "...and you know what that means? 🐟"
    );
    expect(babyShark.smile()).toEqual("😁");
    expect(babyShark.sing()).toEqual('"Baby shark, do do do do do do! 🎵"');
  });
});

describe('Checking the static method of the "Animal" Class:', () => {
  it('".staticMethod()" method', () => {
    const expected = "This is a static method of the Animal class!";
    expect(Animal.staticMethod()).toEqual(expected);
    expect(Fish.staticMethod()).toEqual(expected);
    expect(Bird.staticMethod()).toEqual(expected);
    expect(Shark.staticMethod()).toEqual(expected);
    expect(BabyShark.staticMethod()).toEqual(expected);
    expect(Penguin.staticMethod()).toEqual(expected);
    expect(Flamingo.staticMethod()).toEqual(expected);
  });
});

describe('Method ".info()" for Different Classes:', () => {
  /**
   * This is a helper function that returns a string that says whether the animal can fly and/or swim
   * @param animal The animal to get the info from
   * @returns A string that says whether the animal can fly and/or swim
   */
  function animalInfo(animal: Animal): string {
    const fly =
      animal.flies === true
        ? "I can fly!"
        : animal.flies === false
        ? "I cannot fly!"
        : "I don't know if I can fly or not!";

    const swim =
      animal.swims === true
        ? "I can swim!"
        : animal.swims === false
        ? "I cannot swim!"
        : "I don't know if I can swim or not!";

    return `About me:\n  - ${fly}\n  - ${swim}`;
  }

  it('".info()" method (Penguin)', () => {
    const expected =
      animalInfo(penguin) +
      "\n  - I can sing! 🎵" +
      "\n  - I can ask Kawalsky for analysis! 🐧";
    expect(penguin.info).toEqual(expected);
  });

  it('".info()" method (Flamingo)', () => {
    const expected =
      animalInfo(flamingo) + "\n  - I can sing! 🎵" + "\n  - I can pose! 🦩";
    expect(flamingo.info).toEqual(expected);
  });

  it('".info()" method (Shark)', () => {
    const expected =
      animalInfo(babyShark) +
      "\n  - I can splash! 🌊" +
      "\n  - I can smile! 😁";
    expect(shark.info).toEqual(expected);
  });

  it('".info()" method (BabyShark)', () => {
    const expected =
      animalInfo(babyShark) +
      "\n  - I can splash! 🌊" +
      "\n  - I can smile! 😁" +
      "\n  - I'm baby shark! Do do do do do do! 🎵";
    expect(babyShark.info).toEqual(expected);
  });
});
