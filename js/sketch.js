let cnv;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('sketch');
}

function draw() {
    background(20, 40, 217);
}

function windowResized() {
    cnv = createCanvas(windowWidth, windowHeight);
}
