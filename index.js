

canvas = new fabric.Canvas('canvas');

document.getElementById('imgLoader').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('loaded');
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff
            
            var image = new fabric.Image(imgObj);
            image.set({
                left: 250,
                top: 250,
                angle: 20,
                padding: 10,
                cornersize: 10
            });
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.add(image);
            
            // end fabricJS stuff
        }
        
    }
    reader.readAsDataURL(e.target.files[0]);
}

$(canvas.wrapperEl).on('mousewheel', function(e) {
    var target = canvas.findTarget(e);
    var delta = e.originalEvent.wheelDelta / 120;

    if (target) {
        target.scaleX += delta;
        target.scaleY += delta;
        
        // constrain
        if (target.scaleX < 0.1) {
            target.scaleX = 0.1;
            target.scaleY = 0.1;
        }
        // constrain
        if (target.scaleX > 10) {
            target.scaleX = 10;
            target.scaleY = 10;
        }
        target.setCoords();
        canvas.renderAll();
        return false;
    }
});
  

// $(canvas.wrapperEl).on('mousemove', function(e) {{
//     console.log('Event object:modified Triggered');
//   });
  