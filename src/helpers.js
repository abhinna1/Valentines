import pickuplines from "./static/data/PickupLines.json";

function getPickupLine (){
    // Get a random pickup line from PickupLines.json file.
    const pickupLines = pickuplines.lines;
    let randomIndex = Math.floor(Math.random() * pickupLines.length);
    return pickupLines[randomIndex]
}


export default {
    getPickupLine
}