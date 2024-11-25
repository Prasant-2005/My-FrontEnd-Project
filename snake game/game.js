const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const boxSize = 20;
const rows = canvas.height / boxSize;
const cols = canvas.width / boxSize;

// Snake array and initial direction
let snake = [{x: 10, y: 10}];
let direction = {x: 0, y: 0};
let food = {x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
let score = 0;
let gameOver = false;

// Debug: Log canvas context and snake array
console.log("Canvas:", canvas);
console.log("Initial Snake Position:", snake);

// Draw the game components (snake, food, score)
function drawGame() {
    if (gameOver) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    snake.forEach(segment => {
        ctx.fillStyle = "lime";
        ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);

    // Move the snake
    moveSnake();

    // Check collisions with walls or itself
    checkCollision();

    // Check if the snake eats the food
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        // Increase the snake length
        snake.push({});
        // Reposition the food
        food = {x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
    }

    // Draw score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Move the snake
function moveSnake() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(head);
    snake.pop();
}

// Check for collisions
function checkCollision() {
    const head = snake[0];

    // Wall collision
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        gameOver = true;
        alert(`Game Over! Final Score: ${score}`);
    }

    // Self-collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            alert(`Game Over! Final Score: ${score}`);
        }
    }
}

// Handle keyboard input
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = {x: 0, y: -1};
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = {x: 0, y: 1};
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = {x: -1, y: 0};
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = {x: 1, y: 0};
            break;
    }
});

// Start the game loop
setInterval(drawGame, 100);
