// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

    $('.choose-file input[type=file]').change(function(evt) {
        var files = evt.target.files; // FileList object

        var img = $('.photo-placeholder');
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
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    });
});
