function autoDownload() {
    window.onload = function() {
        if(document.location.search == "?auto")
        document.getElementById('downloadLink').click();
    };
}