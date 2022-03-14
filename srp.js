$(document).ready(function() {
   $("#but1").click(function(){
      $("#container1").effect("bounce",{},1000 );
	  $("#container2").effect("pulsate",{},1000 );
   });
   $("#but2").click(function(){
      $("#container1").effect("explode",{},1000 );
	  $("#container2").hide("puff",{},1000 );
   });
    $("#but3").click(function(){
      $("#container1").show("slide",{},1000 );
	  $("#container2").show("drop",{},1000 );
   });
});