import pickuplines from "./static/data/PickupLines.json";

function getPickupLine() {
  // Get a random pickup line from PickupLines.json file.
  const pickupLines = pickuplines.lines;
  let randomIndex = Math.floor(Math.random() * pickupLines.length);
  return pickupLines[randomIndex];
}

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "https://pngimg.com/uploads/heart/heart_PNG51335.png";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 3 + "s ";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

export default {
  getPickupLine,
  createHeart
};
