///////////////////////////////////
//         CAT VARIABLES         //
///////////////////////////////////
setInterval(changeCoinImage, 1000);
setInterval(checkAchievements, 1000);
setInterval(getSelected, 1000);
setInterval(poplitSelectList, 1000);
setInterval(wallpaper, 1000);
setInterval(format, 1);
setInterval(update, 1);
setInterval(timer, 1000);
window.addEventListener('load', changeCoinImage);
window.addEventListener('load', checkScreenSize);
window.addEventListener('load', timer);
window.addEventListener('load', startgame);
window.addEventListener('resize', checkScreenSize);
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("poplitSelectStyle");
  select.addEventListener("change", getSelected);
});
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("backSelectStyle");
  select.addEventListener("change", getSelected);
});
function startgame() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("store1").style.display = "block";
  document.getElementById("show").style.display = "none";
  setInterval(idle, 1);
}
function loadshop() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("show").style.display = "none";
}






var time = 3600000; // time variable - can be edited

setInterval(function () {
  allow += 1;
  console.log("allow is now ${allow}");
}, time);

// <a rel="stylesheet" id="options" href="options.html">


//CLICKING
var num = 1;
var count = 0;
var clicks = 0;
var numbers = 150;


//AUTO
var insurance;
var normalIns = 0;
var farmerIns = 0;
var minerIns = 0;
var workerIns = 0;
var bankerIns = 0;
var alchemistIns = 0;
var astronautIns = 0;
var priestIns = 0;
var mageIns = 0;
var gatekeeperIns = 0;
var antiIns = 0;
var luckyIns = 0;
var illusionistIns = 0;
var coderIns = 0;
var mutiIns = 0;
var spawnIns = 0;
var cloneIns = 0;
var heros = 0;

//ADD-AUTO
var addnormalIns = 0.0005;
var addfarmerIns = 0.005;
var addminerIns = 0.05;
var addworkerIns = 50;
var addbankerIns = 200;
var addalchemistIns = 2500;
var addastronautIns = 250000;
var addpriestIns = 5000000000;
var addmageIns = 5000000000000;
var addgatekeeperIns = 1500000000000000;
var addantiIns = 1500000000000000000;
var addluckyIns = 1150000000000000000000;
var addillusionistIns = 1150000000000000000000000;
var addcoderIns = 1115000000000000000000000000;
var addmutiIns = 1111500000000000000000000000000;
var addspawnIns = 1111150000000000000000000000000000;
var addcloneIns = 11111150000000000000000000000000000000000;

//ALERTS
var txt;
var text;
var texts;
var texting;

//STORE
var normalcats = 0;
var farmercats = 0;
var workercats = 0;
var bankercats = 0;
var minercats = 0;
var alchemistcats = 0;
var astronautcats = 0;
var catpriest = 0;
var catmage = 0;
var gatekeepercats = 0;
var anticats = 0;
var luckycats = 0;
var catillusionist = 0;
var catcoders = 0;
var catmultitaskers = 0;
var catspawn = 0;
var clone = 0;
var cost1 = 15;                                                          // fifteen
var cost2 = 100;                                                         // one hundred
var cost3 = 1000;                                                        // one thousand
var cost4 = 500000;                                                      // five hundred thousand
var cost5 = 1000000;                                                     // 1 million
var cost6 = 1000000000;                                                  // 1 billion
var cost7 = 1000000000000;                                               // 1 trillion
var cost8 = 1000000000000000;                                            // 1 quadrillion
var cost9 = 1000000000000000000;                                         // 1 quintillion
var cost10 = 1000000000000000000000;                                     // 1 sextillion
var cost11 = 1000000000000000000000000;                                  // 1 septillion
var cost12 = 1000000000000000000000000000;                               // 1 octillion
var cost13 = 1000000000000000000000000000000;                            // 1 nonillion
var cost14 = 1000000000000000000000000000000000;                         // 1 decillion
var cost15 = 1000000000000000000000000000000000000;                      // 1 undecillion
var cost16 = 1000000000000000000000000000000000000000;                   // 1 duodecillion
var cost17 = 1000000000000000000000000000000000000000000;                // 1 tredecillion
var clickCost = 10000;
var insCost = 1000000;
var resCost = 10000;

//SAVS
var ex = 0;
var ex2 = 1;
var ex3 = 5;
var save;

//GOLDEN CATS
var goldencats = 0;
var purch = 0;
var allow = 1;


//ACHS
var poplit;
var poplits = {
  normal: {
    level: ["I"],
  },

  raspberry: {
    level: ["II"],
  },

  orange: {
    level: ["III"],
  },

  banana: {
    level: ["IV"],
  },

  lime: {
    level: ["V"],
  },

  blueberry: {
    level: ["VI"],
  },

  grape: {
    level: ["VII"],
  },

  pomegranate: {
    level: ["VIII"],
  },

  maple: {
    level: ["IX"],
  },

  mango: {
    level: ["X"],
  },

  tea: {
    level: ["XI"],
  },

  coconut: {
    level: ["XII"],
  },

  peppermint: {
    level: ["XIII"],
  },

  dragonfruit: {
    level: ["XIV"],
  },
}

