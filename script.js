/* Calming Aesthetics */
body {
    margin: 0;
    overflow: hidden;
}

.game-container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
    filter: brightness(110%);
    position: relative;
}

/* Particle Magic for Serene Environment */
.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffffff;
    border-radius: 50%;
    animation: float 8s infinite alternate;
}

@keyframes float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

/* Celestial Elements */
.constellation {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    opacity: 0.5;
}

.star-trail {
    position: absolute;
    width: 1px;
    height: 20px;
    background: #ffffff;
    opacity: 0.3;
    animation: twinkle 5s infinite alternate;
}

@keyframes twinkle {
    0% { opacity: 0.5; }
    100% { opacity: 0.3; }
}

/* Puzzle Styling */
.puzzle {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ffcc00;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s ease-in-out;
}

.puzzle:hover {
    transform: scale(1.2);
}
