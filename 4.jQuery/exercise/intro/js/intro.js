$(function () { //Wrapper for the whole JS file.
    ///////////// Intro //////////////

    // $(console.log("Hello World!"));

    // $('h1').click(function () {
    //     $(this).remove();
    // });


    /////////////// Selecting ////////////////

    // $('ul li:first').addClass('about');
    // $('ul li').addClass('to-upper-case');
    // $('ul li:last').addClass('active');
    // $('ul li:eq(2)').addClass('bg-color')

    var imgUrls = ['img/matip.jpg', 'img/milner.jpg', 'img/origi.jpg', 'img/robertson.jpg', 'img/salah.jpg', 'img/vanDijk.jpg'];

    for (var i = 0; i < imgUrls.length; i++) {
        var image = $('<img>');
        $(image).attr("src", imgUrls[i]);
        if (i < 3) {
            $("#firstDiv").append(image);
        } else {
            $("#secDiv").append(image);
        }
    }

    var f = $('#firstDiv img:first-child');
    f.addClass('selected');

    function toggleBorders() {

        $('.selected').removeClass('selected');
        var z = $('#secDiv img:eq(1)');
        z.addClass('selected');
    }

    setTimeout(toggleBorders, 2000);

}); //Wrapper end.