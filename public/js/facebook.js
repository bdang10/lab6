function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  if (response.status === 'connected') {
  	console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
}
}

function changeUser(response) {
document.getElementById("fb:login-button").style.visibility="hidden";
document.getElementById(#name).text(response.name);
document.getElementById(#photo).attr("src",response.picture.data.url);
}