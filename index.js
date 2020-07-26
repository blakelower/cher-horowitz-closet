var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();
var p5 = new Image();
var p6 = new Image();
var p7 = new Image();
var p8 = new Image();

p1.src="./images/download.jpg";
p2.src="./images/download-1.jpg";
p3.src="./images/download-2.jpg";
p4.src="./images/images.jpg";
p5.src="./images/images-1.jpg";
p6.src="./images/images-2.jpg";
p7.src="./images/images-3.jpg";
// p8.src="./images/images-5.jpg";

var imgArray = new Array(p1, p2, p3, p4, p5, p6, p7);

var counter = 0;
var end = imgArray.length - 1;


function scroll_backward() {
    if (counter == 0){
    } else {
        counter--;
    }
    document.pic1.src = imgArray[counter].src;
}

function scroll_forward(){
    if (counter == end){
    } else {
        counter++;
    }
    document.pic1.src = imgArray[counter].src;
}