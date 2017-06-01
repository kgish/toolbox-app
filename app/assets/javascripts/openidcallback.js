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

        // setTimeout(function(){
            $('#tokenClaims').html(tokenClaimsHTMLString);
            $('#userInfoClaims').html(userInfoClaimsHTMLString);
        // }, 1000);
    }
});
