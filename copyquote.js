
document.getElementById('copy-quote').addEventListener('click', function() {
    const quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
        alert('Quote copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
