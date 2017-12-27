var websocketServer = require("ws").Server;

var wss = new websocketServer({port:8080});

wss.on("connection",function(ws){

  ws.on("message", function(payload) {

		if (payload.content === 'exit') {
			ws.close();
		} else {

			wss.clients.forEach(function(client) {
				client.send(payload);
			});

		}

	});
  var date = new Date();
  var message = {
      id : date.getTime(),
      type : 'sent',
      content : "Welcome to cyber chat....",
      sender : 'Santosh',
      received : '',
      rcontent : '',
      rsender : '',
      rreceived : '',
      isemo : false
    }

  ws.send(JSON.stringify(message));
});
