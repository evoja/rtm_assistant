const myModule = require('./keys');

let api_key = myModule.api_key(),
	api_secret = myModule.api_secret();

var http = require('http'),
	stdin = process.stdin,
	//https://github.com/aranel616/rtm-js/blob/master/rtm.js
	RememberTheMilk = require("./rtm");

rtm = new RememberTheMilk(api_key, api_secret, 'delete');

rtm.get('rtm.auth.getFrob', function(resp){
	frob = resp.rsp.frob; 

	var authUrl = rtm.getAuthUrl(frob);

	console.log('Please visit the following URL in your browser to authenticate:\n');
	console.log(authUrl, '\n');
	console.log('After authenticating, press any key to resume...');

	// Получаем кнопку по её ID
	const button = document.getElementById("myButton");

	function afterButtonClick() {
		
		if (stdin && typeof stdin.resume == "function") {
			// Вызовите метод resume только если stdin существует и имеет метод resume
			stdin.resume();
			stdin.on('data', function() {
				rtm.get('rtm.auth.getToken', {frob: frob}, function(resp){
					if (!resp.rsp.auth) {
						console.log('Auth token not found. Did you authenticate?\n');
						process.exit(1);
					}
		
					rtm.auth_token = resp.rsp.auth.token;
		
					console.log('Lists:');
		
					rtm.get('rtm.lists.getList', function(resp){
						var i, list;
		
						for (i = 0; i < resp.rsp.lists.list.length; i++) {
							list = resp.rsp.lists.list[i];
							console.log(list.name + ' (id: ' + list.id + ')');
						}
		
						console.log("Ok");
		
						process.exit();
					});
				});
			});
		} else {
			console.log("stdin или его метод resume не определены.");
		}
	}

	// Добавляем обработчик события "click" к кнопке
	button.addEventListener("click", afterButtonClick);
	
});