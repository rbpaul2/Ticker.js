function clock_tick() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if(hours < 10) hours = "0" + hours;
  if(minutes < 10) minutes = "0" + minutes;
  if(seconds < 10) seconds = "0" + seconds;

  var str = hours + ":" + minutes + ":" + seconds;

  console.log(str);

  counter.update(str);
}

var counter = new Ticker("time", [':','0','1','2','3','4','5','6','7','8','9'], 500);

clock_tick();
setInterval(clock_tick ,1000);
