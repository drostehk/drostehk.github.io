// ;(function($, window, document, undefined) {

// "use strict";

//   var items = ["Business", "Design", "Clients", "Sourcing", "Investment", "Data"],
//     $text = $('#perspective span'),
//     delay = 2; //seconds

//   var loop = function(delay) {
//     $.each(items, function(i, elm) {
//       $text.delay(delay * 1E3).fadeOut();
//       $text.queue(function() {
//         $text.html(items[i]);
//         $text.dequeue();
//       });
//       $text.fadeIn();
//       $text.queue(function() {
//         if (i == items.length - 1) {
//           loop(delay);
//         }
//         $text.dequeue();
//       });
//     });
//   }
//   loop(delay);
// })(jQuery, window, document);


