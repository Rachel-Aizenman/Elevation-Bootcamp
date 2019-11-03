//Exercise 5

//write a function
// that accept two parameters
// on should be an array of #
// and the other just one #
// the function should loop through the array
// and evaluate wether or not it = one of the integers of the array
//if it does print truth
//if not print false

const checkExists = function (array, number) {
  for (let each of array) {
      while (each === number) {
        console.log("true")
      }
    }
  }


  checkExists([1, 2, 3], 2)
