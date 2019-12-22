export class Utils {
  /**
   * Generate random string with uppercase letters and numbers
   * @param length - Length of string
   */
  static generateStr(length: number): string {
    let generated = '';
    let currentLength = length;

    while (currentLength > 0) {
      generated += Math.random()
        .toString(36)
        .slice(-1 * Math.min(currentLength, 10))
        .toUpperCase();
      currentLength -= 10;
    }

    return generated;
  }
}
