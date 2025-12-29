// myBind
function myBind(fn, context, ...rest) {
  return function(...args) {
    return fn.call(context, ...rest.concat(args))
  }
}

export function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

greet.myBind = function (context, ...params) {
  return myBind(greet, context, ...params);
};

// Chain
export function User() {
  this.askName = function () {
    this.name = prompt("Ваше имя?");
    return this;
  };
  this.askAge = function () {
    this.age = prompt("Ваш возраст?");
    return this;
  };
  this.showAgeInConsole = function () {
    console.log(this.age);
    return this;
  };
  this.showNameInAlert = function () {
    alert(this.name);
    return this;
  };
  return this;
}

// ForceConstructor
export function ForceConstructor(arg1, arg2) {
  if (!(this instanceof ForceConstructor)) {
    return new ForceConstructor(arg1, arg2);
  }

  this.arg1 = arg1;
  this.arg2 = arg2;
}

// Curry
export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}