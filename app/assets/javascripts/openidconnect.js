$(function() {
    if ($('.openidconnect').length) {
        var clientInfo = {
            client_id: gon.openid.client_id,
            client_secret: gon.openid.client_secret,
            redirect_uri: gon.openid.redirect_uri
        };

        var scope_and_response_type = {
            scope: gon.openid.scope,
            response_type: gon.openid.response_type
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
