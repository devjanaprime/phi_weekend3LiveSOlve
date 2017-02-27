$( document ).ready( function(){
  var num0 = '';
  var num1 = '';
  var operator = '';
  var captureNum1 = false;

  $( '#clearButton' ).on( 'click', function(){
    // set defaults
    num0 = '';
    num1 = '';
    operator = '';
    captureNum1 = false;
    // clear answer
    $( '#outputP' ).text('');
  });

  $( '#equalsButton' ).on( 'click', function(){
    console.log( 'in equalsButton on click' );
    // assemble the object to send to the server
    var objectToSend = {
      x: num0,
      y: num1,
      type: operator
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    $.ajax({
      type: 'POST',
      url: '/math',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from ajax with:', response );
        // receive an answer - response.answer
        // display answer on DOM
        $( '#outputP' ).text( response.answer );
      }
    }); // end ajax
  }); // end equalsButton on click

  $( '.operatorButton' ).on( 'click', function(){
    // what type of operator is this?
    var myOperator = $( this ).data( 'operator' );
    console.log( 'in operator button click', myOperator );
    operator = myOperator;
    // is num0 != ''
    if( num0 != '' ){
      // time to start capturing num1
      captureNum1 = true;
    }
  }); // end operator button click

  $( '.numberButton' ).on( 'click', function(){
    // get my number
    var myNumber = $( this ).data( 'number' );
    console.log( 'in numberButton on click', myNumber );
    // concatenate on to existing number
    if( captureNum1 ){
      num1 = num1 + myNumber;
    }
    else{
      num0 = num0 + myNumber;
    }
    console.log( 'num0:', num0, 'num1:', num1 );
    // it's Luke's fault that I'm hungry, nom init
  }); // end numberButton on click
}); // end doc ready
