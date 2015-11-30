exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    obj['ourFn'] = fn
    return obj.ourFn();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    dataArray = [];
    for (var name in obj) {
      if (obj.hasOwnProperty(name)){
        dataArray.push(name + ": " + obj[name]);
      };
    };
    return dataArray;
  }
};