const suffixes = [
  '',
  'K',
  ' million',
  ' billion',
  ' trillion',
  ' quadrillion',
  ' quintillion',
  ' sextillion',
  ' septillion',
  ' octillion',
  ' nonillion',
  ' decillion',
  ' undecillion',
  ' duodecillion',
  ' tredecillion',
  ' quattuordecillion',
  ' quindecillion',
  ' sexdecillion',
  ' septendecillion',
  ' octodecillion',
  ' novemdecillion',
  ' vigintillion',
  ' unvigintillion',
  ' duovigintillion',
  ' trevigintillion',
  ' quattuorvigintillion',
  ' quinvigintillion',
  ' sexvigintillion',
  ' septenvigintillion',
  ' octovigintillion',
  ' novemvigintillion',
  ' trigintillion',
  ' untrigintillion',
  ' duotrigintillion',
  ' trestrigintillion',
  ' quarttourtrigintillion',
  ' quinquatrigintillion',
  ' sestrigintillion',
  ' septemtrigintillion',
  ' octotrigintillion',
  ' novemtrigintillion',
  ' quadragintillion',
  ' quinquagintillion',
  ' sexagintillion',
  ' septuagintillion',
  ' octogintillion',
  ' nonagintillion',
  ' centillion',
  ' uncentillion',
  ' duocentillion',
  ' trecentillion',
  ' quattuorcentillion',
  ' quincentillion',
  ' sexcentillion',
  ' septencentillion',
  ' octocentillion',
  ' novencentillion',
  ' decicentillion',
  ' undecicentillion',
  ' duodecicentillion',
  ' tredecicentillion',
  ' quattuordecicentillion',
  ' quindecicentillion',
  ' sexdecicentillion',
  ' septendecicentillion',
  ' octodecicentillion',
  ' novemdecicentillion',
  ' viginticentillion',
  ' unviginticentillion',
  ' duoviginticentillion',
  ' treviginticentillion',
  ' quattuorviginticentillion',
  ' quinviginticentillion',
  ' sexviginticentillion',
  ' septenviginticentillion',
  ' octoviginticentillion',
  ' novemviginticentillion',
  ' trigintacentillion',
  ' untrigintacentillion',
  ' duotrigintacentillion',
  ' tretrigintacentillion',
  ' quattuortrigintacentillion',
  ' quintrigintacentillion',
  ' sextrigintacentillion',
  ' septentrigintacentillion',
  ' octotrigintacentillion',
  ' novemtrigintacentillion',
  ' quadragintacentillion',
  ' quinquagintacentillion',
  ' sexagintacentillion',
  ' septuagintacentillion',
  ' octogintacentillion',
  ' nonagintacentillion',
  ' ducentillion',
  ' unducentillion',
  ' duoducentillion',
  ' treducentillion',
  ' quattuorducentillion',
  ' quinducentillion',
  ' sexducentillion',
  ' septenducentillion',
  ' octoducentillion',
  ' novenducentillion',
  ' decicentiquinquagintillion',
  ' undecicentiquinquagintillion',
  ' duodecicentiquinquagintillion',
  ' tredecicentiquinquagintillion',
  ' quattuordecicentiquinquagintillion',
  ' quindecicentiquinquagintillion',
  ' sexdecicentiquinquagintillion',
  ' septendecicentiquinquagintillion',
  ' octodecicentiquinquagintillion',
  ' novemdecicentiquinquagintillion',
  ' viginticentiquinquagintillion',
  ' unviginticentiquinquagintillion',
  ' duoviginticentiquinquagintillion',
  ' treviginticentiquinquagintillion',
  ' quattuorviginticentiquinquagintillion',
  ' quinviginticentiquinquagintillion',
  ' sexviginticentiquinquagintillion',
  ' septenviginticentiquinquagintillion',
  ' octoviginticentiquinquagintillion',
  ' novemviginticentiquinquagintillion',
  ' trigintaducentillion',
  ' untrigintaducentillion',
  ' duotrigintaducentillion',
  ' tretrigintaducentillion',
  ' quattuortrigintaducentillion',
  ' quintrigintaducentillion',
  ' sextrigintaducentillion',
  ' septentrigintaducentillion',
  ' octotrigintaducentillion',
  ' novemtrigintaducentillion',
  ' quadragintaducentillion',
  ' quinquagintaducentillion',
  ' sexagintaducentillion',
  ' septuagintaducentillion',
  ' octogintaducentillion',
  ' nonagintaducentillion',
  ' nongentillion',
  ' unnongentillion',
  ' duonongentillion',
  ' trenongentillion',
  ' quattuornongentillion',
  ' quinnongentillion',
  ' sexnongentillion',
  ' septennongentillion',
  ' octonongentillion',
  ' novemnongentillion',
  ' decinongentillion',
  ' undecinongentillion',
  ' duodecinongentillion',
  ' tredecinongentillion',
  ' quattuordecinongentillion',
  ' quindecinongentillion',
  ' sexdecinongentillion',
  ' septendecinongentillion',
  ' octodecinongentillion',
  ' novemdecinongentillion',
  ' vigintinongentillion',
  ' unvigintinongentillion',
  ' duovigintinongentillion',
  ' trevigintinongentillion',
  ' quattuorvigintinongentillion',
  ' quinvigintinongentillion',
  ' sexvigintinongentillion',
  ' septenvigintinongentillion',
  ' octovigintinongentillion',
  ' novemvigintinongentillion',
  ' trigintanongentillion',
  ' untrigintanongentillion',
  ' duotrigintanongentillion',
  ' tretrigintanongentillion',
  ' quattuortrigintanongentillion',
  ' quintrigintanongentillion',
  ' sextrigintanongentillion',
  ' septentrigintanongentillion',
  ' octotrigintanongentillion',
  ' novemtrigintanongentillion',
  ' quadragintanongentillion',
  ' quinquagintanongentillion',
  ' sexagintanongentillion',
  ' septuagintanongentillion',
  ' octogintanongentillion',
  ' nonagintanongentillion',
  ' millinillion',
  ' unmillinillion',
  ' duomillinillion',
  ' tremillinillion',
  ' quattuormillinillion',
  ' quinmillinillion',
  ' sexmillinillion',
  ' septenmillinillion',
  ' octomillinillion',
  ' novemmillinillion',
  ' decimillinillion',
  ' undecimillinillion',
  ' duodecimillinillion',
  ' tredecimillinillion',
  ' quattuordecimillinillion',
  ' quindecimillinillion',
  ' sexdecimillinillion',
  ' septendecimillinillion',
  ' octodecimillinillion',
  ' novemdecimillinillion',
  ' vigintimillinillion',
  ' unvigintimillinillion',
  ' duovigintimillinillion',
  ' trevigintimillinillion',
  ' quattuorvigintimillinillion',
  ' quinvigintimillinillion',
  ' sexvigintimillinillion',
  ' septenvigintimillinillion',
  ' octovigintimillinillion',
  ' novemvigintimillinillion',
  ' trigintamillinillion',
  ' untrigintamillinillion',
  ' duotrigintamillinillion',
  ' tretrigintamillinillion',
  ' quattuortrigintamillinillion',
  ' quintrigintamillinillion',
  ' sextrigintamillinillion',
  ' septentrigintamillinillion',
  ' octotrigintamillinillion',
  ' novemtrigintamillinillion',
  ' quadragintamillinillion',
  ' quinquagintamillinillion',
  ' sexagintamillinillion',
  ' septuagintamillinillion',
  ' octogintamillinillion',
  ' nonagintamillinillion',
  ' centimillinillion',
  ' uncentimillinillion',
  ' duocentimillinillion',
  ' trecentimillinillion',
  ' quattuorcentimillinillion',
  ' quincentimillinillion',
  ' sexcentimillinillion',
  ' septencentimillinillion',
  ' octocentimillinillion',
  ' novencentimillinillion',
  ' decicentimillinillion',
  ' undecicentimillinillion',
  ' duodecicentimillinillion',
  ' tredecicentimillinillion',
  ' quattuordecicentimillinillion',
  ' quindecicentimillinillion',
  ' sexdecicentimillinillion',
  ' septendecicentimillinillion',
  ' octodecicentimillinillion',
  ' novemdecicentimillinillion',
  ' viginticentimillinillion',
  ' unviginticentimillinillion',
  ' duoviginticentimillinillion',
  ' treviginticentimillinillion',
  ' quattuorviginticentimillinillion',
  ' quinviginticentimillinillion',
  ' sexviginticentimillinillion',
  ' septenviginticentimillinillion',
  ' octoviginticentimillinillion',
  ' novemviginticentimillinillion',
  ' trigintacentimillinillion',
  ' untrigintacentimillinillion',
  ' duotrigintacentimillinillion',
  ' tretrigintacentimillinillion',
  ' quattuortrigintacentimillinillion',
  ' quintrigintacentimillinillion',
  ' sextrigintacentimillinillion',
  ' septentrigintacentimillinillion',
  ' octotrigintacentimillinillion',
  ' novemtrigintacentimillinillion',
  ' quadragintacentimillinillion',
  ' quinquagintacentimillinillion',
  ' sexagintacentimillinillion',
  ' septuagintacentimillinillion',
  ' octogintacentimillinillion',
  ' nonagintacentimillinillion',
  ' ducentimillinillion',
  ' unducentimillinillion',
  ' duoducentimillinillion',
  ' treducentimillinillion',
  ' quattuorducentimillinillion',
  ' quinducentimillinillion',
  ' sexducentimillinillion',
  ' septenducentimillinillion',
  ' octoducentimillinillion',
  ' novenducentimillinillion',
  ' centicentimillinillion',
  ' uncenticentimillinillion',
  ' duocenticentimillinillion',
  ' trecenticentimillinillion',
  ' quattuorcenticentimillinillion',
  ' quincenticentimillinillion',
  ' sexcenticentimillinillion',
  ' septencenticentimillinillion',
  ' octocenticentimillinillion',
  ' novencenticentimillinillion',
  ' decicenticentimillinillion',
  ' undecicenticentimillinillion',
  ' duodecicenticentimillinillion',
  ' tredecicenticentimillinillion',
  ' quattuordecicenticentimillinillion',
  ' quindecicenticentimillinillion',
  ' sexdecicenticentimillinillion',
  ' septendecicenticentimillinillion',
  ' octodecicenticentimillinillion',
  ' novemdecicenticentimillinillion',
  ' viginticenticentimillinillion',
  ' unviginticenticentimillinillion',
  ' duoviginticenticentimillinillion',
  ' treviginticenticentimillinillion',
  ' quattuorviginticenticentimillinillion',
  ' quinviginticenticentimillinillion',
  ' sexviginticenticentimillinillion',
  ' septenviginticenticentimillinillion',
  ' octoviginticenticentimillinillion',
  ' novemviginticenticentimillinillion',
  ' trigintaducenticentimillinillion',
  ' untrigintaducenticentimillinillion',
  ' duotrigintaducenticentimillinillion',
  ' tretrigintaducenticentimillinillion',
  ' quattuortrigintaducenticentimillinillion',
  ' quintrigintaducenticentimillinillion',
  ' sextrigintaducenticentimillinillion',
  ' septentrigintaducenticentimillinillion',
  ' octotrigintaducenticentimillinillion',
  ' novemtrigintaducenticentimillinillion',
  ' quadragintaducenticentimillinillion',
  ' quinquagintaducenticentimillinillion',
  ' sexagintaducenticentimillinillion',
  ' septuagintaducenticentimillinillion',
  ' octogintaducenticentimillinillion',
  ' nonagintaducenticentimillinillion',
  ' nongenticentimillinillion',
  ' unnongenticentimillinillion',
  ' duonongenticentimillinillion',
  ' trenongenticentimillinillion',
  ' quattuornongenticentimillinillion',
  ' quinnongenticentimillinillion',
  ' sexnongenticentimillinillion',
  ' septennongenticentimillinillion',
  ' octonongenticentimillinillion',
  ' novemnongenticentimillinillion',
  ' decinongenticentimillinillion',
  ' undecinongenticentimillinillion',
  ' duodecinongenticentimillinillion',
  ' tredecinongenticentimillinillion',
  ' quattuordecinongenticentimillinillion',
  ' quindecinongenticentimillinillion',
  ' sexdecinongenticentimillinillion',
  ' septendecinongenticentimillinillion',
  ' octodecinongenticentimillinillion',
  ' novemdecinongenticentimillinillion',
  ' vigintinongenticentimillinillion',
  ' unvigintinongenticentimillinillion',
  ' duovigintinongenticentimillinillion',
  ' trevigintinongenticentimillinillion',
  ' quattuorvigintinongenticentimillinillion',
  ' quinvigintinongenticentimillinillion',
  ' sexvigintinongenticentimillinillion',
  ' septenvigintinongenticentimillinillion',
  ' octovigintinongenticentimillinillion',
  ' novemvigintinongenticentimillinillion',
  ' trigintanongenticentimillinillion',
  ' untrigintanongenticentimillinillion',
  ' duotrigintanongenticentimillinillion',
  ' tretrigintanongenticentimillinillion',
  ' quattuortrigintanongenticentimillinillion',
  ' quintrigintanongenticentimillinillion',
  ' sextrigintanongenticentimillinillion',
  ' septentrigintanongenticentimillinillion',
  ' octotrigintanongenticentimillinillion',
  ' novemtrigintanongenticentimillinillion',
  ' quadragintanongenticentimillinillion',
  ' quinquagintanongenticentimillinillion',
  ' sexagintanongenticentimillinillion',
  ' septuagintanongenticentimillinillion',
  ' octogintanongenticentimillinillion',
  ' nonagintanongenticentimillinillion',
  ' millinongentillion',
  ' unmillinongentillion',
  ' duomillinongentillion',
  ' tremillinongentillion',
  ' quattuormillinongentillion',
  ' quinmillinongentillion',
  ' sexmillinongentillion',
  ' septenmillinongentillion',
  ' octomillinongentillion',
  ' novemmillinongentillion',
  ' decimillinongentillion',
  ' undecimillinongentillion',
  ' duodecimillinongentillion',
  ' tredecimillinongentillion',
  ' quattuordecimillinongentillion',
  ' quindecimillinongentillion',
  ' sexdecimillinongentillion',
  ' septendecimillinongentillion',
  ' octodecimillinongentillion',
  ' novemdecimillinongentillion',
  ' vigintimillinongentillion',
  ' unvigintimillinongentillion',
  ' duovigintimillinongentillion',
  ' Catstack'
]; //Number count = 402



