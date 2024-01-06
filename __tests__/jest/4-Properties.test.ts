// import { describe, expect, it } from "@jest/globals";

// import Animal from "../../src/Parent Classes/Animal";
// import Bird from "../../src/Parent Classes/Bird";
// import Fish from "../../src/Parent Classes/Fish";
// import Penguin from "../../src/Birds/Penguin";
// import Flamingo from "../../src/Birds/Flamingo";
import Shark from "../../src/Fishes/Shark";
import BabyShark from "../../src/Fishes/Baby Shark";

// Creating instances of the classes
const shark = new Shark("Jaws");
const babyShark = new BabyShark("Baby Shark");

describe("Shark and BabyShark classes", () => {
  it('Shark Class SHOULD have "privateSecret" and "protectedSecret" properties with getter methods', () => {
    expect(shark.getPrivateSecret()).toBe(
      'This is the private secret of the "Shark" class! 🤫'
    );
    expect(shark.getProtectedSecret()).toBe(
      'This is the protected secret of the "Shark" class! 🤫'
    );
  });

  it('BabyShark Class SHOULD have access to Shark "protectedSecret" and "privateSecret" properties', () => {
    expect(babyShark.getProtectedSecret()).toBe(
      'This is the protected secret of the "Shark" class! 🤫'
    );
    expect(babyShark.getPrivateSecret()).toBe(
      'This is the private secret of the "Shark" class! 🤫'
    );
  });

  test.todo(
    'The readonly property of the "BabyShark" Class SHOULD be readonly'
  );

  test.todo(
    'The private and protected properties of the "Shark" Class SHOULD be private and protected'
  );
});