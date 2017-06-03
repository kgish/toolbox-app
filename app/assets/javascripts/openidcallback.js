$(function() {
    if ($('.openidcallback').length) {

        OIDC.restoreInfo();
        var id_token = OIDC.getValidIdToken();
        var access_token = OIDC.getAccessToken();
        var tokenClaims = JSON.parse(OIDC.getIdTokenParts(id_token)[1]);
        var userInfoClaims = JSON.parse(OIDC.getUserInfo(access_token));
        var tokenClaimsHTMLString = JSONObjToHTMLTable(tokenClaims);
        var userInfoClaimsHTMLString = JSONObjToHTMLTable(userInfoClaims);
        OIDC.debug(true, id_token);

        $('#tokenClaims').html(tokenClaimsHTMLString);
        $('#userInfoClaims').html(userInfoClaimsHTMLString);

        var url = '/openiduserinfo',
            json = { userinfo: userInfoClaims };

        $.post(url, json, function (data, status, jqxhr) {
            if (status === 'success') {
                console.log('POST '+url+' => OK, data='+JSON.stringify(data));
            } else {
               console.error('POST '+url+' => NOK (status='+jqxhr.status+', statusText='+jqxhr.statusText+', responseText='+jqxhr.responseText+')');
            }
            // After (attempted) login go to the homepage.
            // window.location.href = "/";
        });
    }
});
