const players = [
    {"lastName":"Duncan", "team":"Spurs", "FGM":5, "FGA":10},
    {"lastName":"Parker", "team":"Spurs", "FGM":7, "FGA":18},
    {"lastName":"Ginobili", "team":"Spurs", "FGM":6, "FGA":11},
    {"lastName":"James", "team":"Heat", "FGM":10, "FGA":21},
    {"lastName":"Wade", "team":"Heat", "FGM":4, "FGA":12},
    {"lastName":"Bosh", "team":"Heat", "FGM":6, "FGA":14}
    ];

function heat(player) { return player.team === 'Heat'; }
function spurs(player) { return player.team === 'Spurs'; }
function shootingPercentage(player) { return player.FGM / player.FGA; }
function sum(curTotal, num) { return curTotal + num}
function average(arr) { return arr.reduce(sum, 0) / arr.length; }

console.log(average(players.filter(heat).map(shootingPercentage)).toFixed(2));
console.log(typeofaverage(players.filter(spurs).map(shootingPercentage)).toFixed(2));