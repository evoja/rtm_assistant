RtmAPI = {

	callMethod: function(params, callback, scope)
	{
		var url = this.RTM_URL_PREFIX + this.RTM_REST;
		var paramsString = this.getParamsString(params);
		var handler = function(data, textStatus, response)
		{
			callback.call(scope, data);
			//console.log(textStatus);
		}
		
		this.nativeCall(url, paramsString, handler);
	},
	
	jQueryCall: function(url, paramsString, handler)
	{
		$.ajax(chrome.extension.getURL(url), {
			async: true,
			type: "GET",
			data: paramsString,
			success: handler,
			error: function(some, textStatus, errorThrown)
			{
				console.log("error");
				console.log(some);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
		
	},
	
	nativeCall: function(url, paramsString, handler)
	{
		var request = new XMLHttpRequest();
		request.onload = function(){
			handler(request.responseText);
		};
//		request.onreadystatechange 
		request.open("GET", url + "?" + paramsString, true);
		console.log(url + "?" + paramsString);
		request.send(null);		
	},
	
	getSignature: function(params)
	{
		var keys = []
		
		for(var i in params)
		{
			keys.push(i);
		}
		
		keys.sort();
		
		var resultString = this.SHARED_SECRET;

		for(var i in keys)
		{
			resultString += keys[i] + params[keys[i]];
		}
		
		var signature = this.md5(resultString);
		return signature;
	},
	
	getParamsString: function(params)
	{
		params.api_key = this.API_KEY;
		var signature = this.getSignature(params);

		params.api_sig = signature;

		
		var result = "";
		
		for(var i in params)
		{
			result += i + "=" + params[i] + "&";
		}
		return result;
	},
	
	md5 : function(string)
	{
		return calcMD5(string);
	},

	RTM_URL_PREFIX: "http://www.rememberthemilk.com/services/",
	RTM_AUTH : "auth/",
	RTM_REST: "rest/",
	API_KEY: "19e81069d6bcce22f6259f07378b4b77",
	SHARED_SECRET: "15d793f12aebd914"
}

