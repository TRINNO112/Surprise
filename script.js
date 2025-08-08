document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const loadingScreen = document.querySelector(".loading-screen");
    const partyScreen = document.querySelector(".party-screen");
    const openBtn = document.getElementById("open-btn");
    const progressFill = document.querySelector(".progress-fill");

    // Load confetti library
    const confettiSettings = { target: 'confetti-canvas', max: 120, size: 1.2, animate: true, props: ['circle', 'square'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 30 };
    let confettiCanvas = document.getElementById('confetti-canvas');
    let confettiInstance;

    function startConfetti() {
        confettiInstance = new ConfettiGenerator(confettiSettings);
        confettiInstance.render();

        // Stop after 15 seconds
        setTimeout(() => {
            confettiInstance.clear();
        }, 15000);
    }

    openBtn.addEventListener("click", () => {
        // Hide intro, show loading
        introScreen.classList.add("hidden");
        loadingScreen.classList.remove("hidden");

        let progress = 0;
        let loadingInterval = setInterval(() => {
            progress += 2;
            progressFill.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(loadingInterval);
                loadingScreen.classList.add("hidden");
                partyScreen.classList.remove("hidden");
                startConfetti(); // start when party appears
            }
        }, 100);
    });
});
