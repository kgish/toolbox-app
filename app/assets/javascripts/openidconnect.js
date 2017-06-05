$(function() {
    if ($('.openidconnect').length) {
        var clientInfo = {
            client_id: '@!FDE5.5990.3FE6.E7A6!0001!8BC6.A3A2!0008!582C.BDE4.B8E3.CA35',
            client_secret: '02c7f444-83e6-430b-9900-0545448296ad',
            redirect_uri: 'https://demo.participation.tools/openidcallback'
        };

        var scope_and_response_type = {
            scope: 'openid email permission profile',
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
