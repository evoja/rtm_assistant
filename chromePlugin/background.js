let lastResizeMessageInput = undefined
let isSavingResizeMessage = false
const POSITION = 'position'

function isValidCoord(coord) {
	return typeof coord === 'number' && !isNaN(coord)
}

function validateResizeMessage(message) {
	if ( !message
		|| !isValidCoord(message.outerWidth)
		|| !isValidCoord(message.outerHeight)
		|| !isValidCoord(message.screenX)
		|| !isValidCoord(message.screenY)
	) {
		return undefined
	}

	return {
		outerWidth: message.outerWidth,
		outerHeight: message.outerHeight,
		screenX: message.screenX,
		screenY: message.screenY,
	}
}

function saveResizeMessage() {
	if (isSavingResizeMessage) {
		return
	}

	const position = validateResizeMessage(lastResizeMessageInput)
	if (!position) {
		return
	}

	isSavingResizeMessage = true
	lastResizeMessageInput = undefined

	chrome.storage.local.set({[POSITION]: position}, () => {
		isSavingResizeMessage = false
		saveResizeMessage()
	})
}

function handleRtmPopupResize(message) {
	lastResizeMessageInput = message
	saveResizeMessage()
}

var openRtmWindow = function(tab, selection)
{
	var name = selection || tab.title

	const rtmUrl='https://m.rememberthemilk.com/add?name=' +
		encodeURIComponent(name) + '&url=' + encodeURIComponent(tab.url)

	chrome.storage.local.get([POSITION], data => {
		const position = validateResizeMessage(data && data[POSITION])
		const {outerWidth, outerHeight, screenX, screenY} = position || {}
		const width = Math.max(320, outerWidth || 0)
		const height = Math.max(600, outerHeight || 0)
		const left = screenX || 0
		const top = screenY || 0
		window.open(rtmUrl, 'addwindow',
		`status=no,toolbar=no,width=${width},height=${height},top=${top},left=${left},resizable=yes`
		)
	})
}

chrome.browserAction.onClicked.addListener(function(tab)
{
	chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"},
		function(result)
		{
			openRtmWindow(tab, result && result[0])
		})
});

chrome.runtime.onMessage.addListener(handleRtmPopupResize)
