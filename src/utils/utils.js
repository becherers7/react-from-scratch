// basic example utility functions, some of which purposefully creates side effects to show working tree shaking.

export const addToArray = function(element, array) {
    array.push(element);
    return array;
}


export const removeFromArray = function(element, array) {
    const position = array[element];
    array.splice(position, 1);
    return array;
}

export const ascSort = function(array) {
    if (Array.isArray(array)) {
        if (typeof(array[0]) === "string") {
            return array.sort();
        }
        if (typeof(array[0]) === "number") {
            array.sort(function(a, b) {
                return b-a;
            })
        }
    }
}

export const descSort = function(array) {
    if (Array.isArray(array)) {
        if (typeof(array[0]) === "string") {
            array.sort();
            return array.reverse();
        }
        if (typeof(array[0]) === "number") {
            array.sort(function(a, b) {
                return b-a;
            });
        }
    }
}

export const sanitizeArray = function(array) {
    if (Array.isArray(array)) {
        if (typeof(array[0]) === "string") {
            array.every(function(el) {
              // check if element is a string data type and that there are no html elements in the array.
                if (typeof(el) === "string" && /<[a-z][\s\S]*>/.el.test()) {
                    return typeof(el) === "string"
                }
          });
        }
        if (typeof(array[0]) === "number") {
            array.every(function(el) {
              // check that element is an integer.
                if (el.isInteger()) {
                    return typeof(el) === "number"
                }
          });
        }
    }
}
