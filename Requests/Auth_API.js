function getTestResult(api_key) {
  fetch("https://api.rememberthemilk.com/services/rest/?method=rtm.test.echo&api_key=" + api_key + "&name=value&format=json")
  .then((response) => response.json())
  .then((json) => console.log(json));
}
  
function authPerson(api_key, api_sig) {
  fetch("https://api.rememberthemilk.com/services/auth/?api_key=" + api_key + "&perms=delete&api_sig=" + api_sig)
  .then((response) => response.json())
  .then((json) => console.log(json));

  // fetch("https://api.rememberthemilk.com/services/rest/?method=rtm.auth.getToken&frob=rtm.auth.getFrob&name=value&format=json")
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}

function getFrob(api_key) {
  fetch("https://api.rememberthemilk.com/services/rest/?method=rtm.auth.getFrob&api_key=" + api_key + "&name=value&format=json")
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function authRTM(api_key) {
  const frobUrl = 'https://api.rememberthemilk.com/services/rest/?method=rtm.auth.getFrob&api_key=' + api_key;
  fetch(frobUrl)
  .then(response => response.text())
  .then(data => {
    const frob = data.getElementsByTagName('frob')[0].childNodes[0].nodeValue;
    const authUrl = 'https://www.rememberthemilk.com/services/auth/?api_key=' + api_key + '&perms=delete&frob=' + frob;
    window.location.href = authUrl;
  });
}

//var MD5 = require("crypto-js/md5");
//getTestResult("1");
//authRTM();
//getTestResult('1');
authPerson("1", "1");
//getFrob("1");

