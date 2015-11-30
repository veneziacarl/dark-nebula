exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString : function(str, amount) {
    var reducedArray = [];
    for (i = 0; i < str.length; i++){
      if (str.charAt(i) !== reducedArray[reducedArray.length - 1]){
        reducedArray.push(str.charAt(i));
      } else if (str.charAt(i) !== reducedArray[reducedArray.length - amount]) {
        reducedArray.push(str.charAt(i));
      };
    };
    return reducedArray.join('');
  },

  wordWrap : function(str, cols) {
    var splitString = str.split(' ');
    var wordWrapString = [splitString[0]];
    for (i = 1; i < splitString.length; i++) {
      //var lastElement = wordWrapString[wordWrapString.length -1]
      if ((wordWrapString[wordWrapString.length - 1].length + splitString[i].length + 1) <= cols) {
        wordWrapString[wordWrapString.length - 1] = wordWrapString[wordWrapString.length - 1] + " " + (splitString[i]);
      } else {
        wordWrapString.push(splitString[i]);
      };
    };
    return wordWrapString.join('\n')
  },
  reverseString : function(str) {
    return str.split('').reverse().join('');
  }
};
