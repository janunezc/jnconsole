const assert = require("assert");

describe("Basic Test for jnconsole",()=>{
  it("Should take less than 4ms",()=>{
    const jnc = require("../jnconsole");
    let start = Date.now();
    console.log("Dummy test waiting for 3ms");
    sleep(3)
    let end = Date.now();
    let elapsed = end-start;
    assert.equal(elapsed <=5, true, "LESS  THAN 4 ms");
    console.log("Dummy Test did run!");
  });
});


describe("Console take-over", ()=>{
  it("Should replace console successfully", ()=>{
    const jnc = require("../jnconsole");
    let logMessage = "This is a test for the overtaken console.log";
    console.log(logMessage,1);
    assert.equal(console.lastMessage,logMessage);
    sleep(20);

    logMessage = "This is a test for the overtaken console.log after 20ms";
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

    console.info("THIS IS AN NON WRAPPED INFO MESSAGE");
    console.info("LAST MESSAGE WAS:", console.lastMessage );

  });
});


describe("Console Give up", () => {
  it("Should give up the console successfully", ()=>{
    const jnc = require("../jnconsole");
    jnc.JNConsole.giveConsoleUp();
    console.log("This should be normal console");
    jnc.JNConsole.takeConsoleOver();
    console.log("This should be a jnconsole entry");
  });
});
function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
