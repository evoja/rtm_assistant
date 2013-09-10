var openRtmWindow = function(tab, selection)
{
	var name = selection || tab.title

	var rtmUrl='http://m.rememberthemilk.com/add?name=' +
		encodeURIComponent(name) + '&url=' + encodeURIComponent(tab.url)

	window.open(rtmUrl, 'addwindow',
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
