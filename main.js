var planets = [
  ["Pluto",0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9]
];

var select = document.getElementById("planets");
planets.reverse().forEach(function(item) {
  var option = document.createElement("option");

  option.value = item[0];
  option.text = item[0];

  select.appendChild(option);
});

function calculateWeight(weight, planetName) {
  
  for (i = 0; i < planets.length; i++) {
    if (planets[i][0] === planetName) {
      var planetWeight = planets[i][1];

      return weight * planetWeight;
    }
  }
}

function handleClickEvent(e) {
  var userWeight = $("#user-weight").val();
  var planetName = $("#planets").val();
  var result = calculateWeight(userWeight, planetName);
  
  $("#output").text(
    " If you were on " + planetName + ", you would weigh " + result + "lbs!"
  );
}

$("#calculate-button").click(handleClickEvent);
