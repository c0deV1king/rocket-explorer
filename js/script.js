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
    new Planet(6963.4, "plain", "Sun", "The Sun is the star at the center of the Solar System.", "<img src='https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~medium.jpg' width='200px' height='200px'></img>", "This is the sun, our home star and it's what we will be using to determine each objects distance.", "The sun doesn't have a 'year'", "Explorer-10, Parker Solar Probe, SDO & more", "https://science.nasa.gov/sun/facts/"),

    new Planet(2.4397, "plain", "Mercury", "Mercury is the smallest planet in our solar system.", "<img src='https://images-assets.nasa.gov/image/PIA11245/PIA11245~orig.jpg' width='200px' height='200px'></img>", "0.4 AU from the Sun", "88 Days in a year", "Mariner 10, MESSENGER, BepiColombo.", "https://science.nasa.gov/mercury/facts/"),

    new Planet(6.0518, "plain", "Venus", "Venus is the second planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg' width='200px' height='200px'></img>", "0.72 AU from the Sun", "225 Days in a year", "Mariner 2, Venera 7, Akatsuki & more.", "https://science.nasa.gov/venus/venus-facts/"),

    new Planet(6.371, "plain", "Earth","Earth is the third planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA18033/PIA18033~medium.jpg' width='200px' height='200px'></img>","1 AU from the Sun","1 Earth Year","N/A","https://science.nasa.gov/earth/facts/"),

    new Planet(1.737, "plain", "Moon", "The Moon is Earth's only natural satellite.", "<img src='https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001939/GSFC_20171208_Archive_e001939~orig.jpg' width='200px' height='200px'></img>", "1 AU (Moon of Earth)", "354 Days in a year", "Apollo 11, Lunokhod 2, Ranger 7 & more.", "https://science.nasa.gov/moon/"),

    new Planet(3.3895, "plain",  "Mars", "Mars is the fourth planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA03675/PIA03675~orig.jpg' width='200px' height='200px'></img>", "1.5 AU from the Sun", "687 Days in a year", "Viking 1, Pathfinder, Perseverance / Ingenuity & more.", "https://science.nasa.gov/mars/facts/"),

    new Planet(0.532, "plain", "Phobos", "Phobos is the larger and closer of the two natural satellites of Mars.", "<img src='https://images-assets.nasa.gov/image/PIA10369/PIA10369~orig.jpg' width='200px' height='200px'></img>", "1.5 AU (Moon of Mars)", "N/A", "Phobos 2, Mars Express,  Mars Reconnaissance Orbiter & more.", "https://science.nasa.gov/mars/moons/phobos/"),

    new Planet(0.279, "plain", "Deimos", "Deimos is the smaller and more distant of the two natural satellites of Mars.", "<img src='https://images-assets.nasa.gov/image/PIA08667/PIA08667~orig.jpg' width='200px' height='200px'></img>", "1.5 AU (Moon of Mars)", "N/A", "Same as Phobos", "https://science.nasa.gov/mars/moons/deimos/"),

    new Planet(0, "plain", "Ceres", "Ceres is the largest object in the asteroid belt between Mars and Jupiter.", "<img src='https://images-assets.nasa.gov/image/PIA21079/PIA21079~orig.jpg' width='200px' height='200px'></img>", "2.8 AU from the Sun", "1682 Days in a year", "Dawn", "https://science.nasa.gov/dwarf-planets/ceres/facts/"),

    new Planet(69.911, "plain", "Jupiter", "Jupiter is the fifth planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA00343/PIA00343~orig.jpg' width='200px' height='200px'></img>", "5.2 AU from the Sun", "4333 Days in a year", "Pioneer 10, Juno, Galileo & more.", "https://science.nasa.gov/jupiter/jupiter-facts/"),

    new Planet(0, "plain", "Metis", "Metis is the innermost moon of Jupiter.", "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Metis.jpg' width='200px height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "N/A", "https://science.nasa.gov/jupiter/moons/metis/"),

    new Planet(0, "plain", "Adrastea", "Adrastea is the second moon of Jupiter.", "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Adrastea.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "N/A", "https://science.nasa.gov/jupiter/moons/adrastea/"),

    new Planet(0, "plain", "Amalthea", "Amalthea is the third moon of Jupiter.", "<img src='https://photojournal.jpl.nasa.gov/jpegMod/PIA01072_modest.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "N/A", "https://science.nasa.gov/jupiter/moons/amalthea/"),

    new Planet(0, "plain", "Thebe", "Thebe is the fourth moon of Jupiter.", "<img src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Thebe.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "N/A", "https://science.nasa.gov/jupiter/moons/thebe/"),

    new Planet(1.821, "plain", "Io", "Io is the innermost of the four Galilean moons of the planet Jupiter.", "<img src='https://images-assets.nasa.gov/image/PIA00738/PIA00738~orig.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "Pioneer 10 & 11, Voyager 1 & 2 & more.", "https://science.nasa.gov/jupiter/moons/io/facts/"),

    new Planet(1.56, "white", "Europa", "Europa is the smallest of the four Galilean moons orbiting Jupiter.", "<img src='https://images-assets.nasa.gov/image/PIA25695/PIA25695~orig.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "Pioneer 10 & 11, Juno, Europa Clipper & more.", "https://science.nasa.gov/jupiter/moons/europa/facts/"),

    new Planet(2.634, "plain", "Ganymede", "Ganymede is the largest moon of Jupiter.", "<img src='https://images-assets.nasa.gov/image/PIA24681/PIA24681~orig.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "Pioneer 11, Voyager 1 & 2, Galileo.", "https://science.nasa.gov/jupiter/moons/ganymede/facts/"),

    new Planet(2.4, "plain", "Callisto", "Callisto is the second-largest moon of Jupiter.", "<img src='https://images-assets.nasa.gov/image/PIA03456/PIA03456~orig.jpg' width='200px' height='200px'></img>", "5.2 AU (Moon of Jupiter)", "N/A", "Voyager 1 & 2, Juno.", "https://science.nasa.gov/jupiter/moons/callisto/facts/"),

    new Planet(58.232, "orange", "Saturn", "Saturn is the sixth planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA05380/PIA05380~orig.jpg' width='200px' height='200px'></img>", "9.5 AU from the Sun", "10759 Days in a year", "Pioneer 11, Voyager 1 & 2, Cassini & more.", "https://science.nasa.gov/saturn/facts/"),

    new Planet(0, "plain", "Mimas", "Mimas is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA02267/PIA02267~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Cassini", "https://science.nasa.gov/saturn/moons/mimas/"),

    new Planet(0, "plain", "Enceladus", "Enceladus is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/JPL-2015_10_28-PIA17202/JPL-2015_10_28-PIA17202~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Cassini", "https://science.nasa.gov/saturn/moons/enceladus/"),

    new Planet(0, "plain", "Tethys", "Tethys is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA09723/PIA09723~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Pioneer 11, Voyager 1 & 2, Cassini", "https://science.nasa.gov/saturn/moons/tethys/"),

    new Planet(0, "plain", "Dione", "Dione is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA09764/PIA09764~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Pioneer 11, Voyager 1 & 2, Cassini", "https://science.nasa.gov/saturn/moons/dione/"),

    new Planet(0, "plain", "Rhea", "Rhea is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA09819/PIA09819~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Voyager 1 & 2, Cassini", "https://science.nasa.gov/saturn/moons/rhea/"),

    new Planet(0, "plain", "Titan", "Titan is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA06220/PIA06220~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Cassini, Huygens & Dragonfly", "https://science.nasa.gov/saturn/moons/titan/facts/"),

    new Planet(0, "plain", "Hyperion", "Hyperion is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA14583/PIA14583~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Cassini", "https://science.nasa.gov/saturn/moons/hyperion/"),

    new Planet(0, "plain", "Iapetus", "Iapetus is a moon of Saturn.", "<img src='https://images-assets.nasa.gov/image/PIA06166/PIA06166~orig.jpg' width='200px' height='200px'></img>", "9.5 AU (Moon of Saturn)", "N/A", "Cassini", "https://science.nasa.gov/saturn/moons/iapetus/"),

    new Planet(25.362, "plain", "Uranus", "Uranus is the seventh planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg' width='200px' height='200px'></img>", "19 AU from the Sun", "30,687 Days in a year", "Voyager 2", "https://science.nasa.gov/uranus/facts/"),

    new Planet(24.622, "blue", "Neptune", "Neptune is the eighth planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg' width='200px' height='200px'></img>", "30 AU from the Sun", "60,190 Days in a year", "Voyager 2", "https://science.nasa.gov/neptune/facts/"),

    new Planet(1.1883, "plain", "Pluto", "Pluto is the ninth planet from the Sun.", "<img src='https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg' width='200px' height='200px'></img>", "39 AU from the Sun", "90,560 Days in a year", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/facts/"),

    new Planet(0, "plain", "Charon", "Charon is the largest of the five known natural satellites of the dwarf planet Pluto.", "<img src='https://images-assets.nasa.gov/image/PIA19968/PIA19968~orig.jpg' width='200px' height='200px'></img>", "39 AU (Moon of Pluto)", "N/A", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/moons/charon/"),

    new Planet(0, "plain", "Styx", "Styx is a moon of Pluto.", "<img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Styx_%28moon%29.jpg' width='200px' height='200px'></img>", "39 AU (Moon of Pluto)", "N/A", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/moons/styx/"),

    new Planet(0, "plain", "Nix", "Nix is a moon of Pluto.", "<img src='https://images-assets.nasa.gov/image/PIA20287/PIA20287~orig.jpg' width='200px' height='200px'></img>", "39 AU (Moon of Pluto)", "N/A", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/moons/nix/"),

    new Planet(0, "plain", "Kerberos", "Kerberos is a moon of Pluto.", "<img src='https://images-assets.nasa.gov/image/PIA20034/PIA20034~orig.jpg' width='200px' height='200px'></img>", "39 AU (Moon of Pluto)", "N/A", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/moons/kerberos/"),

    new Planet(0, "plain", "Hydra", "Hydra is a moon of Pluto.", "<img src='https://images-assets.nasa.gov/image/PIA19711/PIA19711~orig.jpg' width='200px' height='200px'></img>", "39 AU (Moon of Pluto)", "N/A", "New Horizons", "https://science.nasa.gov/dwarf-planets/pluto/moons/hydra/"),

    new Planet(0, "plain", "Haumea", "Haumea is a dwarf planet located beyond Neptune's orbit.", "<img src='https://upload.wikimedia.org/wikipedia/commons/2/2b/Haumea_Hubble.png' width='200px' height='200px'></img>", "43 AU from the sun", "104,096 Days in a year", "Hubble & New Horizons", "https://science.nasa.gov/dwarf-planets/haumea/"),

    new Planet(0, "plain", "Makemake", "Makemake is a dwarf planet and perhaps the second largest Kuiper belt object.", "<img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Makemake_and_its_moon.jpg' width='200px' height='200px'></img>", "45.8 AU from the Sun", "111,401 Days in a year", "Hubble & New Horizons", "https://science.nasa.gov/dwarf-planets/makemake/"),
    
    new Planet(0, "plain", "Eris", "Eris is a dwarf planet in the scattered disc, a region beyond the Kuiper belt.", "<img src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Hubble_Dysnomia_orbit_overlay.jpg' width='200px' height='200px'></img>", "68 AU from the Sun", "203,444 Days in a year", "Samuel Oschin Telescope", "https://science.nasa.gov/dwarf-planets/eris/")
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
        outerDiv.className = "space-content";
        outerDiv.id = "space-content";
        outerDiv.style.flexDirection = "column";

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
        planetDetails.style.flexDirection = "column";
        planetDetails.style.width = "250px";
        planetDetails.style.height = "500px";
        planetDetails.style.borderRadius = "10px";
        planetDetails.style.marginBottom = "5%";
        planetDetails.style.paddingTop = "25px";
        planetDetails.style.flexShrink = "0";

        // appending the elements to the html document
        
        outerDiv.appendChild(planetDiv);
        outerDiv.appendChild(contentTitle);
        outerDiv.appendChild(contentDescription);
        outerDiv.appendChild(planetDetails);
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

    detailBox.style.display = "none";

    planetDiv.addEventListener("click", (event) => {
            
        if (detailBox.style.display === "none") {
            detailBox.style.display = "flex";
            console.log("planet clicked:", planet.name + " Showing details...");
    }
        else {
            detailBox.style.display = "none";
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

async function getAPITest() {
    let quoteList = await fetch('https://type.fit/api/quotes').then(response => response.json());
    console.log(quoteList)


    for (let i = 0; i < quoteList.length; i++) {
        console.log(quoteList[i].text);
    }

}

async function openAiApiTest() {
    let url = 'https://api.openai.com/v1/chat/completions';
    let apiKey = '';

    let data = {
        model: "gpt-3.5-turbo",  // Specify the model here

        messages: [
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": "hello\n"
                }
            ]
    }],

        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 64,  // Maximum number of tokens to generate
      };

    let options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    };
    let response = await fetch(url, options)
    console.log(response.json().toString());
   // .then(response => response.json())
    //.then(data => console.log(data));
    
}

openAiApiTest();



    
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
getAPITest();
});

// add a function to stop the user from highlighting text when they click and drag.