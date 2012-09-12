
opera.extension.onmessage = function(event){
  // Get content of incoming message.
  var message  = event.data;
  opera.postError("Background process sent: " + message);

  //  Replies back to background script.
  var reply = "Background process's message only had " + (message ? message.length : 0) + " characters.";
  event.source.postMessage(reply); 
};