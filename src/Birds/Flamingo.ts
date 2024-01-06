import Bird from "../Parent Classes/Bird";

/**
 * This is a Flamingo class.
 *
 * It extends the Bird class and adds a ".pose()" method.
 */
class Flamingo extends Bird {
  /**
   * This is a constructor for the Flamingo class.
   * @param name a name for the flamingo
   * @param flies can the flamingo fly? If yes, "true", if no, "false", if unknown, undefined (optional)
   * @param swims can the flamingo swim? If yes, "true", if no, "false", if unknown, undefined (optional)
   */
  constructor(name: string, flies: boolean = true, swims: boolean = false) {
    super(name, flies, swims);
  }

  /**
   * The eats() method of the Flamingo class.
   * @returns "I'm eating fish!"
   */
  eats(): string {
    return `I'm eating fish!`;
  }

  /**
   * The getName() method of the Flamingo class.
   * @returns "Helloooo!~ I'm [name] the flamingo! 🦩"
   */
  getName(): string {
    return "Helloooo!~ I'm " + this.name + " the flamingo! 🦩";
  }

  /**
   * The sing() method of the Flamingo class.
   * @returns "🎵🎵"
   */
  sing(): string {
    return "🎵🎵";
  }

  /**
   * The pose() method of the Flamingo class. This is a unique method to the Flamingo class.
   * @returns "(poses💅)"
   */
  pose(): string {
    return "(poses💅)";
  }

  /**
   * The info() method of the Flamingo class.
   * @returns a string that says whether the flamingo can fly and/or swim, and that it can pose.
   */
  get info(): string {
    return super.info + "\n  - I can pose! 🦩";
  }
}

export default Flamingo;
