var heading = document.getElementById( 'h1' );

heading.addEventListener( "click", function() {
    var myElement = document.createElement( 'article' )
    myElement.innerHTML = '<p>This is click number x(++click)</p>';
    document.getElementsByClassName( 'container' )[0].appendChild( myElement)
});
