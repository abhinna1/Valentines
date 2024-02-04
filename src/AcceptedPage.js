import { useEffect } from "react";
import helpers from "./helpers";

const AcceptedPage = () => {
  useEffect(() => {
    let line = helpers.getPickupLine();
  }, [helpers.getPickupLine]);
  return <></>;
};

export default AcceptedPage;
