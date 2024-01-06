import Bird from "../Parent Classes/Bird";

/**
 * The Pigeon class is a child class of the Bird class.
 *
 * It adds a ".shart()" method.
 */
class Pigeon extends Bird {
  /**
   * The constructor of the Pigeon class.
   * @param name name of the pigeon
   * @param flies can the pigeon fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the pigeon swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies: boolean = true, swims: boolean = false) {
    super(name, flies, swims);
  }

  /**
   * The sing() method returns a string that says the pigeon is singing.
   * @returns "Coo! Coo!"
   */
  sing(): string {
    return "Coo! Coo!";
  }

  /**
   * The getName() method returns a string that says the pigeon's name.
   * @returns "My name is [name] the Pigeon! 🐦"
   */
  getName(): string {
    return `My name is ${this.name} the Pigeon! 🐦`;
  }

  /**
   * The eats() method returns a string that says what the pigeon eats.
   * @returns "I eat seeds and worms."
   */
  eats(): string {
    return "I eat seeds and worms.";
  }

  /**
   * The shart() method returns a string that says the pigeon is sharting.
   *
   * It is a special method that only the Pigeon class has.
   * @returns "💩"
   */
  shart(): string {
    return "💩";
  }

  /**
   * This is an overloaded function. It can take a number or a string as an argument.
   * @param inputData the input data
   * @returns a string that says what the input data is
   */
  overloadFunction(inputData: number): string;
  overloadFunction(inputData: string): string;
  overloadFunction(inputData: unknown) {
    return `This is an overloaded function! ${inputData} is a ${typeof inputData}!`;
  }

  /**
   * This function is a generic function. It can take any type of data as an argument.
   * @param inputData the input data
   * @returns a string that says what the input data is
   */
  overloadFunctionGenerics<T>(inputData: T): string {
    return `This is an overloaded function! "${inputData}" is a ${typeof inputData}!`;
  };

  /**
   * The info() method returns a string that says whether the pigeon can fly and/or swim, and that it can sing and shart.
   */
  get info(): string {
    return super.info + "\n  - I can shart! 💩";
  }
}

function getPigeonKeys<PigeonKeys>(pigeon: Pigeon): PigeonKeys[] {
  return Object.keys(pigeon) as PigeonKeys[];
}

interface LengthHelp {
    length: number;
}
function getLength<T extends LengthHelp>(data: T): number {
  return data.length;
}

export { Pigeon, getPigeonKeys, getLength };