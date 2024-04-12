//let NasaKey = config.NasaKey;

// use url: link + NasaKey

// Create 12 other objects
// changing color of planets
// click and drag

// 10px == 1000km

//created a class for planets to build objects for each planet.
class Planet {
    constructor(radius, color, name, description) {
      this.radius = radius;
      this.color = color;
      this.name = name;
      this.description = description;
    }
  }


function testAlert() {
    alert("Hello! I am an alert box!!");
}

function convertToScale(distanceValue) {
    return distanceValue;
}

function getObjectDataFromNasaApi () {
    // Check out exoplanet API
}

function generateBody() {

}

function generateBackground() {

}
//created a function for each planet. I am sure there is a better way of doing this but this is what I have for now.

//look into Arrays to deal with this
function populateSun() {
    document.getElementById("planetSun").style.backgroundColor = sun.color;
    document.getElementById("sunTitle").innerHTML = sun.name;
    document.getElementById("sunDescription").innerHTML = sun.description;
}
function populateMercury() {
    document.getElementById("planetMercury").style.backgroundColor = mercury.color;
    document.getElementById("mercuryTitle").innerHTML = mercury.name;
    document.getElementById("mercuryDescription").innerHTML = mercury.description;
}
function populateVenus() {
    document.getElementById("planetVenus").style.backgroundColor = venus.color;
    document.getElementById("venusTitle").innerHTML = venus.name;
    document.getElementById("venusDescription").innerHTML = venus.description;
}
function populateEarth() {
    document.getElementById("planetEarth").style.backgroundColor = earth.color;
    document.getElementById("earthTitle").innerHTML = earth.name;
    document.getElementById("earthDescription").innerHTML = earth.description;
}
//creating new planets from my Planet Class above.
const sun = new Planet(6963.4, "Yellow", "Sun", "The Sun is the star at the center of the Solar System.");
const mercury = new Planet(2.4397, "Gray", "Mercury", "Mercury is the smallest planet in our solar system.");
const venus = new Planet(6.0518, "Yellow", "Venus", "Venus is the second planet from the Sun.");
const earth = new Planet(6.371, "Blue", "Earth", "Earth is the third planet from the Sun.");
const moon = new Planet(1.737, "Gray", "Moon", "The Moon is Earth's only natural satellite.");
const mars = new Planet(3.3895, "Red", "Mars", "Mars is the fourth planet from the Sun.");
const jupiter = new Planet(69.911, "Orange", "Jupiter", "Jupiter is the fifth planet from the Sun.");
const io = new Planet(1.821, "Yellow", "Io", "Io is the innermost of the four Galilean moons of the planet Jupiter.");
const europa = new Planet(1.56, "White", "Europa", "Europa is the smallest of the four Galilean moons orbiting Jupiter.");
const ganymede = new Planet(2.634, "White", "Ganymede", "Ganymede is the largest moon of Jupiter.");
const callisto = new Planet(2.4, "White", "Callisto", "Callisto is the second-largest moon of Jupiter.");
const saturn = new Planet(58.232, "Yellow", "Saturn", "Saturn is the sixth planet from the Sun.");
const uranus = new Planet(25.362, "Blue", "Uranus", "Uranus is the seventh planet from the Sun.");
const neptune = new Planet(24.622, "Blue", "Neptune", "Neptune is the eighth planet from the Sun.");
const pluto = new Planet(1.1883, "Brown", "Pluto", "Pluto is the ninth planet from the Sun.");

// click and drag scrolling
// document(points towards the html document)
// addEventListener(called a "method". It basically listens for an event that is inputed in the code, in the brackets)
// DOMContentLoaded(Is an event that waits until the HTML is all loaded before executing the code inside of it)
document.addEventListener("DOMContentLoaded", function() {

    // querySelector(searches for the first element in the html that matches the name in brackets)
    // in this case, it is searching for my class "webapp-main"
const clickAndDragScroll = document.querySelector(".webapp-main");
// debugging line of code, it tells me what is going on with the var, null if nothing.
console.log("clickAndDragScroll:", clickAndDragScroll);
// declaring variables for the events
// setting the default value of my mouse click to false, meaning my left mouse button is not currently clicked.
let isDown = false;
let startX;
let scrollLeft;
// a event + a function, listening for when my left mouse button is clicked down and held.
// the e in brackets is short for event, just a quicker way to write it.
clickAndDragScroll.addEventListener("mousedown", function(e) {
    // the value is being set to true, now that my mouse is clicked down.
    isDown = true;
    // assigning a value to the variable startX. it is the x position of the mouse on the page minus the left offset of the element.
    startX = e.pageX - clickAndDragScroll.offsetLeft;
    // assigning a value to the variable scrollLeft. it is the current scroll position of the element.
    scrollLeft = clickAndDragScroll.scrollLeft;
});
// same as above but it is listening for the user to release the left mouse button.
clickAndDragScroll.addEventListener("mouseleave", function() {
    isDown = false;
});
// basically the same thing, when the user releases the left mouse button, it calls both events.
clickAndDragScroll.addEventListener("mouseup", function() {
    isDown = false;
});

clickAndDragScroll.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - clickAndDragScroll.offsetLeft;
    const scroll = x - startX;
    clickAndDragScroll.scrollLeft = scrollLeft - scroll;
});
});

// add a function to stop the user from highlighting text when they click and drag.