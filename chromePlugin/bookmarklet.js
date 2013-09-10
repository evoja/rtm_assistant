(function()
{
	var selection = ""
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

	return selection.toString()
})();
