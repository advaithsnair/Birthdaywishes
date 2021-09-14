var canvas= new fabric.canvas ('myCanvas')
var x=document.getElementById('myAudio')


function newimage(){

    fabric.Image.fromURL('https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_960_720.jpg', function(Img) {
        block_image_object = Img;

        block_image_object.scakeToWidth (700);
        block_image_object.scakeToHeight (510);
        block_image_object.set({

            top:0
            left:0
        )};
        canvas.add(block_image_object);
        )};



}

function playSound(){
	x.play();
}