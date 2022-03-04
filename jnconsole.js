(()=>{
  var oldConsole = console;
  console = {
    lastMessage:"",
    log_lts:0,
    log:function(){
      let now = Date.now();
      console.log_lts = console.log_lts==0?now:console.log_lts;
      oldConsole.log("LOG",now, (now - console.log_lts), arguments[0]);
      console.lastMessage = arguments[0];
      console.log_lts = now;
    },
    warn_lts:0,
    warn:function(){
      let now = Date.now();
      console.warn_lts = console.warn_lts==0?now:console.warn_lts;
      oldConsole.warn("WARNING!",now, (now - console.warn_lts), arguments[0]);
      console.lastMessage = arguments[0];
      console.warn_lts = now;
    },
    error_lts:0,
    error:function(){
      let now = Date.now();
      console.error_lts = console.error_lts==0?now:console.error_lts;
      oldConsole.error("***ERROR!!!",now, (now - console.error_lts), arguments[0]);
      console.lastMessage = arguments[0];
      console.error_lts = now;
    }
  }

  console.log("Hello World! This someday will be a great project. Just stay tuned!");

  exports.cuatro = 4;
  exports.LastMessage = console.lastMessage;
})();
