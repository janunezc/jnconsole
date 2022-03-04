const assert = require("assert");

describe("Basic Test for jnconsole",()=>{
  it("Should respond correctly to basic use",()=>{
    let start = Date.now();
    console.log("Dummy test waiting for 3ms");
    sleep(3)
    let end = Date.now();
    let elapsed = end-start;
    assert.equal(elapsed,3);
    console.log("Dummy Test did run!");
  });
});


describe("Console replacement", ()=>{
  it("Should replace console successfully", ()=>{
    const jnc = require("../jnconsole");
    let logMessage = "This is a test for the overtaken console.log";
    console.log(logMessage,1);
    assert.equal(console.lastMessage,logMessage);
    sleep(2);

    logMessage = "This is a test for the overtaken console.log after 2ms";
    console.log(logMessage);
    assert.equal(console.lastMessage,logMessage);
    sleep(2);

    let warnMessage = "This is a test for the overtaken console.warn";
    console.warn(warnMessage);
    assert.equal(console.lastMessage,warnMessage);
    sleep(2);

    warnMessage = "This is a test for the overtaken console.warn after 2 ms...";
    console.warn(warnMessage);
    assert.equal(console.lastMessage,warnMessage);
    sleep(2);
    let errorMessage = "This is a test for the overtaken console.error";
    console.error(errorMessage);
    assert.equal(console.lastMessage, errorMessage);
    sleep(3);

    errorMessage = "This is a test for the overtaken console.error after 3ms";
    console.error(errorMessage);
    assert.equal(console.lastMessage, errorMessage);

    console.log({uno:1,dos:2,tres:3});
    console.log("LAST MESSAGE WAS:", console.lastMessage);

  });
});

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
