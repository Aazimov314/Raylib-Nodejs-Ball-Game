import r from "raylib";
import Ball from "./Ball.js";
import Enemy from "./Enemy.js";

let collision = false;
const screenWidth = 1200;
const screenHeight = 900;

r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
r.SetTargetFPS(60);

const ball = new Ball(screenWidth / 2, screenHeight / 2, 20, 5, r.WHITE);


const enemies = [];

for (let i = 0; i < 6; i++) {
    const E_x = Math.random() * screenWidth;
    const E_y = Math.random() * screenHeight;
    enemies.push(new Enemy(E_x, E_y, 20, r.RED));
}


while (!r.WindowShouldClose()) {
    
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    

    ball.draw();
    ball.move();


    for (let enemy of enemies) {
        enemy.draw();
        enemy.move();

        if (enemy.CheckCollision(ball.x, ball.y)) {
            collision = true;
        }
    }


    if (collision) {
        r.DrawText("Collision", 480, 350, 65, r.MAROON);
        
        ball.x = screenWidth / 2;
        ball.y = screenHeight / 2;


        for (let enemy of enemies) {
            enemy.vx = 0;
            enemy.vy = 0;
        }
        if(r.GuiButton(r.Rectangle(500, 450, 200, 50), "Restart Game")) {
            Reset();
        }
    }


    r.DrawText("FPS : " + r.GetFPS(), 10, 10, 20, r.MAROON);

    r.EndDrawing();
}

r.CloseWindow();

function Reset(){
    ball.x = screenWidth / 2;
    ball.y = screenHeight / 2;
    for (let enemy of enemies) {
        enemy.x = Math.random() * screenWidth;
        enemy.y = Math.random() * screenHeight;
        enemy.vx = (Math.random() - 0.5) * 25;
        enemy.vy = (Math.random() - 0.5) * 25;
        enemy.move();
    }
    collision = false;
}
