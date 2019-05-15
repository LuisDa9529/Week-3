const word = "Lamina Animal";

console.log(isPalindrome(word));

function isPalindrome(word) {
  var en_medio = parseInt(word.length / 2);
  var size = word.length;
  let result = true;
  //012345|6|789012
  //012345| |543210
  //Lamina| | animal

  for (var i = 0; i <= en_medio; i++) {
    //ASCII DIFFERENCE: 32
    if (
      word[i].charCodeAt(0) === word[size - (i + 1)].charCodeAt(0) ||
      word[i].charCodeAt(0) + 32 === word[size - (i + 1)].charCodeAt(0) ||
      word[i].charCodeAt(0) === word[size - (i + 1)].charCodeAt(0) + 32
    ) {
      if (i === en_medio) {
        return true;
      }
    } else {
      return false;
    }
  }
}
