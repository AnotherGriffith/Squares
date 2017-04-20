(function () {
    'use strict';
    var el = document.getElementById('canvassquare'),
        
        // default font-size is used to calculate em to pixel for canvas
        fontSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size')),
        canvas = document.getElementById('canvassquare'),
        ctx = canvas.getContext('2d'),
        //em to px conversion
        borderWidth = 2 * fontSize,
        squareWidth = 5 * fontSize;
    ctx.lineWidth = borderWidth;
    
     //draw inside of square
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, squareWidth, squareWidth);
    
    //draw the border
    ctx.strokeStyle = "blue";
    ctx.strokeRect(fontSize, fontSize, squareWidth, squareWidth);
}());