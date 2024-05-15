//let NasaKey = config.NasaKey;

// use url: link + NasaKey

//created a class for planets to build objects for each planet.

// nasa API image of the planet
// astronomacal unit "AU" from the sun
// Year length in Earth years
// space missions if any
// link to nasa page on the planet/object

class Planet {
    constructor(radius, fog, name, description, image, au, yearLength, missions, link) {
      this.radius = radius;
      this.fog = fog;
      this.name = name;
      this.description = description;
      //multiple parameters for various details???
      this.image = image;
      this.au = au;
      this.yearLength = yearLength;
      this.missions = missions;
      this.link = link;
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


//created a function for each planet. I am sure there is a better way of doing this but this is what I have for now.
//creating new planets from my Planet Class above.
const planets = [
    new Planet(6963.4, "plain", "Sun", "The Sun is the star at the center of the Solar System."),

    new Planet(2.4397, "plain", "Mercury", "Mercury is the smallest planet in our solar system."),

    new Planet(6.0518, "plain", "Venus", "Venus is the second planet from the Sun."),

    new Planet(6.371, 
    "plain", 
    "Earth",
    "Earth is the third planet from the Sun.", 
    "Testing planet details...",
    "1 AU",
    "1 Earth Year",
    "N/A",
    "#"),

    new Planet(1.737, "plain", "Moon", "The Moon is Earth's only natural satellite."),
    new Planet(3.3895, "plain",  "Mars", "Mars is the fourth planet from the Sun."),
    new Planet(0.532, "plain", "Phobos", "Phobos is the larger and closer of the two natural satellites of Mars."),
    new Planet(0.279, "plain", "Deimos", "Deimos is the smaller and more distant of the two natural satellites of Mars."),
    new Planet(0, "plain", "Ceres", "Ceres is the largest object in the asteroid belt between Mars and Jupiter."),
    new Planet(69.911, "plain", "Jupiter", "Jupiter is the fifth planet from the Sun."),
    new Planet(0, "plain", "Metis", "Metis is the innermost moon of Jupiter."),
    new Planet(0, "plain", "Adrastea", "Adrastea is the second moon of Jupiter."),
    new Planet(0, "plain", "Amalthea", "Amalthea is the third moon of Jupiter."),
    new Planet(0, "plain", "Thebe", "Thebe is the fourth moon of Jupiter."),
    new Planet(1.821, "plain", "Io", "Io is the innermost of the four Galilean moons of the planet Jupiter."),
    new Planet(1.56, "plain", "Europa", "Europa is the smallest of the four Galilean moons orbiting Jupiter."),
    new Planet(2.634, "plain", "Ganymede", "Ganymede is the largest moon of Jupiter."),
    new Planet(2.4, "plain", "Callisto", "Callisto is the second-largest moon of Jupiter."),
    new Planet(58.232, "orange", "Saturn", "Saturn is the sixth planet from the Sun."),
    new Planet(0, "plain", "Mimas", "Mimas is a moon of Saturn."),
    new Planet(0, "plain", "Enceladus", "Enceladus is a moon of Saturn."),
    new Planet(0, "plain", "Tethys", "Tethys is a moon of Saturn."),
    new Planet(0, "plain", "Dione", "Dione is a moon of Saturn."),
    new Planet(0, "plain", "Rhea", "Rhea is a moon of Saturn."),
    new Planet(0, "plain", "Titan", "Titan is a moon of Saturn."),
    new Planet(0, "plain", "Hyperion", "Hyperion is a moon of Saturn."),
    new Planet(0, "plain", "Iapetus", "Iapetus is a moon of Saturn."),
    new Planet(25.362, "plain", "Uranus", "Uranus is the seventh planet from the Sun."),
    new Planet(24.622, "blue", "Neptune", "Neptune is the eighth planet from the Sun."),
    new Planet(1.1883, "plain", "Pluto", "Pluto is the ninth planet from the Sun."),
    new Planet(0, "plain", "Charon", "Charon is the largest of the five known natural satellites of the dwarf planet Pluto."),
    new Planet(0, "plain", "Styx", "Styx is a moon of Pluto."),
    new Planet(0, "plain", "Nix", "Nix is a moon of Pluto."),
    new Planet(0, "plain", "Kerberos", "Kerberos is a moon of Pluto."),
    new Planet(0, "plain", "Hydra", "Hydra is a moon of Pluto."),
    new Planet(0, "plain", "Haumea", "Haumea is a dwarf planet located beyond Neptune's orbit."),
    new Planet(0, "plain", "Makemake", "Makemake is a dwarf planet and perhaps the second largest Kuiper belt object."),
    new Planet(0, "plain", "Eris", "Eris is a dwarf planet in the scattered disc, a region beyond the Kuiper belt.")
]

function generatingFog(planetDiv, planet){
    if (planet.fog.toLowerCase() != "plain") {
        var shadeDiv = document.createElement("div");
        shadeDiv.style.boxShadow = "0 100px 200px 60px " + planet.fog;
        shadeDiv.style.background = getPlanetShadeColor(planet.fog);
        planetDiv.appendChild(shadeDiv);
    } 
}


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
        outerDiv.className = "space-content row";
        outerDiv.id = "space-content";

        // creating the planet visual
        var planetDiv = document.createElement("div");
        planetDiv.id = "planet" + planet.name;


        let season = "Winter";
        let planetDate = new Date().getMonth() + 1;

        if (planetDate <= 4) {
            season = "Winter";
        }
        else if (planetDate < 7) {
            season = "Spring";
        }
        else if (planetDate < 10) {
            season = "Summer";
        }
        else {
            season = "Fall";
        }


        switch(season) {
            case "Winter":
                generatingFog(planetDiv, planet)
                break;
            case "Spring":
                generatingFog(planetDiv, planet)
                break;
            case "Summer":
                generatingFog(planetDiv, planet)
                break;
            case "Fall":
                generatingFog(planetDiv, planet)
                break;
            default:
              // code block
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

        // create the more info planet popup
        let planetDetails = document.createElement("div");
        planetDetails.className = "planet-details-popup";
        planetDetails.id = planet.name.toLowerCase() + "Details";
        planetDetails.style.color = "white";
        // generates the content for the planet details
        planetDetails.innerHTML = "<p>" + planet.image + "</p>" + "<p>" + planet.au + "</p>" + "<p>" + planet.yearLength + "</p>" + "<p>" + planet.missions + "</p>" + "<a href=" + planet.link + ">More Info</a>";
        planetDetails.style.backgroundColor = "grey";
        planetDetails.style.borderRadius = "10px";
        planetDetails.style.marginBottom = "5%";
        planetDetails.style.height = "200px";

        // appending the elements to the html document
        outerDiv.appendChild(planetDetails);
        outerDiv.appendChild(planetDiv);
        outerDiv.appendChild(contentTitle);
        outerDiv.appendChild(contentDescription);
        webappMain.appendChild(outerDiv);
    }
    // calling the addEventListeners function to add event listeners to the planets
    addEventListeners(planetsList);
}

// creating a quick menu for a simplified look at the bottom of the screen
function searchForPlanet() {
    searchBar = document.getElementById("planetSearchBar");
    searchBar.style.visibility = "hidden";
    searchIcon = document.getElementById("searchIcon");

    searchIcon.addEventListener("click", (event) => {
        if (searchBar.style.visibility === "hidden") {
            console.log("Showing search bar...")
            searchBar.style.visibility = "visible";
    }
        else {
            console.log("Hiding search bar...")
            searchBar.style.visibility = "hidden";
    }});
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
    let detailBox = document.getElementById(planet.name.toLowerCase() + "Details");

    detailBox.style.visibility = "hidden";

    planetDiv.addEventListener("click", (event) => {
        if (detailBox.style.visibility === "hidden") {
            detailBox.style.visibility = "visible";
            console.log("planet clicked:", planet.name + " Showing details...");
            
    }
        else {
            detailBox.style.visibility = "hidden";
            console.log("planet clicked:", planet.name + " Hiding details...");
        }
    });
}

function findPlanet() {
    let input = document.getElementById("searchInput").value;
    let searchBar = document.getElementById("planetSearchBar");
    
    // lambda function
    let planet = planets.find(plan => plan.name.toLowerCase() === input.trim().toLowerCase());
    if (planet) {
        console.log(`We found the planet ${planet.name}`);
        snapToPlanet(document.getElementById("planet" + planet.name));
        searchBar.style.visibility = "hidden";
    }
    else {
        console.log("We couldn't find the planet");
        searchBar.style.visibility = "hidden";
    }
}

function snapToPlanet(planetObject) {
    planetObject.scrollIntoView({behavior: "smooth", block: "center", inline: "center"}); // block is horizontal, inline is vertical
}

// show and update text based on the kilometers we have travelled in space relative to the pixels we have scrolled
// 1 pixel = 54437 km
// 2682px = distance from the sun to the earth
// the sun is 146.6 million km away from the earth
function updateDistanceTravelled() {
    let distanceTravelled = document.getElementById("distance-travelled");
    let webappMain = document.getElementById("webapp-main");

    webappMain.addEventListener("scroll", function() {
    let distance = document.getElementById("webapp-main").scrollLeft;
    let distanceInKm = distance * 54437; // calculated based the the distance between the sun and the earth
    distanceTravelled.textContent = "Distance Travelled: " + distanceInKm + " km";
    //styling
    distanceTravelled.style.color = "#ec4926";
    distanceTravelled.style.textShadow = "2px 2px 3px #000000";
    distanceTravelled.style.fontFamily = "Reddit Sans, sans-serif";
    distanceTravelled.style.fontSize = "14px";
})};



    
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

// Touch Screen Support yay!
// Basically a copy and paste from the click and drag scrolling but with touch events instead of mouse events.
const webAppTouch = document.getElementById("webapp-main");

let touchStart = false;
let touchX;
let touchScroll;

webAppTouch.addEventListener("touchstart", e => {
    console.log("Touch Start");
    touchStart = true;
    // e.touches[0] is taking the first touchpoint (finger) on the screen and getting the x position of it.
    touchX = e.touches[0].pageX - webAppTouch.offsetLeft;
    touchScroll = webAppTouch.scrollLeft;
});

webAppTouch.addEventListener("touchmove", e => {
    if (!touchStart) return;
    e.preventDefault();
    const x = e.touches[0].pageX - webAppTouch.offsetLeft;
    const scroll = x - touchX;
    webAppTouch.scrollLeft = touchScroll - scroll;
});

document.addEventListener("touchend", e => {
    console.log("Touch End");
    touchStart = false;
});

// Progress bar
// declaring variables and assigning doc elements
var webappWidth = document.documentElement.clientWidth;
var scrollBar = document.getElementById("webapp-main");
var barElement = document.getElementById("bar");
// onscroll event to find the scroll position and applying it to some css to animate the progress bar
    if (scrollBar) {
        scrollBar.onscroll = function() {
            console.log("Hor Scroll Position:", scrollBar.scrollLeft);
                // calculating the percentage of the scroll position
            let percentageScrolled = (scrollBar.scrollLeft / (scrollBar.scrollWidth - webappWidth)) * 100;
            console.log("Percentage Scrolled:", percentageScrolled);
            barElement.style.width = percentageScrolled + "%";
        }
    };
    
generatePlanets(planets);
searchForPlanet();
updateDistanceTravelled();
});

// add a function to stop the user from highlighting text when they click and drag.