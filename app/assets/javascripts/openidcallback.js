//= require gluu/openidconnect.min

OIDC.restoreInfo();
var id_token = OIDC.getValidIdToken();
var access_token = OIDC.getAccessToken();
var tokenClaims = JSON.parse(OIDC.getIdTokenParts(id_token)[1]);
var userInfoClaims = JSON.parse(OIDC.getUserInfo(access_token));
var tokenClaimsHTMLString = JSONObjToHTMLTable(tokenClaims);
var userInfoClaimsHTMLString = JSONObjToHTMLTable(userInfoClaims);
OIDC.debug(true, id_token);

$(function() {
    document.getElementById("retrievedInfo").innerHTML = '<b>Id_token</b>' + tokenClaimsHTMLString +
        '\n<b>User Info</b>' + userInfoClaimsHTMLString;
});
