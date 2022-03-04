(()=>{
  var oldConsole = console;
  console = {
    lastMessage:"",
    log_lts:0,
    log:function(){
      let now = Date.now();
      console.log_lts = console.log_lts==0?now:console.log_lts;
      oldConsole.log("LOG",now, (now - console.log_lts),"ms", ...arguments);
      console.lastMessage = arguments[0];
      console.log_lts = now;
    },
    warn_lts:0,
    warn:function(){
      let now = Date.now();
      console.warn_lts = console.warn_lts==0?now:console.warn_lts;
      oldConsole.warn("WARNING!",now, (now - console.warn_lts),"ms", ...arguments);
      console.lastMessage = arguments[0];
      console.warn_lts = now;
    },
    error_lts:0,
    error:function(){
      let now = Date.now();
      console.error_lts = console.error_lts==0?now:console.error_lts;
      oldConsole.error("***ERROR!!!",now, (now - console.error_lts),"ms", ...arguments);
      console.lastMessage = arguments[0];
      console.error_lts = now;
    },
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

  console.log("Console has been hijacked by jnconsole. For good :-)");

})();
