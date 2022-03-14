$(document).ready(function() {
   $("#descr1").dialog({width:200,height:300,autoOpen:false});
    $("#descr2").dialog({modal:true,autoOpen:false});
   $("#descr3").dialog({autoOpen:false,buttons:{
      OK:function(){
         $(this).dialog("close");},
      Отмена:function(){
         $(this).dialog("close");}}
   });

   $("#but3").click(function(){
      $("#descr3").dialog("open"); 

   });
      $("#but2").click(function(){
      $("#descr2").dialog("open"); 
      
   });
         $("#but1").click(function(){
      $("#descr1").dialog("open"); 
      
   });
});