window.getSelection     ? window.getSelection().toString()
: document.getSelection ? document.getSelection().toString()
: document.selection    ? document.selection.createRange().text
: ""

