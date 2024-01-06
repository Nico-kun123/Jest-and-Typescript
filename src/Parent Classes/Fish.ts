import Animal from "./Animal";

/**
 * The Fish class is an abstract class that is the parent class of all fishes. It extends the Animal class.
 * 
 * It adds 2 methods: ".splash()" and ".whatThatMeans()".
 */
abstract class Fish extends Animal {
  /**
   * The constructor of the Fish class.
   * @param name a name for the fish
   * @param flies can the fish fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the fish swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies?: boolean, swims?: boolean) {
    super(name, flies, swims);
  }

  /**
   * The eats() method is an abstract method of the Fish class that must be implemented by all child classes.
   * 
   * It returns a string that says what the fish eats.
   */
  abstract eats(): string;

  /**
   * The getName() method is an abstract method of the Fish class that must be implemented by all child classes.
   * 
   * It returns a string that says the fish's name.
   */
  abstract getName(): string;
  
  /**
   * The splash() method of the Fish class. This is a unique method to the Fish class.
   * @returns "🌊"
   */
  splash(): string {
    return "🌊";
  }

  /**
   * The whatThatMeans() method of the Fish class. This is a unique method to the Fish class.
   * @returns "...and you know what that means? 🐟"
   */
  whatThatMeans(): string {
    return "...and you know what that means? 🐟";
  }

  /**
   * The info() method returns a string that says whether the fish can fly and/or swim, and that it can splash.
   */
  get info(): string {
    return super.info + "\n  - I can splash! 🌊";
  }
}

export default Fish;
