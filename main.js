leftWrist = 0
rightWrist = 0
difference = 0

function setup() {
  video = createCapture(VIDEO)
  video.size(500, 500)
  canvas = createCanvas(500, 500)
  canvas.position(550, 100)
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log('Model has loaded')
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)

    leftWrist = results[0].pose.leftWrist.x
    rightWrist = results[0].pose.rightWrist.x
    difference = floor(leftWrist - rightWrist)
  }
}

function draw() {
  background('darkgray')
  document.getElementById('fontsize').innerHTML =
    'Font size of the text will be ' + difference + 'px'
  textSize(difference)
  fill('lightred')
  text('Malika', 50, 300)
}
