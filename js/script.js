//let NasaKey = config.NasaKey;

// use url: link + NasaKey

// - Nice looking progress bar at the bottom to show how far you are
// - Animated rocketship that moves with bar
// - Show object for planets(circle), on click effect to show something

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
//creating new planets from my Planet Class above.
const planets = [
    new Planet(6963.4, "Yellow", "Sun", "The Sun is the star at the center of the Solar System."),
    new Planet(2.4397, "Gray", "Mercury", "Mercury is the smallest planet in our solar system."),
    new Planet(6.0518, "Yellow", "Venus", "Venus is the second planet from the Sun."),
    new Planet(6.371, "Blue", "Earth", "Earth is the third planet from the Sun."),
    new Planet(1.737, "Gray", "Moon", "The Moon is Earth's only natural satellite."),
    new Planet(3.3895, "Red",  "Mars", "Mars is the fourth planet from the Sun."),
    new Planet(69.911, "Orange", "Jupiter", "Jupiter is the fifth planet from the Sun."),
    new Planet(1.821, "Yellow", "Io", "Io is the innermost of the four Galilean moons of the planet Jupiter."),
    new Planet(1.56, "White", "Europa", "Europa is the smallest of the four Galilean moons orbiting Jupiter."),
    new Planet(2.634, "White", "Ganymede", "Ganymede is the largest moon of Jupiter."),
    new Planet(2.4, "White", "Callisto", "Callisto is the second-largest moon of Jupiter."),
    new Planet(58.232, "Yellow", "Saturn", "Saturn is the sixth planet from the Sun."),
    new Planet(25.362, "Blue", "Uranus", "Uranus is the seventh planet from the Sun."),
    new Planet(24.622, "Blue", "Neptune", "Neptune is the eighth planet from the Sun."),
    new Planet(1.1883, "Brown", "Pluto", "Pluto is the ninth planet from the Sun.")
]

function generatePlanets(planetsList) {
    var webappMain = document.getElementById("webapp-main");
    for (let i = 0; i < planetsList.length; i++) {

        var planet = planetsList[i];

        var outerDiv = document.createElement("div");
        outerDiv.className = "space-content";

        var planetDiv = document.createElement("div");
        planetDiv.id = "planet" + planet.name;
        planetDiv.style.backgroundColor = "planet" + planet.color;

        var contentTitle = document.createElement("h1");
        contentTitle.className = "space-content-title";
        contentTitle.id = planet.name.toLowerCase() + "Title";
        contentTitle.textContent = planet.name;

        var contentDescription = document.createElement("h1");
        contentDescription.className = "space-content-description";
        contentDescription.id = planet.name.toLowerCase() + "Description";
        contentDescription.textContent = planet.description;

        outerDiv.appendChild(planetDiv);
        outerDiv.appendChild(contentTitle);
        outerDiv.appendChild(contentDescription);
        webappMain.appendChild(outerDiv);
    }
}

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
// checks if the statement is false, if it is, it stops executing the if statement
    if (!isDown) return;
// preventDefault basically stops the default actions of the event, in this case it is the mouse move.
    e.preventDefault();
    const x = e.pageX - clickAndDragScroll.offsetLeft;
    const scroll = x - startX;
    clickAndDragScroll.scrollLeft = scrollLeft - scroll;
});
generatePlanets(planets);
});

// add a function to stop the user from highlighting text when they click and drag.