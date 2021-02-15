function handleRtmPopupResize() {
  chrome.runtime.sendMessage({
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      screenX: window.screenX,
      screenY: window.screenY,
    }
  )
}

window.addEventListener('resize', handleRtmPopupResize)
window.addEventListener('beforeunload', handleRtmPopupResize)
