noseX=""
noseY=""
img=""

function preload() {
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
   canvas=createCanvas(500,500)
   canvas.center() 
   video=createCapture(VIDEO)
   video.size(500,500)
   video.hide()
   posenet=ml5.poseNet(video,modelloaded)
   posenet.on("pose",gotposes)
}

function draw() {
    image(video,0,0,500,500)
    image(img,noseX-30,noseY-10,70,70)
}

function snapshot() {
    save("haha.png")
}

function modelloaded() {
    console.log("Model has been loaded")
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results)
        console.log("nosex= "+ results[0].pose.nose.x) 
        console.log("nosey= "+ results[0].pose.nose.y)
        noseY=results[0].pose.nose.y
        noseX=results[0].pose.nose.x
    }
}
