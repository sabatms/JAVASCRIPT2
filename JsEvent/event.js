function changeText(id){
         return id.innerHTML  = "Suche a Wooow!";
}

console.log(changeText(id));

function displayDate() {
          document.getElementById("demo").innerHTML = Date();
}

console.log(displayDate());

function checkCookies() {
          var text = "";
          if (navigator.cookieEnabled == true) {
            text = "Cookies are enabled.";
          } else {
            text = "Cookies are not enabled.";
          }
          document.getElementById("demo").innerHTML = text;
}
console.log(checkCookies());