(function(){
    var mkNotePopup = {
        init: function(){
            var redditText = opera.extension.bgProcess.mkNote.doXHR('http://api.reddit.com/');
            try {
              // Create a JSON object and get the array of stories within it
              var redditObj = JSON.parse(redditText);
              var stories = redditObj.data.children;
            } catch(e) {
              return;
            }

            // Create a list element and prepare variables for its items
            var list = document.createElement('ol');
            var story, item;

            // Loop through the array of stories and add each one to the list
            for (var i = 0, len = stories.length; i < len; i++) {
              story = stories[i].data;
              item = document.createElement('li');
              item.innerHTML = '<a href="' + story.url + '">' + story.title + '</a>';
              list.appendChild(item);
            }

            // Finally, show the list of stories
            document.body.appendChild(list);
        }
    }
    $(function(){
        mkNotePopup.init();
    });
})();