///////////////////////////////////
//        FORMAT AND ADS         //
///////////////////////////////////
function hideshop() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("show").style.display = "flex";
}
function showAdd() {
  if (allow > 0) {
    const ads = [ad1, ad2, ad3];
    const selectedAd = ads[Math.floor(Math.random() * ads.length)];
    selectedAd();
    purch = purch + 1;
    allow = allow - 1;
    document.getElementById("shop").style.display = "none";
    setTimeout(() => {
      canRun = true;
    }, 5000); // the cooldown time is set to 5000ms (5 seconds)
  }
  else {
    alert("You are out of ad tokens, get more by redeeming them through codes, or waiting 24 hours and you will get one.")
  }
}


function ad1() {
  document.getElementById("game").style.display = "none";
  document.getElementById("ad1").style.display = "block";
  document.getElementById("timeleft1").style.display = "flex";
  let timeLeft = 29; // 60 seconds
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("exe1").style.display = "flex";
      document.getElementById("timeleft1").style.display = "none";
      timeleft1.innerHTML = "30s";
    } else {
      let seconds = Math.floor(timeLeft);
      timeleft1.innerHTML = " " + seconds + "s";
      timeLeft -= 1;
    }
  }, 1000); // interval set to 1000ms or 1 second
}

function ad2() {
  document.getElementById("game").style.display = "none";
  document.getElementById("ad2").style.display = "block";
  document.getElementById("timeleft2").style.display = "flex";
  let timeLeft = 29; // 60 seconds
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("exe2").style.display = "flex";
      document.getElementById("timeleft2").style.display = "none";
      timeleft2.innerHTML = "30s";
    } else {
      let seconds = Math.floor(timeLeft);
      timeleft2.innerHTML = " " + seconds + "s";
      timeLeft -= 1;
    }
  }, 1000); // interval set to 1000ms or 1 second
}

function ad3() {
  document.getElementById("game").style.display = "none";
  document.getElementById("ad3").style.display = "block";
  document.getElementById("timeleft3").style.display = "flex";
  let timeLeft = 29; // 60 seconds
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("exe3").style.display = "flex";
      document.getElementById("timeleft3").style.display = "none";
      timeleft3.innerHTML = "30s";
    } else {
      let seconds = Math.floor(timeLeft);
      timeleft3.innerHTML = " " + seconds + "s";
      timeLeft -= 1;
    }
  }, 1000); // interval set to 1000ms or 1 second
}

