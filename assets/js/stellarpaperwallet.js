$(document).ready(function(){

    if(document.location.protocol == 'https:') {
        warning  = '<div class="alert alert-warning" role="alert">';
        warning += '<strong>Warning: </strong>';
        warning += 'You appear to be running this generator off of a live website, which is not recommended for creating valuable wallets. Instead, use the download link at the bottom of this page to download the ZIP file from GitHub and run this generator offline as a "local" HTML file.';
        warning += '</div>';
        $('.local-warning .content').append(warning);

    } else if(document.location.protocol == 'http:') {

        warning  = '<div class="alert alert-danger" role="alert">';
        warning += '<strong>Danger: </strong>';
        warning += 'You appear to be running this generator off of a live, *insecure* website, which is not recommended for creating valuable wallets. Instead, use the download link at the bottom of this page to download the ZIP file from GitHub and run this generator offline as a "local" HTML file.';
        warning += '</div>';
        $('.local-warning .content').append(warning);

    } else {
         // local file
    }

});

$(window).resize(function(){
    resize_wallet_text()
});


function resize_wallet_text() {
    $('div.wallet > .content > div > .key').css({'font-size': ($('div.wallet').height()/30)+'px' });
}
