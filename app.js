$(document).ready(function() {
    $("#colors").submit(function(event) {
     event.preventDefault ();
     var color = $("#color").val();
     $('body').css('background-color', color);
     console.log(color);
    });

    $("#sign-in").submit(function(event) {
        event.preventDefault ();
        var name = prompt("hey tell me you name");
        alert ("Welcome " + name + " you are my friend!");
    });

    $("#show").click(function(event) {
        event.preventDefault ();
        $("#hidden").toggle();
    });

    $("#remove").submit(function(event){
        event.preventDefault();
        $("#remove").remove();
    })



});

