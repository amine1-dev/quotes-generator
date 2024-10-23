document.getElementById('copy-quote').addEventListener('click', function() {
    const quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
        document.getElementById('copy-quote').innerHTML = 'Copied';
        setTimeout(function(){
            document.getElementById("copy-quote").innerHTML='copy Quote';

        },2000);


        const card = document.getElementById("copy-card");
        card.style.display = "block";
        setTimeout(function() {
            card.style.opacity = "1"

        }, 10);
        setTimeout(function(){
            card.style.opacity = "0";
            setTimeout(function(){
                card.style.display = "none";
                
            }, 500)

        },2000
    );

    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});
