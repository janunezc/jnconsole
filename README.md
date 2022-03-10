# jnconsole
Takes over JavaScript concsole and expands its normal functionality by  adding timestamps, elapsed time, grouping and colors
# example test:

```
mkdir jnconsole-test
cd jnconsole-test
npm i jnconsole
cd node_modules
cd jnconsole
npm i
npm test
```

# Example Code:

See the file `example-use.js` within the package as an example of how to use it.

Or, you can create a new node project with the following code:
```
console.log("This is a simple log entry");
sleep(300);
console.log("This is a simple log entry after a delay of 300ms");
sleep(200);
console.log("This is a simple log entry after a delay of 200ms");
console.log("Now leds add jnconsole");

const jnc = require("jnconsole"); // requires npm i jnconsole
console.log("This is a simple log entry enriched by jnconsole");
sleep(300);
console.log("This is a simple log entry after a delay of 300ms enriched by jnconsole");
sleep(200);
console.log("This is a simple log entry after a delay of 200ms enriched by jnconsole");

function sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
```