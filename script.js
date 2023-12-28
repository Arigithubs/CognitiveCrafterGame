// script.js

document.addEventListener("DOMContentLoaded", function () {
    // JavaScript spells for initializing the game background

    const container = document.getElementById("gameContainer");

    // Add celestial elements (constellations, star trails, particles) dynamically
    for (let i = 0; i < 10; i++) {
        createCelestialElement("constellation");
        createCelestialElement("star-trail");
        createParticle();
    }

    function createCelestialElement(className) {
        const element = document.createElement("div");
        element.className = className;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        container.appendChild(element);
    }

    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        container.appendChild(particle);
    }
});
