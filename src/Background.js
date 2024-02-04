import { useEffect } from "react";

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
const Background = ({accepted}) => {
  useEffect(() => {
    accepted?setInterval(createHeart, 200):<></>
  }, []);
  return <></>
};

export default Background;