function exe() {
  goldencats = goldencats + 1;
  document.getElementById("ad1").style.display = "none";
  document.getElementById("timeleft1").style.display = "none";
  document.getElementById("exe1").style.display = "none";
  document.getElementById("ad2").style.display = "none";
  document.getElementById("timeleft2").style.display = "none";
  document.getElementById("exe2").style.display = "none";
  document.getElementById("ad3").style.display = "none";
  document.getElementById("timeleft3").style.display = "none";
  document.getElementById("exe3").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("show").style.display = "flex";
}




function timer() {
  const countdownDate = new Date('October 31, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("shoptime").innerHTML = `(Ends In: ${days}:${hours}:${minutes}:${seconds})`;
}

// Call the function every second



function format() {
  if (count < 1000) {
    let roundCount = Math.round(count);
    printerName.innerHTML = "You have $" + roundCount;
    document.title = roundCount + " Cats - Catstack"; // Set the title based on the current count
  } else {
    let suffixIndex = Math.floor(Math.log10(count) / 3);
    let suffix = suffixes[suffixIndex];
    let displayCount = count / Math.pow(10, suffixIndex * 3);
    if (displayCount >= 10) {
      displayCount = Math.floor(displayCount);
    } else {
      displayCount = displayCount.toFixed(1);
    }
    printerName.innerHTML = "You have $" + displayCount + suffix;
    document.title = displayCount + suffix + " Cats - Catstack"; // Set the title based on the current count
  }
}

function update() {
  goldtext.innerHTML = goldencats;
  adsleft.innerHTML = allow;
  normalcat.innerHTML = " Cats (" + normalcats + ")";
  if (farmercats > 0) {
    document.getElementById("store2").style.display = "block";
    document.getElementById("store3").style.display = "block";
  }
  farmercat.innerHTML = " Farmer Cats (" + farmercats + ")";
  if (minercats > 0) {
    document.getElementById("store3").style.display = "block";
    document.getElementById("store4").style.display = "block";
  }
  minercat.innerHTML = " Miner Cats (" + minercats + ")";
  if (workercats > 0) {
    document.getElementById("store4").style.display = "block";
    document.getElementById("store5").style.display = "block";
  }
  workercat.innerHTML = " Worker Cats (" + workercats + ")";
  if (bankercats > 0) {
    document.getElementById("store5").style.display = "block";
    document.getElementById("store6").style.display = "block";
  }
  bankercat.innerHTML = " Banker Cats (" + bankercats + ")";
  if (alchemistcats > 0) {
    document.getElementById("store6").style.display = "block";
    document.getElementById("store6").style.display = "block";
  }
  alchemistcat.innerHTML = " Alchemist Cats (" + alchemistcats + ")";
}

///////////////////////////////////
//         PRINTER  AUTO         //
///////////////////////////////////

function idle(numbers = 1) {
  count += normalIns;
  count += farmerIns;
  count += minerIns;
  count += workerIns;
  count += bankerIns;
  count += alchemistIns;
  count += astronautIns;
  count += priestIns;
  count += mageIns;
  count += gatekeeperIns;
  count += antiIns;
  count += luckyIns;
  count += illusionistIns;
  count += coderIns;
  count += mutiIns;
  count += spawnIns;
  count += cloneIns;
  let displayCount = count;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (count >= limit) {
      displayCount = (count / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  printerName.innerHTML = "You have $" + displayCount;
  format();
}



///////////////////////////////////
///          BUY CATS            //
///////////////////////////////////

//normalcat,farmercat,workercat,bankercat,alchemistcat,astronautcat,priestcat,magecat,gatekeepercat,inticat,luckycat,illusionistcat,codercat,mulitaskercat,catspawn,clone
//////////////////     BASIC CAT     ////////////////////
function normalcatbuy() {
  if (count < cost1) { }
  if (count >= cost1) {
    count -= cost1;
    normalIns = normalIns + addnormalIns;
    normalcats = normalcats + 1;
    cost1 = Math.round(cost1 * 1.2);
    console.log(cost1);
    document.getElementById("store2").style.display = "block";
    normalcat.innerHTML = " Cats (" + normalcats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost1 = cost1;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost1 >= limit) {
        displayCost1 = (cost1 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rack.innerHTML = " $" + displayCost1;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}
//////////////////     FARMER CAT     ///////////////////  
function farmercatbuy() {
  if (count < cost2) { }
  if (count >= cost2) {
    count -= cost2;
    farmerIns = farmerIns + addfarmerIns;
    farmercats = farmercats + 1;
    cost2 = Math.round(cost2 * 1.2);
    console.log(cost2);
    document.getElementById("store3").style.display = "block";
    farmercat.innerHTML = " Farmer Cats (" + farmercats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost2 = cost2;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost2 >= limit) {
        displayCost2 = (cost2 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rackTwo.innerHTML = " $" + displayCost2;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}
//////////////////     MINER CAT   /////////////////////
function minercatbuy() {
  if (count < cost3) { }
  if (count >= cost3) {
    count -= cost3;
    minerIns = minerIns + addminerIns;
    minercats = minercats + 1;
    cost3 = Math.round(cost3 * 1.2);
    console.log(cost3);
    document.getElementById("store4").style.display = "block";
    minercat.innerHTML = " Miner Cats (" + minercats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost3 = cost3;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost3 >= limit) {
        displayCost3 = (cost3 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rackThree.innerHTML = " $" + displayCost3;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}

//////////////////     WORKER CAT   /////////////////////
function workercatbuy() {
  if (count < cost4) { }
  if (count >= cost4) {
    count -= cost4;
    workerIns = workerIns + addworkerIns;
    workercats = workercats + 1;
    cost4 = Math.round(cost4 * 1.2);
    console.log(cost4);
    document.getElementById("store5").style.display = "block";
    workercat.innerHTML = " Worker Cats (" + workercats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost4 = cost4;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost4 >= limit) {
        displayCost4 = (cost4 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rackFour.innerHTML = " $" + displayCost4;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}
//////////////////     BANKER CAT   /////////////////////
function bankercatbuy() {
  if (count < cost5) { }
  if (count >= cost5) {
    count -= cost5;
    bankerIns = bankerIns + addbankerIns;
    bankercats = bankercats + 1;
    cost5 = Math.round(cost5 * 1.2);
    console.log(cost5)
    document.getElementById("store6").style.display = "block";
    bankercat.innerHTML = " Banker Cats (" + bankercats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost5 = cost5;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost5 >= limit) {
        displayCost5 = (cost5 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rackFive.innerHTML = " $" + displayCost5;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}
//////////////////     ALCHEMIST CAT   //////////////////
function alchemistcatbuy() {
  if (count < cost6) { }
  if (count >= cost6) {
    count -= cost6;
    alchemistIns = alchemistIns + addalchemistIns;
    alchemistcats = alchemistcats + 1;
    cost6 = Math.round(cost6 * 1.2);
    console.log(cost6)
    document.getElementById("lab").style.display = "block";
    alchemistcat.innerHTML = " Alchemist Cats (" + alchemistcats + ")";
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayCost6 = cost6;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (cost6 >= limit) {
        displayCost6 = (cost6 / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    rackSix.innerHTML = " $" + displayCost6;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
    format();
  }
}
//////////////////     ASTRONAUT CAT   //////////////////
function astronautcatbuy(){
  if (count<cost7){}
  if (count>=cost7) {
    count-=cost7;
    astronautIns = astronautIns + addastronautIns;
    astronautcats = astronautcats + 1;
    cost7 = Math.round(cost7 * 1.2);
    console.log(cost7)
    astronautcat.innerHTML = "Astronaut Cats (" + astronautcats + ")";
     //count insurance
      let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (count >= limit) {
      displayCount = (count / limit).toFixed(1) + suffixes[i];
      break;
    } }
     //cost insurance
  let displayCost7 = cost7;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (cost7 >= limit) {
      displayCost7 = (cost7 / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  rackSeven.innerHTML = " $" + displayCost7;
  printerName.innerHTML = "You have $"+ displayCount;
  tit.innerHTML = displayCount + " Cats - Catstack";
  format();
    }
  }
//////////////////     PREIST CAT   /////////////////////
//////////////////     MAGE CAT   ///////////////////////
//////////////////     GATEKEEPER CAT   /////////////////
//////////////////     AINT CAT   ///////////////////////
//////////////////     LUCKY CAT   //////////////////////
//////////////////     ILLUSIONIST CAT   ////////////////
//////////////////     CODER CAT   //////////////////////
//////////////////     MULTITASKER CAT   ////////////////
//////////////////     SPAWN CAT   //////////////////////
//////////////////     CLONE   //////////////////////////
//////////////////     SPECIAL FEAT   ///////////////////      
function dev() {
  count *= cost1;
}



//////////////////////////////////////////
///           DATA AND SAVES            //
//////////////////////////////////////////
function checkScreenSize() {
  var screenSize = window.innerWidth;

  if (screenSize > 5010) {
    document.getElementById('game').style.display = 'none';
    document.getElementById('sizeCom').style.display = 'block';
    document.getElementById('sizeCom').style.color = 'red';
    size.innerHTML = screenSize + "px ";
  } else {
    document.getElementById('sizeCom').style.display = 'none';
  }
}
function resetGame() {
  var confirmation = prompt("Are you sure you want to reset the game? Type 'yes' to confirm.");

  if (confirmation.toLowerCase() === "yes") {
    num = 1;
    goldencats = 0;
    allow = 1;
    count = 0;
    clicks = 0;
    numbers = 150;
    insurance = undefined;
    normalIns = 0;
    farmerIns = 0;
    minerIns = 0;
    workerIns = 0;
    bankerIns = 0;
    alchemistIns = 0;
    astronautIns = 0;
    priestIns = 0;
    mageIns = 0;
    gatekeeperIns = 0;
    antiIns = 0;
    luckyIns = 0;
    illusionistIns = 0;
    coderIns = 0;
    mutiIns = 0;
    spawnIns = 0;
    cloneIns = 0;
    addnormalIns = 0.0005;
    addfarmerIns = 0.005;
    addminerIns = 0.05;
    addworkerIns = 50;
    addbankerIns = 200;
    addalchemistIns = 2500;
    addastronautIns = 250000;
    addpriestIns = 5000000000;
    addmageIns = 1;
    addgatekeeperIns = 1;
    addantiIns = 1;
    addluckyIns = 1;
    addillusionistIns = 1;
    addcoderIns = 1;
    addmutiIns = 1;
    addspawnIns = 1;
    addcloneIns = 1;
    txt = undefined;
    text = undefined;
    texts = undefined;
    texting = undefined;
    normalcats = 0;
    farmercats = 0;
    workercats = 0;
    bankercats = 0;
    minercats = 0;
    alchemistcats = 0;
    astronautcats = 0;
    catpriest = 0;
    catmage = 0;
    gatekeepercats = 0;
    anticats = 0;
    luckycats = 0;
    catillusionist = 0;
    catcoders = 0;
    catmultitaskers = 0;
    catspawn = 0;
    clone = 0;
    cost1 = 15;
    cost2 = 100;
    cost3 = 1000;
    cost4 = 500000;
    cost5 = 1000000;
    cost6 = 1000000000;
    cost7 = 1000000000000;
    cost8 = 1000000000000000;
    cost9 = 1000000000000000000;
    cost10 = 1000000000000000000000;
    cost11 = 1000000000000000000000000;
    cost12 = 1000000000000000000000000000;
    cost13 = 1000000000000000000000000000000;
    cost14 = 1000000000000000000000000000000000;
    cost15 = 1000000000000000000000000000000000000;
    cost16 = 1000000000000000000000000000000000000000;
    cost17 = 1000000000000000000000000000000000000000000;
    heros = 0;
    usedSophie = false;
    usedDev = false;
    console.log("Game successfully reset!");
    location.reload();
  } else {
    console.log("Game reset cancelled.");
  }
}




window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    num = savedData.num || 1;
    allow = savedData.allow || 0;
    count = savedData.count || 0;
    clicks = savedData.clicks || 0;
    numbers = savedData.numbers || 150;
    normalIns = savedData.normalIns || 0;
    farmerIns = savedData.farmerIns || 0;
    minerIns = savedData.minerIns || 0;
    workerIns = savedData.workerIns || 0;
    bankerIns = savedData.bankerIns || 0;
    alchemistIns = savedData.alchemistIns || 0;
    astronautIns = savedData.astronautIns || 0;
    priestIns = savedData.priestIns || 0;
    mageIns = savedData.mageIns || 0;
    gatekeeperIns = savedData.gatekeeperIns || 0;
    antiIns = savedData.antiIns || 0;
    luckyIns = savedData.luckyIns || 0;
    illusionistIns = savedData.illusionistIns || 0;
    coderIns = savedData.coderIns || 0;
    mutiIns = savedData.mutiIns || 0;
    spawnIns = savedData.spawnIns || 0;
    cloneIns = savedData.cloneIns || 0;
    goldencats = savedData.goldencats || 0;
    normalcats = savedData.normalcats || 0;
    farmercats = savedData.farmercats || 0;
    workercats = savedData.workercats || 0;
    bankercats = savedData.bankercats || 0;
    minercats = savedData.minercats || 0;
    alchemistcats = savedData.alchemistcats || 0;
    astronautcats = savedData.astronautcats || 0;
    catpriest = savedData.catpriest || 0;
    catmage = savedData.catmage || 0;
    gatekeepercats = savedData.gatekeepercats || 0;
    anticats = savedData.anticats || 0;
    luckycats = savedData.luckycats || 0;
    catillusionist = savedData.catillusionist || 0;
    catcoders = savedData.catcoders || 0;
    catmultitaskers = savedData.catmultitaskers || 0;
    catspawn = savedData.catspawn || 0;
    clone = savedData.clone || 0;
    cost1 = savedData.cost1 || 15;
    cost2 = savedData.cost2 || 100;
    cost3 = savedData.cost3 || 1000;
    cost4 = savedData.cost4 || 500000;
    cost5 = savedData.cost5 || 1000000;
    cost6 = savedData.cost6 || 1000000000;
    cost7 = savedData.cost7 || 1000000000000;
    cost8 = savedData.cost8 || 1000000000000000;
    cost9 = savedData.cost9 || 1000000000000000000;
    cost10 = savedData.cost10 || 1000000000000000000000;
    cost11 = savedData.cost11 || 1000000000000000000000000;
    cost12 = savedData.cost12 || 1000000000000000000000000000;
    cost13 = savedData.cost13 || 1000000000000000000000000000000;
    cost14 = savedData.cost14 || 1000000000000000000000000000000000;
    cost15 = savedData.cost15 || 1000000000000000000000000000000000000;
    cost16 = savedData.cost16 || 1000000000000000000000000000000000000000;
    cost17 = savedData.cost17 || 1000000000000000000000000000000000000000000;
    usedSophie = savedData.usedSophie || false;
    usedDev = savedData.usedDev || false;
    heros = savedData.heros || 0;

  }
};

setInterval(function () {
  const data = {
    num: num,
    allow: allow,
    count: count,
    clicks: clicks,
    numbers: numbers,
    normalIns: normalIns,
    farmerIns: farmerIns,
    minerIns: minerIns,
    workerIns: workerIns,
    bankerIns: bankerIns,
    alchemistIns: alchemistIns,
    astronautIns: astronautIns,
    priestIns: priestIns,
    mageIns: mageIns,
    gatekeeperIns: gatekeeperIns,
    antiIns: antiIns,
    luckyIns: luckyIns,
    illusionistIns: illusionistIns,
    coderIns: coderIns,
    mutiIns: mutiIns,
    spawnIns: spawnIns,
    cloneIns: cloneIns,
    goldencats: goldencats,
    normalcats: normalcats,
    farmercats: farmercats,
    workercats: workercats,
    bankercats: bankercats,
    minercats: minercats,
    alchemistcats: alchemistcats,
    astronautcats: astronautcats,
    catpriest: catpriest,
    catmage: catmage,
    gatekeepercats: gatekeepercats,
    anticats: anticats,
    luckycats: luckycats,
    catillusionist: catillusionist,
    catcoders: catcoders,
    catmultitaskers: catmultitaskers,
    catspawn: catspawn,
    clone: clone,
    cost1: cost1,
    cost2: cost2,
    cost3: cost3,
    cost4: cost4,
    cost5: cost5,
    cost6: cost6,
    cost7: cost7,
    cost8: cost8,
    cost9: cost9,
    cost10: cost10,
    cost11: cost11,
    cost12: cost12,
    cost13: cost13,
    cost14: cost14,
    cost15: cost15,
    cost16: cost16,
    cost17: cost17,
    usedSophie: usedSophie,
    usedDev: usedDev,
    heros: heros,
  };
  localStorage.setItem('savedData', JSON.stringify(data));
}, 1000);




//////////////////////////////////////////
///     ACHIEVEMENTS AND POPLITS        //
//////////////////////////////////////////

let clickEarned = false;
let doubleClickEarned = false;
let clickTrainingEarned = false;
let clickathlonEarned = false;
let clickolympicsEarned = false;
let clicktasticEarned = false;
let clickoramaEarned = false;
let clickmadicEarned = false;
let clickopathEarned = false;
let clicktastropheEarned = false;
let clickoutbreakEarned = false;
let clickidemicEarned = false;
let clickpocalypse = false;
let totalAch = 0;


//fingerClickenGood?, 
function checkAchievements() {
  if (clicks >= 1 && !clickEarned) {
    console.log('Make One Kit Coin from clicking');
    clickEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 100 && !doubleClickEarned) {
    console.log('Make 100 Kit Coins from clicking');
    doubleClickEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000 && !clickTrainingEarned) {
    console.log('Make a Thousand Kit Coins from clicking');
    clickTrainingEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000 && !clickathlonEarned) {
    console.log('Make a Million Kit Coins from clicking');
    clickathlonEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000 && !clickolympicsEarned) {
    console.log('Make a Billion Kit Coins from clicking');
    clickolympicsEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000000 && !clicktasticEarned) {
    console.log('Make a Tillion Kit Coins from clicking');
    clicktasticEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000000000 && !clickoramaEarned) {
    console.log('Make a Quadrillion Kit Coins from clicking');
    clickoramaEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000000000000 && !clickmadicEarned) {
    console.log('Make a Quintillion Kit Coins from clicking');
    clickmadicEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000000000000000 && !clickmadicEarned) {
    console.log('Make a Quintillion Kit Coins from clicking');
    clickmadicEarned = true;
    totalAch = totalAch + 1;
  } else if (clicks >= 1000000000000000000000000 && !clickmadicEarned) {
    console.log('Make a Quintillion Kit Coins from clicking');
    clickmadicEarned = true;
    totalAch = totalAch + 1;
  }
}






let poplitLevel = "normal";
let earnedLevel = "normal";

function changeCoinImage() {
  let coin = document.getElementById("coin");
  let coinImage = "";
  let dropdown = document.getElementById("poplitSelectStyle");
  let selectedOption = dropdown.options[dropdown.selectedIndex].text.toLowerCase();

  if (selectedOption === "automatic") {
    // Check if the current count warrants a higher level
    if (totalAch >= 2 && earnedLevel === "normal") {
      earnedLevel = "raspberry";
    }
    if (totalAch >= 4 && earnedLevel === "raspberry") {
      earnedLevel = "orange";
    }
    if (count >= 1000 && earnedLevel === "orange") {
      earnedLevel = "banana";
    }
    if (count >= 10000 && earnedLevel === "banana") {
      earnedLevel = "lime";
    }
    if (count >= 1000000 && earnedLevel === "lime") {
      earnedLevel = "blueberry";
    }
    if (count >= 1000000000 && earnedLevel === "blueberry") {
      earnedLevel = "grape";
    }
    if (count >= 1000000000000 && earnedLevel === "grape") {
      earnedLevel = "pomegranate";
    }
    if (count >= 1000000000000000 && earnedLevel === "pomegranate") {
      earnedLevel = "maple";
    }
    if (count >= 1000000000000000000 && earnedLevel === "maple") {
      earnedLevel = "mango";
    }
    poplitLevel = earnedLevel;
  } else {
    poplitLevel = selectedOption;
  }
  earnedLevel = poplitLevel;
  switch (poplitLevel) {
    case "normal":
      coinImage = "css/media/poplits/normalCoin.png";
      break;
    case "raspberry":
      coinImage = "css/media/poplits/redCoin.png";
      break;
    case "orange":
      coinImage = "css/media/poplits/orangeCoin.png";
      break;
    case "banana":
      coinImage = "css/media/poplits/bananaCoin.png";
      break;
    case "lime":
      coinImage = "css/media/poplits/limeCoin.png";
      break;
    case "blueberry":
      coinImage = "css/media/poplits/blueberryCoin.png";
      break;
    case "grape":
      coinImage = "css/media/poplits/grapeCoin.png";
      break;
    case "pomegranate":
      coinImage = "css/media/poplits/pomegranateCoin.png";
      break;
    case "maple":
      coinImage = "css/media/poplits/mapleCoin.png";
      break;
    case "mango":
      coinImage = "css/media/poplits/mangoCoin.png";
      break;
    case "tea":
      coinImage = "css/media/poplits/teaCoin.png";
      break;
    case "coconut":
      coinImage = "css/media/poplits/coconutCoin.png";
      break;
    case "peppermint":
      coinImage = "css/media/poplits/peppermintCoin.png";
      break;
    case "dragonfruit":
      coinImage = "css/media/poplits/dragonfruitCoin.png";
      break;
    case "golden":
      coinImage = "css/media/poplits/goldCoin.png";
      break;
    case "prism":
      coinImage = "css/media/poplits/prismCoin.png";
      break;
    case "queen":
      coinImage = "css/media/poplits/pinkCoin.png";
      break;
    case "kill":
      coinImage = "css/media/poplits/knightCoin.png";
      break;
  }
  let poplitImage = "<img src='" + coinImage + "' class='coin-image'>";
  coin.innerHTML = poplitImage;
}


function poplitSelectList() {
  let displayLevel = "normal";
  if (totalAch >= 2 && displayLevel === "normal") {
    displayLevel = "raspberry";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[2].disabled = false;
  }
  if (totalAch >= 4 && displayLevel === "raspberry") {
    displayLevel = "orange";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[3].disabled = false;
  }
  if (count >= 1000 && displayLevel === "orange") {
    displayLevel = "banana";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[4].disabled = false;
  }
  if (count >= 10000 && displayLevel === "banana") {
    displayLevel = "lime";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[5].disabled = false;
  }
  if (count >= 1000000 && displayLevel === "lime") {
    displayLevel = "blueberry";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[6].disabled = false;
  }
  if (count >= 1000000000 && displayLevel === "blueberry") {
    displayLevel = "grape";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[7].disabled = false;
  }
  if (count >= 1000000000000 && displayLevel === "grape") {
    displayLevel = "pomegranate";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[8].disabled = false;
  }
  if (count >= 1000000000000000 && displayLevel === "pomegranate") {
    displayLevel = "maple";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[9].disabled = false;
  }
  if (count >= 1000000000000000000 && displayLevel === "maple") {
    displayLevel = "mango";
    document.getElementById("poplitSelectStyle").getElementsByTagName("option")[10].disabled = false;
  }
  return displayLevel;
}

function wallpaper() {
  let dropdownBack = document.getElementById("backSelectStyle");
  let selectedOptionBack = dropdownBack.options[dropdownBack.selectedIndex].text.toLowerCase();
  let backImage = "";
  if (selectedOptionBack === "default") {
  }
  else {
    switch (selectedOptionBack) {
      case "default":
        backImage = "css/media/backgrounds/defBack.jpeg";
        break;
      case "red":
        backImage = "css/media/backgrounds/redBack.jpeg";
        break;
      case "orange":
        backImage = "css/media/backgrounds/orangeBack.jpeg";
        break;
      case "yellow":
        backImage = "css/media/backgrounds/yellowBack.jpeg";
        break;
      case "lime":
        backImage = "css/media/backgrounds/limeBack.jpeg";
        break;
      case "blue":
        backImage = "css/media/backgrounds/blueBack.jpeg";
        break;
      case "purple":
        backImage = "css/media/backgrounds/purpleBack.jpeg";
        break;
      case "pink":
        backImage = "css/media/backgrounds/pinkBack.jpeg";
        break;
      case "prism":
        backImage = "css/media/backgrounds/prismBack.jpeg";
        break;
      case "kill":
        backImage = "css/media/backgrounds/prismBack.jpeg";
        break;
    }
    var game = document.getElementById("game");
    game.style.backgroundImage = "url('" + backImage + "')";
  }
}
//////////////////////////////////////////
///             UPGRADES                //
//////////////////////////////////////////

function buyClickPower() {
  if (count < clickCost) { }
  if (count >= clickCost) {
    count -= clickCost;
    clickCost = Math.round(clickCost * 80.5);
    num = num * 2;
    console.log(clickCost);
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayClickCost = clickCost;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (clickCost >= limit) {
        displayClickCost = (clickCost / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    powerDub.innerHTML = " $" + displayClickCost;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
  }
}

function buyInsPower() {
  if (count < insCost) { }
  if (count >= insCost) {
    count -= insCost;
    insCost = Math.round(insCost * 80.5);
    num = num * 2;
    normalIns = normalIns * 2;
    farmerIns = farmerIns * 2;
    minerIns = minerIns * 2;
    bankerIns = bankerIns * 2;
    alchemistIns = alchemistIns * 2;
    alchemistIns = alchemistIns * 2;
    priestIns = priestIns * 2;
    mageIns = mageIns * 2;
    gatekeeperIns = gatekeeperIns * 2;
    antiIns = antiIns * 2;
    luckyIns = luckyIns * 2;
    illusionistIns = illusionistIns * 2;
    coderIns = coderIns * 2;
    mutiIns = mutiIns * 2;
    spawnIns = spawnIns * 2;
    cloneIns = cloneIns * 2;
    addnormalIns = addnormalIns * 2;
    addfarmerIns = addfarmerIns * 2;
    addminerIns = addminerIns * 2;
    addbankerIns = addbankerIns * 2;
    addalchemistIns = addalchemistIns * 2;
    addalchemistIns = addalchemistIns * 2;
    addpriestIns = addpriestIns * 2;
    addmageIns = addmageIns * 2;
    addgatekeeperIns = addgatekeeperIns * 2;
    addantiIns = addantiIns * 2;
    addluckyIns = addluckyIns * 2;
    addillusionistIns = iaddllusionistIns * 2;
    addcoderIns = addcoderIns * 2;
    addmutiIns = addmutiIns * 2;
    addspawnIns = addspawnIns * 2;
    addcloneIns = addcloneIns * 2;
    console.log(insCost);
    //count insurance
    let displayCount = count;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (count >= limit) {
        displayCount = (count / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    //cost insurance
    let displayInsCost = insCost;
    for (let i = suffixes.length - 1; i >= 1; i--) {
      const limit = Math.pow(10, i * 3);
      if (insCost >= limit) {
        displayInsCost = (insCost / limit).toFixed(1) + suffixes[i];
        break;
      }
    }
    idleDub.innerHTML = " $" + displayInsCost;
    printerName.innerHTML = "You have $" + displayCount;
    tit.innerHTML = displayCount + " Cats - Catstack";
  }
}


let poplitSelect = false;

function getSelected() {
  //poplit
  let dropdown = document.getElementById("poplitSelectStyle");
  let selectedOption = dropdown.options[dropdown.selectedIndex].text.toLowerCase();
  //background
  let dropdownBack = document.getElementById("backSelectStyle");
  let selectedOptionBack = dropdownBack.options[dropdownBack.selectedIndex].text.toLowerCase();
}

//////////////////////////////////////////
///             RESEARCH                //
//////////////////////////////////////////

let functions = [resClick, resIdle];
let usedFunctions = [];
let canRun = true;




function research() {
  if (canRun) {
    canRun = false;
    if (functions.length === 0) {
      console.log("Research is complete!");
      return;
    }
    if (count < resCost) { }
    if (count >= resCost) {
      count = count - resCost;
      resCost = Math.round(resCost * 50.8);
      console.log(resCost);
      let unusedFunctions = functions.filter(function (func) {
        return !usedFunctions.includes(func);
      });
      if (unusedFunctions.length === 0) {
        console.log("All res have already been used.");
        return;
      }
      const index = Math.floor(Math.random() * unusedFunctions.length);
      const chosenFunction = unusedFunctions[index];
      usedFunctions.push(chosenFunction);
      chosenFunction();
    }
    setTimeout(() => {
      canRun = true;
    }, 5000); // the cooldown time is set to 5000ms (5 seconds)
  }

}
function resClick() {
  showUpgradesClick();
  console.log("Researched click power");
}

function resIdle() {
  showUpgradeIns();
  console.log("Researched idle power");
}




function showUpgradesClick() {
  //count insurance
  let displayCount = count;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (count >= limit) {
      displayCount = (count / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  //cost insurance
  let displayResCost = resCost;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (resCost >= limit) {
      displayResCost = (resCost / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  printerName.innerHTML = "You have $" + displayCount;
  tit.innerHTML = displayCount + " Cats - Catstack";
  let timeLeft = 5; // 20 minutes in seconds
  let labResElem = document.getElementById("labRes");
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      labRes.innerHTML = "Research for $" + displayResCost;
      document.getElementById("upgradesClick").style.display = "block";
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      labResElem.innerHTML = "Time left: " + minutes + "m " + seconds + "s";
      timeLeft--;
    }
  }, 1000); // 1 second interval
}



function showUpgradeIns() {
  //count insurance
  let displayCount = count;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (count >= limit) {
      displayCount = (count / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  //cost insurance
  let displayResCost = resCost;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (resCost >= limit) {
      displayResCost = (resCost / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  printerName.innerHTML = "You have $" + displayCount;
  tit.innerHTML = displayCount + " Cats - Catstack";
  let timeLeft = 5; // 20 minutes in seconds
  let labResElem = document.getElementById("labRes");
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      labRes.innerHTML = "Research for $" + displayResCost;
      document.getElementById("upgradesIdle").style.display = "block";
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      labResElem.innerHTML = "Time left: " + minutes + "m " + seconds + "s";
      timeLeft--;
    }
  }, 1000); // 1 second interval
}




function crestPrism() {
  document.getElementById("poplitSelect").style.display = "block";
  document.getElementById("backSelect").style.display = "block";
  document.getElementById("killSelect").style.display = "none";
  document.getElementById("royalSelect").style.display = "none";
}

function crestQueen() {
  document.getElementById("poplitSelect").style.display = "none";
  document.getElementById("backSelect").style.display = "none";
  document.getElementById("killSelect").style.display = "none";
  document.getElementById("royalSelect").style.display = "block";
  game.style.backgroundImage = "url('css/media/backgrounds/queenBack.jpeg')";
  backImage = "queen"
  selectedOptionBack = "queen"
  earnedLevel = "queen";
  coin.innerHTML = "<img src='css/media/poplits/pinkCoin.png' class='coin-image'>";
  game.style.backgroundImage = "url('css/media/backgrounds/pinkBack.jpeg')";
  crest.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  upgradesClick.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  upgradesIdle.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store1.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store2.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store3.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store4.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store5.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";
  store6.style.backgroundImage = "url('css/media/backgrounds/hotpink.png')";

  game.style.border = "hotpink 10px groove";
}

function crestKill() {
  document.getElementById("poplitSelect").style.display = "none";
  document.getElementById("backSelect").style.display = "none";
  document.getElementById("killSelect").style.display = "block";
  document.getElementById("royalSelect").style.display = "none";
  game.style.backgroundImage = "url('css/media/backgrounds/killBack.jpeg')";
  backImage = "kill"
  selectedOptionBack = "kill"
  earnedLevel = "kill";
  coin.innerHTML = "<img src='css/media/poplits/knightCoin.png' class='coin-image'>";
  lab.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  upgradesClick.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  upgradesIdle.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  crest.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store1.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store2.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store3.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store4.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store5.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  store6.style.backgroundImage = "url('css/media/backgrounds/red.png')";
  game.style.border = "#ff1100 10px groove";
}


let usedSophie = false;
let usedDev = false;

// Encryption and Decryption Functions
async function encryptText(text, key) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    "AES-CTR",
    true,
    ["encrypt"]
  );

  const counter = new Uint8Array(16); // Set your desired counter value

  const ciphertext = await crypto.subtle.encrypt({ name: "AES-CTR", counter, length: 64 }, cryptoKey, data);

  const ciphertextString = arrayBufferToBase64(ciphertext);

  return { ciphertext: ciphertextString, counter };
}

async function decryptText(ciphertext, counter, key) {
  const ciphertextArray = base64ToArrayBuffer(ciphertext);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    "AES-CTR",
    true,
    ["decrypt"]
  );

  const plaintext = await crypto.subtle.decrypt({ name: "AES-CTR", counter, length: 64 }, cryptoKey, ciphertextArray);

  const decoder = new TextDecoder();
  return decoder.decode(plaintext);
}

// Helper Functions
function hexToUint8Array(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}

function arrayBufferToBase64(buffer) {
  const binary = new Uint8Array(buffer);
  const base64 = btoa(String.fromCharCode.apply(null, binary));
  return base64;
}

function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Main Code
const secretKeyHex = "YWNjMGM0MWUtZWQwNy00YTQ2LThkMjItY2FlMDJmY2MwMWE1";
const secretKey = hexToUint8Array(secretKeyHex);

// Example usage:
const checkCode = (code, encryptedCodeToCheck) => {
  let canContinue = false;

  function2(code, encryptedCodeToCheck)
    .then(isValid => {
      if (isValid) {
        canContinue = true;
        console.log(isValid);
        console.log(canContinue);
      } else {
        console.log("Code is invalid!");
        console.log(isValid);
        console.log(canContinue);
      }
    })
    .catch(error => {
      console.error(error);
    });

    if (canContinue) return true;
    return false;
};

const function2 = async (code, encryptedCodeToCheck) => {
  try {
    const { ciphertext, counter } = await encryptText(code, secretKey);
    return ciphertext === encryptedCodeToCheck;
  } catch (error) {
    console.error(error);
    return false; // Handle errors as needed
  }
}

function DevToolsOpened() {
  window.location.replace(window.location.origin + "/close-console");
}
window.addEventListener("contextmenu", function (n) {
  n.preventDefault();
}),
  window.addEventListener("devtoolschange", function (n) {
    console.log("is DevTools open?", n.detail.open), n.detail.open && window.location.replace(window.location.origin + "/close-console");
  }),
  window.console && window.console.clear,
  window.addEventListener("keydown", function (n) {
    ((1 == n.metaKey && 1 == n.altKey && 73 == n.keyCode) ||
      (1 == n.metaKey && 1 == n.altKey && 74 == n.keyCode) ||
      (1 == n.metaKey && 1 == n.altKey && 67 == n.keyCode) ||
      (1 == n.metaKey && 1 == n.shiftKey && 67 == n.keyCode) ||
      (1 == n.ctrlKey && 1 == n.shiftKey && 73 == n.keyCode) ||
      (1 == n.ctrlKey && 1 == n.shiftKey && 74 == n.keyCode) ||
      (1 == n.ctrlKey && 1 == n.shiftKey && 67 == n.keyCode) ||
      123 == n.keyCode) &&
      DevToolsOpened();
  });


// Redemption Code and Reward Functions
function redeemcode() {
  const code = prompt("Enter code:");
  if (checkCode(prompt("Enter code:"), 'cYna75DXbadJ1A1g') && !usedSophie) {
    usedSophie = true;
    resLootSophie();
  } else if (checkCode(prompt("Enter code:"), 'ZoPc') && !usedDev) {
    usedDev = true;
    resLootDev();
  } else if (checkCode(prompt("Enter code:"), 'cYna75DXbadJ1A1g') || checkCode(prompt("Enter code:"), 'ZoPc')) {
    alert("This code has already been redeemed!");
  } else {
    alert("Invalid code!");
  }
}

function resLootSophie() {
  alert("This code will give you 1-15 Golden Cats and 1 legendary cat. SOPHIE FOR SOCAL!!!");
  const randomAmount = Math.floor(Math.random() * 15) + 1;
  goldencats += randomAmount;
  heros = heros + 1;
  alert(`You loot: 
        ${randomAmount} Golden Cats!    
        1 Legendary: Sophie!    
        Total golden cats: ${goldencats}     
        Total legendary cats: ${heros}`);
}

function resLootDev() {
  alert("This code will give you 50-100 Golden Cats! Go Devs!!");
  const randomAmount = Math.floor(Math.random() * 100) + 50;
  goldencats += randomAmount;
  alert(`You loot: 
        ${randomAmount} Golden Cats!     
        Total golden cats: ${goldencats}`);
}

// cYna75DXbadJ1A1g
// ZoPc
