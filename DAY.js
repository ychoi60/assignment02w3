var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
   "Thursday", "Friday", "Saturday"];
var main = ["Take-away", "Take-away", "Take-away", 
    "Take-away", "Eat-in", "Eat-in", "Eat-in", 
    "Eat-in", "Eat-in", "Eat-in", 
    "Eat-in", "Take-away", "Take-away", "Take-away",
    "Take-away", "Take-away", "Take-away", "Take-away", 
    "Take-away", "Take-away", "Take-away", 
    "Take-away", "Eat-in", "Eat-in", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Eat-in", 
    "Take-away", "Eat-in"];
var names = ["(Smith)", "(Jane)", "(Peter)", "(Paul)", "(Jones)", "(Chong)",
    "(Alex)", "(Mike)", "(Jackson)", "(Micheal)", "(Kim)", "(Tang)",
    "(David)", "(Joseph)", "(Samuel)", "(Neto)", "(Christopher)", "(Hong)", "(Peace)",
    "(Daniel)", "(Jacob)", "(Christie)", "(Yin)", "(Feng)", "(Julian)",
    "(Bube)", "(Kate)", "(Meghan)", "(Tim)", "(Brown)", "(Fisher)"];

function addColumnHeaders() {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}
function addCalendarDates() {
   var i = 1;
   var paragraphs = "";
   do {
      var tableCell = document.getElementById("08-" + i);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[0].innerHTML = i;
      i++;      
   } while (i <= 31);
}

function addGameInfo() {
   var paragraphs = "";
   for (var i = 0; i < 31; i++) {
      var date = i+1;
      var tableCell = document.getElementById("08-" + date);
      paragraphs = tableCell.getElementsByTagName("p");
     if (main[i] === "Take-away") {
         paragraphs[1].innerHTML = "Take-away ";
      } 
      if (main[i] === "Eat-in") {
         paragraphs[1].innerHTML = "Eat-in" ;
      }
      if (main[i] === "Take-away") {
         paragraphs[1].innerHTML = "Take-away ";
      } 
      else {
         if (main[i] === "Eat-in") {
            paragraphs[1].innerHTML = "Eat-in ";
         }
      } 
      switch (main[i]) {
         case "Take-away":
            paragraphs[1].innerHTML = "Take-away ";
            break;
         case "Eat-in":
            paragraphs[1].innerHTML = "Eat-in ";
            break;
      }
      paragraphs[1].innerHTML += names[i];
   }
}
 
function setUpPage() {
    addColumnHeaders();
    addCalendarDates();
    addGameInfo();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
