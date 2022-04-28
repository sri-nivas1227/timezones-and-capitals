const zoneDivs = document.getElementsByClassName("zone-div");
const codeDivs = document.getElementsByClassName("code");
const zonenames = document.getElementsByClassName("zone-name");
const zones = [
  "India",
  "America",
  "England",
  "Australia",
  "Dubai",
  "China",
  "Japan",
  "France",
  "Germany",
  "Russia",
];
const zoneoffsets = [
  "+5.5",
  "-7",
  "+0",
  "+9.5",
  "+4",
  "+8",
  "+9",
  "+2",
  "+2",
  "+3",
];

//get time from the date class.
function main() {
  for (let i = 0; i < zoneDivs.length; i++) {
    zoneDivs[i].querySelector(".zone-name").innerHTML =
      "<p>" + zones[i] + "</p>";
    const d = returnTimezone(zoneoffsets[i]);
    insertTime(zoneDivs[i], d);
  }
  requestAnimationFrame(main);
}

main();
function insertTime(zonediv, d) {
  const timeset = zonediv.querySelector(".zone-time");
  timeset.querySelector(".hours").innerHTML = "<p>" + d.getHours() + "<p>";
  timeset.querySelector(".minutes").innerHTML = "<p>" + d.getMinutes() + "<p>";
  timeset.querySelector(".seconds").innerHTML = "<p>" + d.getSeconds() + "<p>";
}
//return the reference to correct time zone
function returnTimezone(offset) {
  let dat = new Date();
  let utc = dat.getTime() + dat.getTimezoneOffset() * 60000;
  let newdat = new Date(utc + 3600000 * offset);
  return newdat;
}

/**--------------------------------------------------------------------
 * country Details
 * ------------------------------------------------------------------
 */
/*Click to open and Click to close*/
for (let i = 0; i < zonenames.length; i++) {
  let flag = 0;
  zonenames[i].addEventListener("click", function () {
    if (flag == 0) {
      codeDivs[i].style.display = "block";
      flag = 1;
    } else {
      codeDivs[i].style.display = "none";
      flag = 0;
    }
    // codeDivs[i].innerHTML = "<h1> This is incredible <h1>";
  });
}
