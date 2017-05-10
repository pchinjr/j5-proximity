var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7    
  });

  var servo = new five.Servo.Continuous(10);

  proximity.on("data", function() {
    if (this.in <= 3){
        servo.stop();
    } else {
        servo.cw();
    }
    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("  in  : ", this.in);
    console.log("-----------------");
    
  });

  proximity.on("change", function() {
    console.log("The obstruction has moved.");
  });

  
});