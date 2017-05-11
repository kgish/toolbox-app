// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootsy
//= require dhtmlxgantt/dhtmlxgantt
//= require_tree .


$(function() {
    // Increase page padding-top to accomodate theme-banner of present.
    var theme_banner = $('.theme-banner');
    if (theme_banner.length) {
        var body = $('body'),
            padding_top = parseInt(body.css('padding-top')),
            outer_height = parseInt(theme_banner.outerHeight());
        body.css('padding-top', padding_top + outer_height);
    }

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
