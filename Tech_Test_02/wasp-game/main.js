// ## 1 x Queen ­
// * 80 Hit Points ­
// * Loses 7 hit points every time it is hit ­
// * All wasps die if the queen is killed

// ## 5 x Worker wasps ­
// * Each one starts with 68 hit points ­
// * Each one Loses 10 hit points each time it is hit

// ## 8 x Drone wasps ­
// * Each starts with 60 hit points ­
// * Each loses 12 hit points each time it is hit.

const numQueen = 1;
const numWorkers = 5;
const numDrones = 8;
const waspsArray = [];
const totalWasps = numQueen + numWorkers + numDrone;

const queenPrint = document.getElementById("queen");
const workersPrint = document.getElementById("workers");
const dronesPrint = document.getElementById("drones");

class Wasps


