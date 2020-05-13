const numQueen = 1;
const numDrones = 8;
const numWorkers = 5;
let waspsArray = [];
const totalWasps = numQueen + numWorkers + numDrones;

const queenDisplay = document.getElementById("Queen");
const droneDisplay = document.getElementById("Drone");
const workerDisplay = document.getElementById("Worker");

class Wasps {
  constructor(name, hp, damagePoints, id) {
    this.name = name;
    this.hp = hp;
    this.damagePoints = damagePoints;
    this.id = id;
  }

  takeHit() {
    this.hp = this.hp - this.damagePoints;
  }

  printWasps() {
    const print = `<p class="${this.id}">${this.name} HP: ${this.hp}</p>`;
    document.getElementById(this.id).innerHTML += print;
  }

  die() {
    this.hp = 0;
  }
}

const createWasps = () => {
  for (let index = 0; index < totalWasps; index++) {
    let newWasp;
    if (index < numQueen) {
      newWasp = new Wasps("queen", 80, 7, "Queen");
    } else if (index <= numDrones) {
      newWasp = new Wasps("drones", 60, 12, "Drone");
    } else if (index <= totalWasps) {
      newWasp = new Wasps("workers", 68, 10, "Worker");
    }
    waspsArray.push(newWasp);
  }
};

createWasps();

const updateHTML = () => {
  queenDisplay.innerHTML += "";
  workerDisplay.innerHTML += "";
  droneDisplay.innerHTML += "";
  waspsArray.forEach((wasp) => wasp.printWasps());
};

const endGame = () => {
  waspsArray.forEach((wasp) => wasp.die());
};

const attack = () => {
  const randomIndex = Math.floor(Math.random() * waspsArray.length);
  const randomWasp = waspsArray[randomIndex];
  randomWasp.takeHit();
  if (randomWasp.name === "Queen" && randomWasp.hp <= 0) {
    endGame();
    alert("You killed all wasps!");
  } else if (randomWasp.hp <= 0) {
    waspsArray.splice(randomIndex, 1);
  }
  updateHTML();
};

const newGame = () => {
  window.location.reload();
};

updateHTML();
