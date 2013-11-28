$(document).ready(function() {

$("#messagesBody").slideToggle("fast"); // The Body of "Messages" is already opened.

  $("#dashboard").click(function(){
    $(".tab").css("background","#ffffff");
    $(".tab h3").css("color","#363a3d");
    $(".tab .notification").css("background","#dcdddf");
    $(this).css("background","#df4f37");
    $("#dashboard h3").css("color","#ffffff");
    $("#dashboard .notification").css("background","#c9412b");
    $(".tabBody").slideUp("fast");
    $("#dashboardBody").slideToggle("fast");
  });
  $("#profile").click(function(){
    $(".tab").css("background","#ffffff");
    $(".tab h3").css("color","#363a3d");
    $(".tab .notification").css("background","#dcdddf");
    $(this).css("background","#df4f37");
    $("#profile h3").css("color","#ffffff");
    $("#profile .notification").css("background","#c9412b");
    $(".tabBody").slideUp("fast");
    $("#profileBody").slideToggle("fast");
  });
  $("#messages").click(function(){
    $(".tab").css("background","#ffffff");
    $(".tab h3").css("color","#363a3d");
    $(".tab .notification").css("background","#dcdddf");
    $(this).css("background","#df4f37");
    $("#messages h3").css("color","#ffffff");
    $("#messages .notification").css("background","#c9412b");
    $(".tabBody").slideUp("fast");
    $("#messagesBody").slideToggle("fast");
  });
  $("#settings").click(function(){
    $(".tab").css("background","#ffffff");
    $(".tab h3").css("color","#363a3d");
    $(".tab .notification").css("background","#dcdddf");
    $(this).css("background","#df4f37");
    $("#settings h3").css("color","#ffffff");
    $("#settings .notification").css("background","#c9412b");
    $(".tabBody").slideUp("fast");
    $("#settingsBody").slideToggle("fast");
  });



});