async function isArcOptOut() {
    var frameObj     = null
    var frameContent = ''
    var promise = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            frameObj     = document.getElementById('arc-popper-iframe')
            frameContent = frameObj.contentWindow.document.body.innerHTML.toString()
            resolve('done!');
        }, 300);
    });
    await promise
    return !frameContent.toLowerCase().includes('opt out')
}
