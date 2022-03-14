
$(document).ready(function(){
$("#el1").draggable().resizable();

$("#sort1").sortable();

$("#el2, #el3").draggable();
$("#drop1").droppable({accept:"#el2, #el3"},{drop:function(){
$(this).addClass("ui-state-highlight");
$(this).html("Элемент был перемещен успешно!");}});

$("#drop2").droppable({accept:"#el3",activeClass:"dragh"},{drop:function(){
$(this).addClass("ui-state-highlight");
$(this).html("Элемент был перемещен успешно!");}});
  
});