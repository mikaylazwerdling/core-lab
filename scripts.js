// This is where the javascript will live.
// Using Chrome developer tools, if you look at the console, you can see the message appearing on the console.

$( function() {
    $( ".draggable" ).draggable({
        stack: ".draggable",
        containment: ".container"
    });

    // toggle switch
    $(".switch").click( function(){
        $(".container").toggleClass("darkmode");
    })

    // image appear on hover
    $(".hoverme").mouseover( function(){
        $(".no").css("display", "block");
    })

        // image appear on mouse out
    $(".hoverme").mouseout( function(){
        $(".no").css("display", "none");
    })

    // display hidden text
    $(".clickme").click( function(){
        $(".extra").fadeToggle("hide");
    })

    //animate circle
    $(".circle").mouseover( function(){
         $(".circle").animate({
             backgroundColor: "red",
             width: "250px",
             height: "250px",

         });
     })

  } );
