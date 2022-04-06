function redirect (link){
    window.location.href=link
}

$('#view-informacije').on('click', function(){
    const images = $('#informacijeOProizvodima').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1600);
});

$('#view-ponuda').on('click', function(){
    const images = $('#ponuda').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1600);
});

$('#view-iskustva').on('click', function(){
    const images = $('#iskustva').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1600);
});
