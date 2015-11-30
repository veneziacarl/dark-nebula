exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str)
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1+/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiouyAEIOUY]$/.test(str);
  },

  captureThreeNumbers : function(str) {
    if (/(\d{3})/.test(str)){
      return (str.match(/(\d{3})/))[0];
    } else {
      return false;
    };
  },

  matchesPattern : function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD : function(str) {
    return /^\$(([1-9][0-9]{0,2}(,\d{3})*)|0)?(\.\d{2})?$/.test(str)
  }
};
