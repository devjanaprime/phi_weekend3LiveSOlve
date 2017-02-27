// requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var  path = require( 'path' );

var port = 9027;

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( port, function(){
  console.log( 'we are gonna try something else on port:', port );
}); // end server up

// routes

// home base
app.get( '/', function( req, res ){
  console.log( 'home base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

// do math
app.post( '/math', function( req, res ){
  // receive the object from client
  console.log( 'in math post:', req.body );
  // determine the operator based on req.body.type
  // do the correct math
  if( req.body.type == 'add'){
    console.log( 'adding' );
    var answer = Number( req.body.x ) + Number( req.body.y );
  }
  else if( req.body.type == 'subtract'){
    console.log( 'subtracting' );
    answer = Number( req.body.x ) - Number( req.body.y );
  }
  else if( req.body.type == 'multiply'){
    console.log( 'multiplying' );
    answer = Number( req.body.x ) * Number( req.body.y );
  }
  else if( req.body.type == 'divide'){
    console.log( 'dividing' );
    answer = Number( req.body.x ) / Number( req.body.y );
  }
  console.log( answer );
  // return the answer in an object
  var objectToSend = {
    answer: answer
  }; // end objectToSend
  res.send( objectToSend );
}); // end do math
