//TOGGLE MENU
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const body = document.body;
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
    hamburger.classList.toggle("active"); // Toggle X animation
}

//SCROLL TO TOP
window.onscroll = function() {
    toggleScrollButton();
};

function toggleScrollButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//SMOOTH SCROLL

const sections = document.querySelectorAll(".section");

const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();


//CURSOR ANIMATION EFFECT
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    // Position the sparkle at the cursor location
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    // Random size and rotation
    const size = Math.random() * 12 + 8; // Random size between 8px and 20px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 500);
});

//SOUND EFFECTS
function playHoverSound() {
    const hoverSound = new Audio("sounds/pop.mp3"); 
    hoverSound.volume = 0.5; 
    hoverSound.play().catch(error => console.log("Sound play error:", error)); 
}

// Apply event listener to elements with 'hover-effect' class
document.querySelectorAll(".hover-effect").forEach((element) => {
    element.addEventListener("mouseenter", playHoverSound);
});

const hoverSound = new Audio("sounds/pop.mp3"); 
hoverSound.preload = "auto";

function playHoverSound() {
    hoverSound.currentTime = 0; 
    hoverSound.play();
}


//MUSIC TOGGLE 
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const icon = document.getElementById("musicIcon");

    if (music.paused) {
        music.play();
        icon.classList.remove("fa-volume-mute");
        icon.classList.add("fa-volume-up");
    } else {
        music.pause();
        icon.classList.remove("fa-volume-up");
        icon.classList.add("fa-volume-mute");
    }
}




//PAGE LOADER
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('main-content');
    preloader.style.display = 'none';
    content.style.display = 'block';
  });