import r from "raylib";

export default class Ball {
    constructor(x, y, radius, speed, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.speed = speed
        this.color = color
    }

    move() {
        if (r.IsKeyDown(r.KEY_RIGHT)) this.x += this.speed
        if (r.IsKeyDown(r.KEY_LEFT)) this.x -= this.speed
        if (r.IsKeyDown(r.KEY_UP)) this.y -= this.speed
        if (r.IsKeyDown(r.KEY_DOWN)) this.y += this.speed
    }

    draw() {
        r.DrawCircle(this.x, this.y, this.radius, this.color)
    }
}
