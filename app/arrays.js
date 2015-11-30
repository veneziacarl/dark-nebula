exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length; i > 0; i--){
      if (arr[i] === item){
        arr.splice(i, 1);
      };
    };
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        count += 1;
      };
    };
    return count;
  },

  duplicates : function(arr) {
    var duplicatesArray = [];
    var sortedArray = arr.sort();
    for (var i = 1; i < sortedArray.length; i++){
      if (sortedArray[i] === sortedArray[i - 1]){
        duplicatesArray.push(sortedArray[i]);
      };
    };
    return _.uniq(duplicatesArray);
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++){
      arr[i] = ( arr[i] * arr[i] );
    };
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occuranceArray = [];
    var pos = arr.indexOf(target);

    while (pos !== -1) {
      occuranceArray.push(pos);
      pos = arr.indexOf(target, pos + 1);
    }
    return occuranceArray;
  }
};
