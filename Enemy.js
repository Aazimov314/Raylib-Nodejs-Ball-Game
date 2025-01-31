import r from 'raylib';

export default class Enemy {

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        
        this.vx = (Math.random() - 0.5) * 25;  
        this.vy = (Math.random() - 0.5) * 25;  
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > 1200) this.vx = -this.vx;
        if (this.y < 0 || this.y > 900) this.vy = -this.vy;  
    }


    draw() {
        r.DrawCircle(this.x, this.y, this.radius, this.color);
    }

    CheckCollision(playerX, playerY) {
        let dx = this.x - playerX;
        let dy = this.y - playerY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + 20;  
    }
}
