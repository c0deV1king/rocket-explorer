let NasaKey = config.NasaKey;

// use url: link + NasaKey

// Create 12 other objects
// changing color of planets
// click and drag
// 

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

function populateBody(body) {
    document.getElementById("bodyTitle").innerHTML = body.name;
    document.getElementById("bodyDescription").innerHTML = body.description;
}
