var s;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
    s.show();
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function() {
        FileList(255);
        rect(this.x, this.y, 10, 10);
    }
}