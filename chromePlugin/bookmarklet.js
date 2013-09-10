(function()
{

	var host = 'm.rememberthemilk.com'
	var action = '/add'
	var selection
	if(window.getSelection)
	{
		selection = window.getSelection()
	}
	else if(document.getSelection)
	{
		selection = document.getSelection()
	}
	else if(document.selection)
	{
		selection = document.selection.createRange().text
	};

	var rtmUrl='http://' + host + action + '?name=' +
		((null == selection || selection == "" || selection == undefined)
			?encodeURIComponent(document.title)
			:selection) +
		'&url=' + encodeURIComponent(location.href)

	var rtmWindow = window.open(rtmUrl, 'addwindow',
		'status=no,toolbar=no,width=250,height=560,resizable=yes')
})();
