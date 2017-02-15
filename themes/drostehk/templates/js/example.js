"use strict";

(function ($, window, document, undefined) {
    console.log("making a change3");
    var items = ["Business", "Design", "Clients", "Sourcing", "Investment", "Data"],
        $text = $( '#perspective span' ),
        delay = 2; //seconds
    
    var loop = function ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);   
                }
                $text.dequeue();
            });
            console.log("I'm loopin");
        });
    }
    console.log($text);
    loop( delay );
    console.log("run loop above");
})( jQuery, window, document );