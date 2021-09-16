noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Sxbhrfxx/Clown-Nose-PNG-Image.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        image(clown_nose, noseX, noseY, 30, 30);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    /*fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);*/
}

function take_snapshot(){
    save('myFilterImage.png');
}

