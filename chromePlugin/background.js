var openRtmWindow = function(tab, selection)
{
	var rtmHost = 'm.rememberthemilk.com'
	var rtmAction = '/add'
	var url = tab.url
	var name = selection || tab.title

	var rtmUrl='http://' + rtmHost + rtmAction + '?name=' +
			encodeURIComponent(name.toString()) +
		'&url=' + encodeURIComponent(url)

	var rtmWindow = window.open(rtmUrl, 'addwindow',
		'status=no,toolbar=no,width=250,height=560,resizable=yes')

}

chrome.browserAction.onClicked.addListener(function(tab)
{
	chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"},
		function(result)
		{
			openRtmWindow(tab, result && result[0])
		})
});
