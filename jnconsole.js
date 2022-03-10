(() => {
  var oldConsole = console;
  var jnconsole = {
    logCounter:0,
    jnconsole:true,
    lastMessage: "",
    takeConsoleOver: function(){
      jnconsole.logCounter=0;
      if(console.jnconsole===undefined){
        oldConsole = console;
        console = jnconsole;
        console.log("Console has been taken over by jnconsole. Enjoy :-)");
      }
    },
    giveConsoleUp: function(){
      if(console.jnconsole!==undefined){
        console = oldConsole;
        console.log("Console has been given up by jnconsole. Thanks!");
      }
    },
    log: function () {
      standardizedConsoleFunction("log", arguments);
    },
    warn: function () {
      standardizedConsoleFunction("warn", arguments);
    },
    error: function () {
      standardizedConsoleFunction("error", arguments);
    },
    /*REDIRECTORS TO REAL CONSOLE*/
    assert: oldConsole.assert,
    clear: oldConsole.clear,
    count: oldConsole.count,
    group: oldConsole.group,
    groupCollapsed: oldConsole.groupCollapsed,
    groupEnd: oldConsole.groupEnd,
    info: oldConsole.info,
    table: oldConsole.table,
    time: oldConsole.time,
    timeEnd: oldConsole.timeEnd,
    trace: oldConsole.trace
  }

  function standardizedConsoleFunction(targetFunctionName, arguments) {

    let now = Date.now();
    const targetFunction = oldConsole[targetFunctionName];
    const lts_var_name = `lts_${targetFunctionName}`;
    const headMessage = targetFunctionName.toUpperCase();

    if (console[lts_var_name] === undefined) {
      console[lts_var_name] = 0;
    }
    console[lts_var_name] = console[lts_var_name] == 0 ? now : console[lts_var_name];

    targetFunction(console.logCounter, headMessage, now, `${(now - console[lts_var_name])} ms.`, "|", ...arguments);
    console.lastMessage = arguments[0];
    console[lts_var_name] = now;
    console.logCounter ++;
  }

  
  jnconsole.takeConsoleOver();

  exports.JNConsole = jnconsole;
})();
