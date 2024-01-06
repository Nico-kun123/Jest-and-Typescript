interface AnimalInterface {
  name: string;
  flies?: boolean | undefined; // optional property
  swims?: boolean | undefined; // optional property
  ThePrototypeMessage?: string;  // optional property (added to the prototype)

  /**
   * The eats() method is an abstract method of the Animal class that must be implemented by all child classes.
   * 
   * It returns a string that says what the animal eats.
   */
  eats(): string;

  /**
   * The getName() method is an abstract method of the Animal class that must be implemented by all child classes.
   * 
   * It returns a string that says the animal's name. 
   */
  getName(): string;

  /**
   * The info() getter method, which returns a string that says whether the animal can fly and/or swim.
   */
  info: string;
}

/**
 * The Animal class is an abstract class that is the parent class of all animals.
 * 
 * It contains the properties and methods that are common to all animals (e.g. name, ability to fly, ability to swim, ability to eat, etc.).
 */
abstract class Animal implements AnimalInterface {
  name: string;
  flies?: boolean | undefined;
  swims?: boolean | undefined;
  ThePrototypeMessage?: string;

  /**
   * The constructor of the Animal class.
   * @param name a name for the animal
   * @param flies can the animal fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the animal swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies?: boolean, swims?: boolean) {
    this.name = name;
    this.flies = flies;
    this.swims = swims;
  }

  abstract eats(): string;
  abstract getName(): string;

  /**
   * This is a static method of the Animal class. It can be called without creating an instance of the Animal class.
   * @returns "This is a static method of the Animal class!"
   */
  static staticMethod(): string {
    return "This is a static method of the Animal class!";
  }

  get info(): string {
    const flyingStatus =
      this.flies === true
        ? "I can fly!"
        : this.flies === false
        ? "I cannot fly!"
        : "I don't know if I can fly or not!";

    const swimmingStatus =
      this.swims === true
        ? "I can swim!"
        : this.swims === false
        ? "I cannot swim!"
        : "I don't know if I can swim or not!";

    return `About me:\n  - ${flyingStatus}\n  - ${swimmingStatus}`;
  }
}

// Add a property to the prototype of the Animal class
Animal.prototype.ThePrototypeMessage = "This data is stored in the prototype of the Animal class 😎";

export default Animal;
