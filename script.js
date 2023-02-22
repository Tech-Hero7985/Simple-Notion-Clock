function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var amPm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12; // convert to 12-hour format
  var time = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' ' + amPm;
  document.getElementById('clock').textContent = time;
}

setInterval(updateClock, 1000);