let nameInput;
let submitButton;
let meaningText;

const nameMeanings = {
  "john": "God is gracious",
  "mary": "Wished-for child",
  "david": "Beloved",
  // Add more names and meanings here
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  nameInput = createInput();
  nameInput.position(width / 2 - 100, height / 2);

  submitButton = createButton("Submit");
  submitButton.position(nameInput.x + nameInput.width + 10, nameInput.y);
  submitButton.mousePressed(submitName);

  meaningText = createElement("p");
  meaningText.position(width / 2 - 100, height / 2 + 40);
  meaningText.style("color", "#ffffff");
  meaningText.style("font-size", "18px");
  meaningText.style("text-align", "center");
}

function draw() {
  background(0);
  // Add your p5.js drawing code here
}

function submitName() {
  const name = nameInput.value().toLowerCase();
  const meaning = nameMeanings[name];

  if (meaning) {
    meaningText.html(`The meaning of the name '${capitalizeFirstLetter(name)}' is: <br>${meaning}`);
  } else {
    meaningText.html(`Sorry, the meaning of the name '${capitalizeFirstLetter(name)}' could not be found.`);
  }

  nameInput.value("");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add your p5.js sketch code below
