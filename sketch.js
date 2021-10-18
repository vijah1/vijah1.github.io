var imgs = [];
var imageWidth;
var imageHeight;
var imageToUse = 0;

function preload() {
  imgs[0] = loadImage( "IMAGE NAME HERE" );
  imgs[1] = loadImage( "IMAGE NAME HERE" );
  imgs[2] = loadImage( "IMAGE NAME HERE" );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   Adjust frame rate
  frameRate(12);
  //   Adjust Image Size
  imageWidth = imgs[0].width / 5;
  imageHeight = imgs[0].height / 5;
  
  imgs[0].filter(GRAY);
  imgs[1].filter(GRAY);
  imgs[2].filter(GRAY);
  imageMode(CENTER);
}

function draw() {
  //   Change Background Color
  background(255,255,255,10);
  
  image(imgs[imageToUse], mouseX, mouseY,imageWidth, imageHeight);
  imageToUse = (imageToUse+1) % imgs.length;
}