exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [];
    var foundDirectory = null;
    var findDirectory = function(dataObject, targetDirName) {
      if (dataObject.dir === targetDirName) {
        foundDirectory = dataObject;
      } else {
        for (var i = 0; i < dataObject.files.length; i++) {
          if (typeof dataObject.files[i] === 'object') {
            findDirectory(dataObject.files[i], targetDirName);
          };
        };
      };
    };
    var recursiveFunction = function(fileFolder) {
      for (var i = 0; i < fileFolder.files.length; i++) {
        if (typeof fileFolder.files[i] === 'object') {
          recursiveFunction(fileFolder.files[i]);
        } else {
            fileList.push(fileFolder.files[i]);
        };
      };
    };
    if (dirName === undefined) {
      recursiveFunction(data);
    } else {
      findDirectory(data, dirName);
      recursiveFunction(foundDirectory);
    };
    return fileList;
  },

  permute: function(arr) {
    var nextPerm = [];
    var permutations = [];
    var permutationFunction = function (array){
      for (var i = 0; i < array.length; i++){
        var x = array[i];
        nextPerm.push(x);
        if (x === array[array.length - 1]){
          permutationFunction(12)
        }
      }
    }

    permutationFunction(arr);
    return permutations;

  },

  fibonacci: function(n) {
  },

  validParentheses: function(n) {
  }
};

// for (var i = 0; i < fileFolder.length; i++) {
//   if (typeof fileFolder[i] === 'object') {
//     recursiveFunction(fileFolder[i].files);
//   } else {
//     fileList.push(fileFolder[i]);
//   };
// };
