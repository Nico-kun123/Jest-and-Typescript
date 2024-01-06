import Shark from "./Shark";

/**
 * This is a BabyShark class.
 * 
 * It extends the Shark class, which extends the Fish class. It adds a ".sing()" method.
 */
class BabyShark extends Shark {

  readonly readonlyMessage : string = "This is a readonly message! You can't change my value! 😎";

  /**
   * This is a constructor for the BabyShark class.
   * @param name a name for the baby shark
   * @param flies can the baby shark fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the baby shark swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies: boolean = false, swims: boolean = true) {
    super(name, flies, swims);
  }

  /**
   * The eats() method of the BabyShark class.
   * @returns "I'm eating balanced meals! 🍎"
   */
  eats(): string {
    return `I'm eating balanced meals! 🍎`;
  }

  /**
   * The getName() method of the BabyShark class.
   * @returns "I'm [name] the baby shark! Do do do do do do! 🦈"
   */
  getName(): string {
    return "I'm " + this.name + " the baby shark! Do do do do do do! 🦈";
  }

  /**
   * The sing() method of the BabyShark class. This is a unique method to the BabyShark class.
   * @returns "Baby shark, do do do do do do! 🎵"
   */
  sing(): string {
    return '"Baby shark, do do do do do do! 🎵"';
  }

  /**
   * The info() method of the BabyShark class.
   * 
   * It returns a string that says whether the baby shark can fly and/or swim, and that it can sing.
   */
  get info(): string {
    return super.info + "\n  - I'm baby shark! Do do do do do do! 🎵";
  }
}

export default BabyShark;
