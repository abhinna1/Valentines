import { useEffect } from "react";
import helpers from "./helpers";

const Background = ({accepted}) => {
  useEffect(() => {
    accepted?setInterval(helpers.createHeart, 200):<></>
  }, []);
  return <></>
};

export default Background;
