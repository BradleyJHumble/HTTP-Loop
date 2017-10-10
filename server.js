var http = require('http');    
var urls = ["http://www.youtube.com/channel/UCDo9msNItILnyF_Y2eHaNQg", "http://www.youtube.com/watch?v=dKnoOdDLy4o", "http://www.youtube.com/watch?v=34UCkAJKt6M", "http://www.youtube.com/watch?v=-Zy28mVeVZw", "http://www.youtube.com/watch?v=IAXcT5ZRzq8"];
var responses = [];
var completed_requests = 0;
        for (var riceGum = 1; riceGum < 50001; riceGum++ ){
        for (i in urls) {
            http.get(urls[i], function(res) {
              responses.push(res);
                completed_requests++;
             if (completed_requests == urls.length) {
                 // looping through array afer request sent, not by responses recieved!
                 console.log(responses);
                }
            });
        }
        console.log("request #:", riceGum);
        }

