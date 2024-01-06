// import { describe, expect } from "@jest/globals";

import Penguin from "../../src/Birds/Penguin";
import Flamingo from "../../src/Birds/Flamingo";
import Shark from "../../src/Fishes/Shark";
import BabyShark from "../../src/Fishes/Baby Shark";

describe("Sending additional parameters to the constructor (Penguin Class):", () => {
  it("new Penguin (CAN swim, CAN'T fly) [DEFAULT PARAMS]", () => {
    const penguin = new Penguin("Rico");
    expect(penguin.flies).toEqual(false);
    expect(penguin.swims).toEqual(true);
  });
  it("new Penguin (CAN swim, CAN fly)", () => {
    const penguin = new Penguin("Rico", true);
    expect(penguin.flies).toEqual(true);
    expect(penguin.swims).toEqual(true);
  });
  it("new Penguin (CAN'T swim, CAN fly)", () => {
    const penguin = new Penguin("Rico", true, false);
    expect(penguin.flies).toEqual(true);
    expect(penguin.swims).toEqual(false);
  });
  it("new Penguin (CAN'T swim, CAN'T fly)", () => {
    const penguin = new Penguin("Rico", false, false);
    expect(penguin.flies).toEqual(false);
    expect(penguin.swims).toEqual(false);
  });
});

describe("Sending additional parameters to the constructor (Flamingo Class):", () => {
  it("new Flamingo (CAN'T swim, CAN fly) [DEFAULT PARAMS]", () => {
    const flamingo = new Flamingo("Doflamingo");
    expect(flamingo.flies).toEqual(true);
    expect(flamingo.swims).toEqual(false);
  });
  it("new Flamingo (CAN'T swim, CAN fly)", () => {
    const flamingo = new Flamingo("Doflamingo", true);
    expect(flamingo.flies).toEqual(true);
    expect(flamingo.swims).toEqual(false);
  });
  it("new Flamingo (CAN'T swim, CAN'T fly)", () => {
    const flamingo = new Flamingo("Doflamingo", false);
    expect(flamingo.flies).toEqual(false);
    expect(flamingo.swims).toEqual(false);
  });
  it("new Flamingo (CAN swim, CAN fly)", () => {
    const flamingo = new Flamingo("Doflamingo", true, true);
    expect(flamingo.flies).toEqual(true);
    expect(flamingo.swims).toEqual(true);
  });
});

describe("Sending additional parameters to the constructor (Shark Class):", () => {
  it("new Shark (CAN swim, CAN'T fly) [DEFAULT PARAMS]", () => {
    const shark = new Shark("Jaws");
    expect(shark.flies).toEqual(false);
    expect(shark.swims).toEqual(true);
  });
  it("new Shark (CAN swim, CAN fly)", () => {
    const shark = new Shark("Jaws", true);
    expect(shark.flies).toEqual(true);
    expect(shark.swims).toEqual(true);
  });
  it("new Shark (CAN'T swim, CAN fly)", () => {
    const shark = new Shark("Jaws", true, false);
    expect(shark.flies).toEqual(true);
    expect(shark.swims).toEqual(false);
  });
  it("new Shark (CAN'T swim, CAN'T fly)", () => {
    const shark = new Shark("Jaws", false, false);
    expect(shark.flies).toEqual(false);
    expect(shark.swims).toEqual(false);
  });
});

describe("Sending additional parameters to the constructor (BabyShark Class):", () => {
  it("new BabyShark (CAN swim, CAN'T fly) [DEFAULT PARAMS]", () => {
    const babyShark = new BabyShark("Baby Shark");
    expect(babyShark.flies).toEqual(false);
    expect(babyShark.swims).toEqual(true);
  });
  it("new BabyShark (CAN swim, CAN fly)", () => {
    const babyShark = new BabyShark("Baby Shark", true);
    expect(babyShark.flies).toEqual(true);
    expect(babyShark.swims).toEqual(true);
  });
  it("new BabyShark (CAN'T swim, CAN fly)", () => {
    const babyShark = new BabyShark("Baby Shark", true, false);
    expect(babyShark.flies).toEqual(true);
    expect(babyShark.swims).toEqual(false);
  });
  it("new BabyShark (CAN'T swim, CAN'T fly)", () => {
    const babyShark = new BabyShark("Baby Shark", false, false);
    expect(babyShark.flies).toEqual(false);
    expect(babyShark.swims).toEqual(false);
  });
});
