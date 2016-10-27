"use strict";
// 2. Create an IIFE with the name of `Predator`.
// 6. In the Predator IIFE, invoke the callback function, passed in from `iife-xhr.js`, after each file is loaded.
var Predator = (function () {
// 3. Predator should have two private arrays to store carnivores and herbivores.
  var carnivores = [];
  var herbivores = [];

  return {
// 4. Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "data/carnivores.JSON");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).predators;
        callbackToInvoke(carnivores);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "data/herbivores.JSON");
      loader.send();

      loader.addEventListener("load", function (callbackFn) {
        herbivores = JSON.parse(this.responseText).prey;
        callbackToInvoke(herbivores);
      });
    },
    getInnerArrays: function(){
      return carnivores + herbivores;
    }
  };
})();
