var startDateTime = new Date("Nov 8, 2019 00:00:00"); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
  newDate = new Date();
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp - startStamp) / 1000);

  var days = Math.floor(diff / (24 * 60 * 60));
  diff = diff - (days * 24 * 60 * 60);
  var hours = Math.floor(diff / (60 * 60));
  diff = diff - (hours * 60 * 60);
  var mins = Math.floor(diff / (60));
  diff = diff - (mins * 60);
  var secs = diff;

  //document.getElementById("time-elapsed").innerHTML = d + " day(s), " + h + " hour(s), " + m + " minute(s), " + s + " second(s) working";
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = mins;
  s.innerHTML = secs;

  console.log(days + " days " + hours + " hours " + mins + " minutes " + secs + "seconds");
}

setInterval(updateClock, 1000);
