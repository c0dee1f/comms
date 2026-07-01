const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

// Apply hacker text effect to anything with the .glitch-text class
document.querySelectorAll('.glitch-text').forEach(title => {
    title.addEventListener('mouseover', event => {
        let iterations = 0;
        
        // Clear any existing intervals if we hover back and forth quickly
        clearInterval(event.target.dataset.interval);
        
        event.target.dataset.interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    // Revert to original letter if we've passed it in the iteration
                    if(index < iterations) {
                        return event.target.dataset.text[index];
                    }
                    // Otherwise, pick a random hacker character
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");
            
            // Speed of the reveal
            if(iterations >= event.target.dataset.text.length){ 
                clearInterval(event.target.dataset.interval);
            }
            iterations += 1 / 3; 
        }, 30);
    });
});

// Console easter egg for the hacker vibe
document.addEventListener('DOMContentLoaded', () => {
    console.log("%cWARNING: UNAUTHORIZED ACCESS DETECTED", "color: red; font-family: monospace; font-size: 14px; font-weight: bold; text-decoration: line-through;");
    console.log("%cSYSTEM OVERRIDE SUCCESSFUL.\nWELCOME TO THE PARTY. ◅(´⌯⩊⌯`)▻", "color: #39ff14; font-family: monospace; font-size: 14px; font-weight: bold;");
});