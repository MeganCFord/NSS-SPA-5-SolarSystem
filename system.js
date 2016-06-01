//DOM getter variables
var el = document.getElementById("planets");
var cap = document.getElementById("newPlanets");
var eplan = document.getElementById("ePlanets");
var sen = document.getElementById("sentence");



/* Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets". */
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

function printPlanets() {
  planets.forEach(function(planet) {
    el.innerHTML += `${planet} `;
  });
};

printPlanets();



// Use the map method to create a new array where the first letter of each planet is capitalized
var newPlanets = [];
function capitalizePlanets() {
  planets.map(function(planet){
    planet = planet.replace(planet.charAt(0), planet.split("")[0].toUpperCase());
    newPlanets.push(planet);
  });
  console.log("capitalized planets", newPlanets);
};

function printNewPlanets() {
  newPlanets.forEach(function(planet) {
    cap.innerHTML += `${planet} `;
  });
};

capitalizePlanets();
printNewPlanets();



// Use the filter method to create a new array that contains planets with the letter 'e'
var eplanets = [];
function getEplanets () {
  planets.filter(function(planet){
    if (planet.charAt(0).toUpperCase() === "E") {
      eplanets.push(planet);
      console.log("added a planet", eplanets );
    } 
  });
  return eplanets;
};

function printEplanets() {
  eplanets.forEach(function(planet) {
    eplan.innerHTML += `${planet} `;
  });
};

getEplanets();
printEplanets();



// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = "";

function sentenceMaker() {
  sentence = words.reduce(function(prev, special) {
    return `${prev} ${special}`;
  });
};

function printSentence() {
  sen.innerHTML = sentence;

};

sentenceMaker();
printSentence();
