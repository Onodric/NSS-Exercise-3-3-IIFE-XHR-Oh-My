"use strict";
// 5. In the `iife-xhr.js` file, define two functions, that will be executed after each type of animal is loaded, to then display those animals in your DOM. Example given below.
function showCarnivores (carnivores) {
  var preds = document.getElementById("predsHere");
  carnivores.forEach( function(element, index) {
    preds.innerHTML += "<li>" + element + "</li>";
  });
}

function showHerbivores (herbivores) {
  var prey = document.getElementById("preyHere");
  herbivores.forEach( function(element, index) {
    prey.innerHTML += "<li>" + element + "</li>";
  });
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

