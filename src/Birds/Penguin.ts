import Bird from "../Parent Classes/Bird";

/**
 * This is a Penguin class.
 * 
 * It extends the Bird class and adds an ".analysis()" method.
 */
class Penguin extends Bird {
  /**
   * This is a constructor for the Penguin class.
   * @param name a name for the penguin
   * @param flies can the penguin fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the penguin swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies: boolean = false, swims: boolean = true) {
    super(name, flies, swims);
  }

  /**
   * The eats() method of the Penguin class.
   * @returns "I'm eating fish and krill!"
   */
  eats(): string {
    return `I'm eating fish and krill!`;
  }

  /**
   * The getName() method of the Penguin class.
   * @returns "Hey! I'm [name] the penguin! 🐧"
   */
  getName(): string {
    return "Hey! I'm " + this.name + " the penguin! 🐧";
  }

  /**
   * The sing() method of the Penguin class.
   * @returns "🎶"
   */
  sing(): string {
    return "🎶";
  }

  /**
   * The analysis() method of the Penguin class. This is a unique method to the Penguin class.
   * @returns "Kawalsky, analysis! 🐧"
   */
  analysis(): string {
    return '"Kawalsky, analysis! 🐧"';
  }

  /**
   * The info() method of the Penguin class.
   * @returns a string that says whether the penguin can fly and/or swim, and that it can ask Kawalsky for analysis.
   */
  get info(): string {
    return super.info + "\n  - I can ask Kawalsky for analysis! 🐧";
  }
}

export default Penguin;
