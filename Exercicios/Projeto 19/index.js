let velocity = 150;

function desacerelacao(velocity, printer) {
  let deceleration = 10;

  while (velocity >= 0) {
    printer(velocity);
    velocity -= deceleration;
  }
  console.log("Nave parada...");
}

desacerelacao(velocity, function (velocity) {
  console.log("velocity: " + velocity);
});
