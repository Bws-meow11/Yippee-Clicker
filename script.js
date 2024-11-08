// script.js

let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;
let autoclickerCost = 50;
let autoclickers = 0; // Number of autoclickers

// DOM Elements
const pointsDisplay = document.getElementById('points');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const autoclickerButton = document.getElementById('autoclickerButton');
const autoclickerCostDisplay = document.getElementById('autoclickerCost');

// Function to handle clicking
clickButton.addEventListener('click', () => {
    points += pointsPerClick;
    pointsDisplay.textContent = points;
    checkUpgradeAvailability();
});

// Function to handle upgrade purchase
upgradeButton.addEventListener('click', () => {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerClick++;
        upgradeCost = Math.floor(upgradeCost * 1.5);  // Increase upgrade cost by 50%
        pointsDisplay.textContent = points;
        upgradeCostDisplay.textContent = upgradeCost;
    } else {
        alert("Not enough Yippee Points!");
    }
});

// Function to handle autoclicker purchase
autoclickerButton.addEventListener('click', () => {
    if (points >= autoclickerCost) {
        points -= autoclickerCost;
        autoclickers++;
        autoclickerCost = Math.floor(autoclickerCost * 1.5);  // Increase autoclicker cost by 50%
        pointsDisplay.textContent = points;
        autoclickerCostDisplay.textContent = autoclickerCost;
    } else {
        alert("Not enough Yippee Points!");
    }
});

// Function to automatically generate points over time
function startAutoclicker() {
    setInterval(() => {
        if (autoclickers > 0) {
            points += autoclickers; // Adds 1 point per second for each autoclicker
            pointsDisplay.textContent = points;
        }
    }, 1000); // Every second
}

// Function to check if upgrade or autoclicker is affordable
function checkUpgradeAvailability() {
    if (points >= upgradeCost) {
        upgradeButton.disabled = false;
    } else {
        upgradeButton.disabled = true;
    }

    if (points >= autoclickerCost) {
        autoclickerButton.disabled = false;
    } else {
        autoclickerButton.disabled = true;
    }
}

// Start autoclicker when the game starts
startAutoclicker();

// Initially check button availability
checkUpgradeAvailability();
