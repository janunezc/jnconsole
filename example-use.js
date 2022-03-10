console.log("This is a simple log entry");
sleep(300);
console.log("This is a simple log entry after a delay of 300ms");
sleep(200);
console.log("This is a simple log entry after a delay of 200ms");
console.log("Now leds add jnconsole");

const jnc = require("./jnconsole");
console.log("This is a simple log entry enriched by jnconsole");
sleep(300);
console.log("This is a simple log entry after a delay of 300ms enriched by jnconsole");
sleep(200);
console.log("This is a simple log entry after a delay of 200ms enriched by jnconsole");

function sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}