// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

    $('.choose-file input[type=file]').change(function(evt) {
        var files = evt.target.files; // FileList object

        var img = $('#user_photo');

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    img.attr('src', e.target.result);
                    img.attr('title', theFile.name);
                    img.width(100);
                    img.height(100);
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    });

    // <span id="toggle-button" class="btn btn-success">Change Password <%= fa_icon 'arrow-down' %></span>
    // <div id="toggle-target" class="hide-me"
    // ...
    // </div>
    var btn = $('#toggle-button');
    if (btn.length) {
        btn.click(function(){
            var fa = btn.find('i'),
                div = $('#toggle-target');
            if (fa.hasClass('fa-arrow-down')) {
                fa.removeClass('fa-arrow-down');
                fa.addClass('fa-arrow-up');
                div.removeClass('hide-me');
            } else {
                fa.removeClass('fa-arrow-up');
                fa.addClass('fa-arrow-down');
                div.addClass('hide-me');
            }
        });
    }
});
