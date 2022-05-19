var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://type.fit/api/quotes");
httpRequest.send();

var quotes;
httpRequest.addEventListener("readystatechange", function () {
  if (httpRequest.readyState == 4) {
    quotes = JSON.parse(httpRequest.response);
  }
});
function getQuotes() {
  var quote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML =
    ' " ' + quotes[quote].text + ' " ';
  if (quotes[quote].author != null) {
    document.getElementById("author").innerHTML =
      " ' - " + quotes[quote].author + " - ' ";
  } else {
    quotes[quote].author = "Pearl Buck";
    document.getElementById("author").innerHTML =
      " ' - " + quotes[quote].author + " - ' ";
  }
}
/* 1643 Quotes */