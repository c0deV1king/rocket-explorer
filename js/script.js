//let NasaKey = config.NasaKey;

// use url: link + NasaKey

// Create 12 other objects
// changing color of planets
// click and drag

// 10px == 1000km

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
function populateSun() {
    document.getElementById("sunTitle").innerHTML = sun.name;
    document.getElementById("sunDescription").innerHTML = sun.description;
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