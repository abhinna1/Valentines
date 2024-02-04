import { useEffect, useState } from "react";
import helpers from "./helpers";

const AcceptedPage = () => {
  const [line, setLine] = useState("");
  useEffect(() => {
    setLine(helpers.getPickupLine());
  }, [helpers.getPickupLine]);
  return (
    <div className="bg-red-100 flex flex-col gap-y-4 items-center justify-center w-screen h-screen">
    <h1
    className="text-3xl text-red-500 font-bold"
    style={{ fontFamily: "Cedarville Cursive" }}> Happy Valentines!</h1>
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNsano1dG9jZDR0aTM2NzRxcmFmeGNkNHB2NXppcXJzNWlvd3VwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13V2lGH2cUYgzC/giphy.gif"
        alt=""
        className="w-[20rem] h-[15rem] object-cover"
      />
      <h1 className="text-center font-extralight" style={{ fontFamily: "Cedarville Cursive" }}>
        {line}
      </h1>
    </div>
  );
};

export default AcceptedPage;
