$(function() {
    if ($('.openidconnect').length) {
        var clientInfo = {
            client_id : '@!1CC2.141B.EF85.BF6A!0001!C152.7133!0008!BD95.BEAA.7ACA.ED65',
            redirect_uri: 'https://demo.participation.tools/openidcallback'
        };

        //console.log('providerInfo');
        var providerInfo = OIDC.discover('https://sso.participation.tools');
        //console.log(JSON.stringify(providerInfo));
        //console.log('setClientInfo');
        OIDC.setClientInfo(clientInfo);
        //console.log('setProviderInfo');
        OIDC.setProviderInfo(providerInfo);
        //console.log('storeInfo');
        OIDC.storeInfo(providerInfo, clientInfo);
        // Remove State and Nonce from previous session
        sessionStorage.removeItem('state');
        sessionStorage.removeItem('nonce');
        //console.log('sessionStorage=' + JSON.stringify(sessionStorage));
        //console.log('loginRequest');
        loginRequest = OIDC.generateLoginRequest({
            scope: 'openid profile email',
            response_type: 'token id_token'
        });
        //console.log(JSON.stringify(loginRequest));

        // Enable word wrap for long url.
        loginRequest.url = loginRequest.url.replace(/([?&])/g, '<br/>$1');

        $('#clientInfo').html(JSONObjToHTMLTable(clientInfo));
        $('#loginRequest').html(JSONObjToHTMLTable(loginRequest));

        $('#authenticate').click(function () {
            OIDC.login({scope: 'openid profile email', response_type: 'token id_token'});
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
