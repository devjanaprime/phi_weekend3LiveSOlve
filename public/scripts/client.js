$( document ).ready( function(){
  console.log( 'JQ' );

  /// TEST POST ROUTE
  var objectToSend = {
    test: 'buzzzzzzz'
  }; // end object to send

  $.ajax({
    type: 'POST',
    url: '/math',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from ajax with:', response );
    }
  }); // end ajax
  /// END TEXT POST 
}); // end doc ready
