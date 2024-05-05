//let NasaKey = config.NasaKey;

// use url: link + NasaKey

//created a class for planets to build objects for each planet.
class Planet {
    constructor(radius, fog, name, description) {
      this.radius = radius;
      this.fog = fog;
      this.name = name;
      this.description = description;
    }
  }

  const colorMap = {
    red: "rgba(255, 0, 0, 0.5)",
    green: "rgba(0, 128, 0, 0.5)",
    blue: "rgba(0, 0, 255, 0.5)",
    yellow: "rgba(255, 255, 0, 0.5)",
    purple: "rgba(128, 0, 128, 0.5)",
    orange: "rgba(255, 165, 0, 0.5)",
    black: "rgba(0, 0, 0, 0.5)",
    white: "rgba(255, 255, 255, 0.5)"
};



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

function getPlanetShadeColor(colorName) {
    // Default to transparent if color not found
    const defaultColor = "rgba(0, 0, 0, 0)";

    // Return the corresponding color style or default
    return colorMap[colorName.toLowerCase()] || defaultColor;
}

let newImage = new Image();
newImage.src = "/img/sun-planet.png";
newImage.sizes = "256px";
//created a function for each planet. I am sure there is a better way of doing this but this is what I have for now.
//creating new planets from my Planet Class above.
const planets = [
    new Planet(6963.4, "blue", "Sun", "The Sun is the star at the center of the Solar System."),
    new Planet(2.4397, "plain", "Mercury", "Mercury is the smallest planet in our solar system."),
    new Planet(6.0518, "plain", "Venus", "Venus is the second planet from the Sun."),
    new Planet(6.371, "plain", "Earth", "Earth is the third planet from the Sun."),
    new Planet(1.737, "plain", "Moon", "The Moon is Earth's only natural satellite."),
    new Planet(3.3895, "plain",  "Mars", "Mars is the fourth planet from the Sun."),
    new Planet(69.911, "plain", "Jupiter", "Jupiter is the fifth planet from the Sun."),
    new Planet(1.821, "plain", "Io", "Io is the innermost of the four Galilean moons of the planet Jupiter."),
    new Planet(1.56, "plain", "Europa", "Europa is the smallest of the four Galilean moons orbiting Jupiter."),
    new Planet(2.634, "plain", "Ganymede", "Ganymede is the largest moon of Jupiter."),
    new Planet(2.4, "plain", "Callisto", "Callisto is the second-largest moon of Jupiter."),
    new Planet(58.232, "plain", "Saturn", "Saturn is the sixth planet from the Sun."),
    new Planet(25.362, "plain", "Uranus", "Uranus is the seventh planet from the Sun."),
    new Planet(24.622, "plain", "Neptune", "Neptune is the eighth planet from the Sun."),
    new Planet(1.1883, "plain", "Pluto", "Pluto is the ninth planet from the Sun.")
]


// a function with a for loop that dynamically generates planets on the html document
function generatePlanets(planetsList) {
    // grabbing the element with the id "webapp-main" and assigning it to the variable webappMain
    var webappMain = document.getElementById("webapp-main");
    // a for loop, set to go through the array made above one by one to create my html elements
    // sets i to be 0 which is the beginning on the array (0 == 1) then it evaluates if i is less than the length of the array,
    // finally it increments i by 1 each time it goes through the loop.
    for (let i = 0; i < planetsList.length; i++) {

        // creating the variable "planet" and assigning it to the current planet in the array. 
        var planet = planetsList[i];

        // creating the container
        var outerDiv = document.createElement("div");
        outerDiv.className = "space-content";

        // creating the planet visual
        var planetDiv = document.createElement("div");
        planetDiv.id = "planet" + planet.name;

        // Apply shade based on the planet's color, or no style if the color is "plain"
        if (planet.fog.toLowerCase() != "plain") {
            var shadeDiv = document.createElement("div");
            shadeDiv.style.boxShadow = "0 100px 200px 60px " + planet.fog;
            shadeDiv.style.background = getPlanetShadeColor(planet.fog);
            planetDiv.appendChild(shadeDiv);
        } 

        // creating the planet title
        var contentTitle = document.createElement("h1");
        contentTitle.className = "space-content-title";
        contentTitle.id = planet.name.toLowerCase() + "Title";
        contentTitle.textContent = planet.name;

        // creating the planet description
        var contentDescription = document.createElement("h1");
        contentDescription.className = "space-content-description";
        contentDescription.id = planet.name.toLowerCase() + "Description";
        contentDescription.textContent = planet.description;

        // appending the elements to the html document
        outerDiv.appendChild(planetDiv);
        outerDiv.appendChild(contentTitle);
        outerDiv.appendChild(contentDescription);
        webappMain.appendChild(outerDiv);
    }
    // calling the addEventListeners function to add event listeners to the planets
    addEventListeners(planetsList);
}
// create a function to add event listeners to the planets, simular to above, it goes through the array one by one.
function addEventListeners(planetsList) {
    for (let i = 0; i < planetsList.length; i++) {
        var planet = planetsList[i];
        var planetDiv = document.getElementById("planet" + planet.name);
        // passes the planetDiv and planet to the planetClickDetails function below
        planetClickDetails(planetDiv, planet);
    }
}
// a function that has an onclick event to apply to the planets
// console log for debugging/testing
function planetClickDetails(planetDiv, planet) {
    planetDiv.addEventListener("click", (event) => {
        console.log("planet clicked:", planet.name);
    });
}

function findPlanet() {
    let input = document.getElementById("planetSearch").value;
    
    // lambda function
    let planet = planets.find(plan => plan.name.toLowerCase() === input.trim().toLowerCase());
    if (planet) {
        console.log(`We found the planet ${planet.name}`);
        snapToPlanet(document.getElementById("planet" + planet.name));
    }
    else {
        console.log("We couldn't find the planet");
    }
}

function snapToPlanet(planetObject) {
    planetObject.scrollIntoView({behavior: "smooth", block: "center"});
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

// Progress bar
// declaring variables and assigning doc elements
var webappWidth = document.documentElement.scrollWidth;
var scrollBar = document.querySelector(".webapp-main");
var barElement = document.querySelector(".bar");
// onscroll event to find the scroll position and applying it to some css to animate the progress bar
    if (scrollBar) {
        scrollBar.onscroll = function() {
            console.log("Hor Scroll Position:", scrollBar.scrollLeft);

            var percentageScrolled = (scrollBar.scrollLeft / webappWidth) * 13.4163;

            barElement.style.width = percentageScrolled + "%";
        }
    };

generatePlanets(planets);
});

// add a function to stop the user from highlighting text when they click and drag.