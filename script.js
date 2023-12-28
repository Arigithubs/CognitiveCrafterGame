document.addEventListener("DOMContentLoaded", function () {
    // JavaScript spells for initializing the game background and interactions

    const container = document.getElementById("gameContainer");

    // Core Interactions: Creating serene environment and adaptive puzzles
    createCalmingEnvironment();
    createAdaptivePuzzles();

    function createCalmingEnvironment() {
        // Enchant with soothing visuals and ambient sounds
        createParticles();
        createCelestialElements();
    }

    function createParticles() {
        // Enchant with gentle particles floating across the serene environment
        for (let i = 0; i < 10; i++) {
            createParticle();
        }

        function createParticle() {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            container.appendChild(particle);
        }
    }

    function createCelestialElements() {
        // Enchant with star constellations and gentle star trails
        for (let i = 0; i < 5; i++) {
            createConstellation();
            createStarTrail();
        }

        function createConstellation() {
            const constellation = document.createElement("div");
            constellation.className = "constellation";
            constellation.style.top = `${Math.random() * 100}vh`;
            constellation.style.left = `${Math.random() * 100}vw`;
            container.appendChild(constellation);
        }

        function createStarTrail() {
            const starTrail = document.createElement("div");
            starTrail.className = "star-trail";
            starTrail.style.top = `${Math.random() * 100}vh`;
            starTrail.style.left = `${Math.random() * 100}vw`;
            container.appendChild(starTrail);
        }
    }

    function createAdaptivePuzzles() {
        // Enchant with adaptive puzzles that start simple and increase in complexity
        // Code for creating adaptive puzzles goes here
    }
});
