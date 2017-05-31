$(function() {
    if ($('.openidconnect').length) {
        var clientInfo = {
            //                client_id : '(your-client-id)',
            redirect_uri: 'https://demo.participation.tools/openidcallback'
        };

        console.log('providerInfo');
        var providerInfo = OIDC.discover('https://sso.participation.tools');
        console.log(JSON.stringify(providerInfo));
        console.log('setClientInfo');
        OIDC.setClientInfo(clientInfo);
        console.log('setProviderInfo');
        OIDC.setProviderInfo(providerInfo);
        console.log('storeInfo');
        OIDC.storeInfo(providerInfo, clientInfo);
        // Remove State and Nonce from previous session
        sessionStorage.removeItem('state');
        sessionStorage.removeItem('nonce');
        console.log('sessionStorage=' + JSON.stringify(sessionStorage));
        console.log('loginRequest');
        loginRequest = OIDC.generateLoginRequest({
            scope: 'openid profile email',
            response_type: 'token id_token'
        });
        console.log(JSON.stringify(loginRequest));

        setTimeout(function(){

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

        }, 1000);
    }
});
