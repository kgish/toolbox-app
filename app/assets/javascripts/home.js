$(function() {

    // Make all card heights equal so looks nicer.
    var maxh = 0;
    $('.card').each(function() {
        var h = $(this).height();
        if (maxh < h) {
            maxh = h;
        }
    });
    $('.card').each(function() {
        $(this).height(maxh);
    });
});
