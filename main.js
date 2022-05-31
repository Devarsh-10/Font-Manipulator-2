font_size() = "";

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(450,450);
    canvas.position(560,235);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded!");
}

function draw()
{
    background('#B5F4EB');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}