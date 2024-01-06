// import { describe, expect, it } from "@jest/globals";

// import Animal from "../../src/Parent Classes/Animal";
// import Bird from "../../src/Parent Classes/Bird";
// import Fish from "../../src/Parent Classes/Fish";
// import Penguin from "../../src/Birds/Penguin";
// import Flamingo from "../../src/Birds/Flamingo";
// import Shark from "../../src/Fishes/Shark";
// import BabyShark from "../../src/Fishes/Baby Shark";
import { Pigeon, getPigeonKeys, getLength } from "../../src/Generics/Gererics";

// Creating instances of the classes
const PIGEON = new Pigeon("Pidgey");

describe('Testing generics and function overloading on the "Pigeon" Class:', () => {
  it('Methods of the "Pigeon" Class (Briefly)', () => {
    expect(PIGEON.getName()).toBe("My name is Pidgey the Pigeon! 🐦");
    expect(PIGEON.eats()).toBe("I eat seeds and worms.");
    expect(PIGEON.sing()).toBe("Coo! Coo!");
    expect(PIGEON.shart()).toBe("💩");
  });

  it('The "overloadFunction" method of the "Pigeon" Class SHOULD return a the type of the input data (Only "string" and "number" types are supported!)', () => {
    expect(PIGEON.overloadFunction(1)).toBe(
      `This is an overloaded function! 1 is a number!`
    );
    expect(PIGEON.overloadFunction("1")).toBe(
      `This is an overloaded function! 1 is a string!`
    );
  });
  it('The "overloadFunctionGenerics" method of the "Pigeon" Class SHOULD return a the type of the input data (Supports ALL types!)', () => {
    expect(PIGEON.overloadFunctionGenerics(1)).toBe(
      `This is an overloaded function! "1" is a number!`
    );
    expect(PIGEON.overloadFunctionGenerics("1")).toBe(
      `This is an overloaded function! "1" is a string!`
    );
    expect(PIGEON.overloadFunctionGenerics(true)).toBe(
      `This is an overloaded function! "true" is a boolean!`
    );
    expect(PIGEON.overloadFunctionGenerics(null)).toBe(
      `This is an overloaded function! "null" is a object!`
    );
    expect(PIGEON.overloadFunctionGenerics([])).toBe(
      `This is an overloaded function! "" is a object!`
    );
    expect(PIGEON.overloadFunctionGenerics({})).toBe(
      `This is an overloaded function! "[object Object]" is a object!`
    );
  });
});

describe("Testing other functions:", () => {
  it('Testing the "getPigeonKeys" function', () => {
    expect(getPigeonKeys(PIGEON)).toEqual(["name", "flies", "swims"]);
  });
  it('Testing the "getLength" function', () => {
    expect(getLength("123")).toBe(3);
    expect(getLength([1, 2, 3])).toBe(3);
  });
});
