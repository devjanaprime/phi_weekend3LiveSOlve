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
  console.log( 'in math post:', req.body );
  res.send( 'ribbet' );
}); // end do math
