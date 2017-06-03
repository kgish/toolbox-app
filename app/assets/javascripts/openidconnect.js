$(function() {
    if ($('.openidconnect').length) {
        var clientInfo = {
            client_id: '@!FDE5.5990.3FE6.E7A6!0001!8BC6.A3A2!0008!0EBC.3A8D.EBD4.2C37',
            client_secret: 'b63221fe-d417-4956-a6c5-3698b30be2bf',
            redirect_uri: 'https://demo.participation.tools/openidcallback'
        },
        scope_and_response_type = {
            scope: 'openid profile email clientinfo user_name',
            response_type: 'token id_token'
        };

        var providerInfo = OIDC.discover('https://sso.participation.tools');
        OIDC.setClientInfo(clientInfo);
        OIDC.setProviderInfo(providerInfo);
        OIDC.storeInfo(providerInfo, clientInfo);

        // Remove State and Nonce from previous session
        sessionStorage.removeItem('state');
        sessionStorage.removeItem('nonce');

        loginRequest = OIDC.generateLoginRequest(scope_and_response_type);

        // Enable word wrap for long url.
        loginRequest.url = loginRequest.url.replace(/([?&])/g, '<br/>$1');

        $('#clientInfo').html(JSONObjToHTMLTable(clientInfo));
        $('#loginRequest').html(JSONObjToHTMLTable(loginRequest));

        $('#authenticate').click(function () {
            OIDC.login(scope_and_response_type);
        });

        var toggle = $('#toggle');
        toggle.click(function () {
            var contents = $('#toggle-contents');
            if (contents.length) {
                var fa = toggle.find('.fa');
                if (contents.hasClass('hide-me')) {
                    contents.removeClass('hide-me');
                    fa.removeClass('fa-caret-down');
                    fa.addClass('fa-caret-up');
                } else {
                    contents.addClass('hide-me');
                    fa.removeClass('fa-caret-up');
                    fa.addClass('fa-caret-down');
                }
            } else {
                console.error('Cannot find toggle-contents!');
            }

        });
    }
});
