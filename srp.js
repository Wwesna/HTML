$(document).ready(function() {
   $("#but4").click(function(){
      $("#square").animate({
         backgroundColor:'#ff0000',
         width:3,},1500);
   });
   $("#but5").click(function(){
          $("#square").animate({
         backgroundColor:'#8b4513',
         width:90
        },1500);
   });
    $("#but6").click(function(){
           $("#square").animate({
             borderColor:'black',
             color:'black',
         backgroundColor:'  #808080',
         width:90
         },1500);
   });
});