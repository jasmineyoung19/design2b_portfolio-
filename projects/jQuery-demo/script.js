$(document).ready(function() {
    //Write out functions for the sans-serif and monospace buttons and attach event listeners to them.
    
    $("#serif").click(makeSerif);

    $("#puppy").click(togglePuppy);

    $("#monospace").click(makemonospace);

    $("#sans-serif").click(makesansserif);

    function makeSerif() {
        $("p").css('font-family', 'serif');
    }

    function togglePuppy() {
        $(".image-container").toggleClass("toggled");
    }
});
    function makemonospace () {
       $("p").css('font-family', 'monospace');
    }

    function makesansserif () {
        $("p").css('font-family', 'sans-serif');
     }