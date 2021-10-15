var canvas;
var mustarX=0;
var mustarY=0;


function preload(){
  img=loadImage("https://i.postimg.cc/7PzBtjnY/m.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    md=ml5.poseNet(video,load_model);
    md.on("pose", get_coor );
}

function draw(){
    image(video,0,0,300,300);
    image(img,mustarX-20,mustarY-0,40,20)
    
    
    }
    
    function load_model(){
        console.log("model loaded");
    }

function onClick(){
    save("mymustache.png");
}

function get_coor(results){
    if(results.length>0){
    console.log(results);
    console.log("nose X postition="+results[0].pose.nose.x);
    console.log("nose Y postition="+results[0].pose.nose.y);
    mustarX=results[0].pose.nose.x;
    mustarY=results[0].pose.nose.y;
    }
}

