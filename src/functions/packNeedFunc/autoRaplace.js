const stopWord = ["badWord", "stopWord"];
const string = "It's string was with badWord and stopWord";

export function autonReplace(stopWordArr = stopWord, changeStirng = "***", formattedString = string) {
  return formattedString.replace(new RegExp(stopWordArr.join("|"), "gi"), changeStirng);
}
