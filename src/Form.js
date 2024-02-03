import React, { useState, useRef } from "react";

function Form() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const previousPosition = useRef({ x: 0, y: 0 });

  const velocity = useRef({ x: 100, y: 100 });
  const yesBtn = useRef();

  const [isYes, setIsYes] = useState(true);

  const [isHovered, setHovered] = useState(false);

  const handleNoHover = (event) => {
    setIsYes(false);
    if (!isHovered) {
      setHovered(true);
    }

    const buttonWidth = 100;
    const buttonHeight = 50;

    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomDirectionX = Math.random() < 0.5 ? -1 : 1;
    const randomDirectionY = Math.random() < 0.5 ? -1 : 1;

    let newX = cursorX + (maxX / 2) * randomDirectionX; // Move farther away horizontally
    let newY = cursorY + (maxY / 2) * randomDirectionY; // Move farther away vertically

    // Ensure the button stays within the screen boundaries
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    previousPosition.current = position;

    setPosition({ x: newX, y: newY });

    // Momentum-based movement
    velocity.x += (newX - previousPosition.current.x) * 0.1;
    velocity.y += (newY - previousPosition.current.y) * 0.1;
  };

  return (
    <div className="h-screen bg-red-100 flex flex-col gap-y-4 items-center justify-center">
      <h1
        className="text-3xl text-center"
        style={{ fontFamily: "Cedarville Cursive" }}
      >
        Will You Be My{" "}
        <span className="font-bold text-red-500">Valentine</span>?
      </h1>
      {isYes ? (
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndiYmtqbnh5MHNta2dzOTYzaGh5NDByOHFqMDQ1cm5nZmFrNjhjaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/36vZ9fy5nK0HS/giphy.gif"
          alt=""
          className="w-[20rem] h-[15rem] object-cover"
        />
      ) : (
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXoxNzkyZ3NrZWpocnp6bDU1OGdxbGJsbnQ3Z2VqemduejlzZWE0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2iRO0O63KvuXS/giphy.gif"
          alt=""
          className="w-[20rem] h-[15rem] object-cover"
        />
      )}

      <div className="flex space-x-4">
        <button
          onMouseEnter={() => {
            setIsYes(true);
          }}
          ref={yesBtn}
          className="bg-red-400 hover:bg-pink-300 duration-150 text-white font-bold py-2 px-4 rounded"
        >
          Yes
        </button>
        <button
          className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
          onMouseEnter={handleNoHover}
          style={{
            position: isHovered ? "fixed" : "relative",
            top: position.y,
            left: position.x,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Form;
