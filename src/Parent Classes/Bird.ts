import Animal from "./Animal";

/**
 * The Bird class is an abstract class that is the parent class of all birds. It extends the Animal class.
 * 
 * It adds an abstract ".sing()" method.
 */
abstract class Bird extends Animal {
  /**
   * The constructor of the Bird class.
   * @param name a name for the bird
   * @param flies can the bird fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the bird swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies?: boolean, swims?: boolean) {
    super(name, flies, swims);
  }

  /**
   * The eats() method is an abstract method of the Bird class that must be implemented by all child classes.
   * 
   * It returns a string that says what the bird eats.
   */
  abstract eats(): string;

  /**
   * The getName() method is an abstract method of the Bird class that must be implemented by all child classes.
   * 
   * It returns a string that says the bird's name.
   */
  abstract getName(): string;

  /**
   * The sing() method is an abstract method of the Bird class that must be implemented by all child classes.
   * 
   * It returns a string that says the bird is singing.
   */
  abstract sing(): string;

  /**
   * The info() method returns a string that says whether the bird can fly and/or swim, and that it can sing.
   */
  get info(): string {
    return super.info + "\n  - I can sing! 🎵";
  }
}

export default Bird;
