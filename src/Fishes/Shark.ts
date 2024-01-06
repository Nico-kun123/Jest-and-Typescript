import Fish from "../Parent Classes/Fish";

/**
 * This is a Shark class.
 * 
 * It extends the Fish class and adds a ".smile()" method.
 */
class Shark extends Fish {
  // It is not possible to access this property outside of the class
  private privateSecret: string = 'This is the private secret of the "Shark" class! 🤫';
  // It is not possible to access this property outside of the class, but it is possible to access it from the child classes
  protected protectedSecret: string = 'This is the protected secret of the "Shark" class! 🤫';

  /**
   * This is a constructor for the Shark class.
   * @param name a name for the shark
   * @param flies can the shark fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the shark swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
   constructor(name: string, flies: boolean = false, swims: boolean = true) {
    super(name, flies, swims);
  }

  /**
   * The eats() method of the Shark class.
   * @returns "I'm eating fish and I don't feel bad about it! 😈"
   */
  eats(): string {
    return `I'm eating fish and I don't feel bad about it! 😈`;
  }

  /**
   * The getName() method of the Shark class.
   * @returns "Grrrr! I'm [name] the shark! 🦈"
   */
  getName(): string {
    return "Grrrr! I'm " + this.name + " the shark! 🦈";
  }

  /**
   * The smile() method of the Shark class. This is a unique method to the Shark class.
   * @returns "😁"
   */
  smile(): string {
    return "😁";
  }

  /**
   * The info() method of the Shark class.
   * @returns a string that says whether the shark can fly and/or swim, and that it can smile.
   */
  get info(): string {
    return super.info + "\n  - I can smile! 😁";
  }

  /**
   * Prints the protected secret of the Shark class.
   */
  getProtectedSecret(): string {
    return this.protectedSecret;
  }

  /**
   * Prints the private secret of the Shark class.
   */
  getPrivateSecret(): string {
    return this.privateSecret;
  }
}

export default Shark;
