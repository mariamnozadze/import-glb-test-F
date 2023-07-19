function toggleVisibility() {
  var model1 = document.querySelector("#model1");
  model1.setAttribute("visible", !model1.getAttribute("visible"));
}

function showAFrame() {
  var startButton = document.getElementById("start-button");
  var aframeContainer = document.getElementById("aframe-container");

  startButton.style.display = "none";
  aframeContainer.style.display = "block";
}