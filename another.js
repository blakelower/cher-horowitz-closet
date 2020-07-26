var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();
var p5 = new Image();
var p6 = new Image();
var p7 = new Image();
var p8 = new Image();

p1.src="./images/download.jpg";
p2.src="./images/download-4.jpg";
p3.src="./images/img4.jpg";
p4.src="./images/download-5.jpg";
p5.src="./images/download-4.jpg";
p6.src="./images/img3.jpg";
p7.src="./images/img1.jpg";

var imgArray2 = new Array(p1, p2, p3, p4, p5, p6, p7);

var counter = 0;
var end = imgArray2.length - 1;


function scroll_back() {
    if (counter == 0){
    } else {
        counter--;
    }
    document.pic2.src = imgArray2[counter].src;
}

function scroll_for(){
    if (counter == end){
    } else {
        counter++;
    }
    document.pic2.src = imgArray2[counter].src;
}