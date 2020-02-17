var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$yp += (($mouseY - $yp- ($("#paddle").height()/2))/50);
$("#paddle").css({ top:$yp +'px'});  
$("#output").text($yp);
}, 30);
