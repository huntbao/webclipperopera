(function(){
    window.mkNote = {
        init: function(){
            var self = this;
            self.createToolbar();
            opera.extension.onconnect = function(event){
                event.source.postMessage("sending something");
                opera.postError("sent message to popup");
            }
        },
        createToolbar: function(){
            var theButton;
            var ToolbarUIItemProperties = {
                title: '麦库记事',
                icon: 'images/icons/19x19.png',
                onclick: function(){
                    opera.postError("Background process sent: ");
                },
                popup: {
                    href: 'popup.html',
                    width: 600,
                    height: 400
                }
            }
            theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
            opera.contexts.toolbar.addItem(theButton);
        },
        doXHR: function(url) {
            // Try to get the contents of the URL
            var response;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);

            xhr.onreadystatechange = function() {
                if(this.readyState == 4) {
                    // Error check for fetching the URL
                    if (this.status == 200 && this.responseText) {
                        response = this.responseText;
                    } else {
                        opera.postError('EXTENSION ERROR: Can\'t read ' + url);
                        return false;
                    }
                }
            };

          xhr.send();    
          return response;
        }
    }
    $(function(){
        window.mkNote.init();
    });
})();