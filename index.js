/*document.addEventListener("DOMContentLoaded", function (event) {
  let cursor = document.querySelector("#cursor");
  let links = document.querySelectorAll(".cursor-interest");
  let initCursor = false;

  for (let i = 0; i < links.length; i++) {
    let selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("cursor-on-interest");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("cursor-on-interest");
    });
  }

  window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      cursor.style.opacity = 1;
      initCursor = true;
    }

    cursor.style.top = mouseY + "px";
    cursor.style.left = mouseX + "px";
  };

  window.onmouseout = function (e) {
    cursor.style.opacity = 0;
    initCursor = false;
  };
});

document.getElementById("ransom5b").addEventListener("mouseover", function () {
  document.querySelector("body").classList.add("s5b-triggered");
});
document.getElementById("ransom5b").addEventListener("mouseout", function () {
  document.querySelector("body").classList.remove("s5b-triggered");
});

let profilePictures = document.querySelectorAll(".profile-picture");

let randomRange = (min, max) => Math.random() * (max - min) + min;

profilePictures.forEach((e) => {
  e.style.animationDuration = `${randomRange(0.5, 2.2)}s`;
});

const sections = [
    document.getElementById("heart"),
    document.getElementById("ball2"),
    document.getElementById("r3-p1"),
    document.getElementById("s4"),
    document.getElementById("s5a"),
    document.getElementById("s5b"),
    document.getElementById("umbrella-girl"),
    document.getElementById("s7"),
    document.getElementById("ransom8"),
  ],
  classes = [
    "s1-scrolled",
    "s2-scrolled",
    "s3-scrolled",
    "s4-scrolled",
    "s5a-scrolled",
    "s5b-scrolled",
    "s6-scrolled",
    "s7-scrolled",
    "s8-scrolled",
  ];
body = document.getElementById("main");

const buffer = 100;

const checkSection = () => {
  let scrollPos = window.scrollY,
    offset = scrollPos + window.innerHeight;

  sections.forEach((sec, i) => {
    if (window.innerHeight - buffer >= sec.getBoundingClientRect().top) {
      body.classList.add(classes[i]);
    }
  });
};

document.addEventListener("scroll", checkSection);

document.getElementById("ransom5a").addEventListener("click", (e) => {
  body.classList.add("s5a-triggered");
});

checkSection();
*/


document.addEventListener("DOMContentLoaded", () => {
  // Create a custom cursor and handle interactions
  const cursor = document.querySelector("#cursor");
  const links = document.querySelectorAll(".cursor-interest");

  // Function to handle cursor state on hover
  const handleCursorHover = (element, addClass) => {
    element.addEventListener("mouseover", () => cursor.classList[addClass]("cursor-on-interest"));
    element.addEventListener("mouseout", () => cursor.classList.remove("cursor-on-interest"));
  };

  links.forEach(link => handleCursorHover(link, "add"));

  // Track cursor position and visibility
  let initCursor = false;

  window.onmousemove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    cursor.style.top = `${mouseY}px`;
    cursor.style.left = `${mouseX}px`;
    initCursor = true;
    cursor.style.opacity = 1;
  };

  window.onmouseout = () => {
    initCursor = false;
    cursor.style.opacity = 0;
  };
});

// Handle Ransom Note 5b interaction
document.getElementById("ransom5b").addEventListener("mouseover", () => {
  document.querySelector("body").classList.add("s5b-triggered");
});
document.getElementById("ransom5b").addEventListener("mouseout", () => {
  document.querySelector("body").classList.remove("s5b-triggered");
});

// Add random animation duration to profile pictures
const profilePictures = document.querySelectorAll(".profile-picture");
const randomRange = (min, max) => Math.random() * (max - min) + min;

profilePictures.forEach(picture => {
  picture.style.animationDuration = `${randomRange(0.5, 2.2)}s`;
});

// Handle section-based scroll effects
const sectionTriggers = [
  document.getElementById("heart"),
  document.getElementById("ball2"),
  document.getElementById("r3-p1"),
  document.getElementById("s4"),
  document.getElementById("s5a"),
  document.getElementById("s5b"),
  document.getElementById("umbrella-girl"),
  document.getElementById("s7"),
  document.getElementById("ransom8"),
];
const classes = [
  "s1-scrolled",
  "s2-scrolled",
  "s3-scrolled",
  "s4-scrolled",
  "s5a-scrolled",
  "s5b-scrolled",
  "s6-scrolled",
  "s7-scrolled",
  "s8-scrolled",
];
const sections = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5a",
  "s5b",
  "s6",
  "s7",
  "s8",
];
const body = document.getElementById("main");
const buffer = 80;

const typeWriter = (element, delay) => {
  const text = element.innerText;
  console.log(text);
  element.innerText = '';

  let i = 0;
  const typingSpeed = 50; // Adjust typing speed in milliseconds

  const type = () => {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char == '\n' || char == ' ') {
        if (char == '\n') {
          element.innerHTML += '<br>';
        } else {
          element.innerHTML += '&nbsp;';
        }
      } else {
        element.innerHTML += char;
      }

      i++;

      setTimeout(type, typingSpeed);
    }
  };

  setTimeout(type, delay);
}

const typeOutParagraphsInParent = (parent) => {
  const paragraphs = parent.querySelectorAll('p');
  let delay = 0;
  const delayBetweenParagraphs = 500; // Adjust delay between paragraphs in milliseconds
  paragraphs.forEach(paragraph => {
    typeWriter(paragraph, delay);
    delay += delayBetweenParagraphs;
  });
}

const checkSection = () => {
  const scrollPos = window.scrollY;
  const offset = scrollPos + window.innerHeight;

  sectionTriggers.forEach((trigger, i) => {
    // Check if window scroll position has reach the designated section
    if (window.innerHeight - buffer >= trigger.getBoundingClientRect().top) {
      let section = document.getElementById(sections[i]);
      if (!section.classList.contains("scrolled-to")) {
        section.classList.add("scrolled-to");
        //typeOutParagraphsInParent(document.getElementById(sections[i]));
      }
      body.classList.add(classes[i]);
    }
  });
};

document.addEventListener("scroll", checkSection);
checkSection();

// Handle Ransom Note 5a interaction
let rainTrigger = document.getElementById("ransom5a");
rainTrigger.addEventListener("click", (arguments) => {
  body.classList.add("s5a-triggered");
  const audio = document.getElementById("rain-sound");
  if (!audio) return; // If audio element not found, exit function
  audio.play();
});

function playSoundOnHover() {
  const elements = document.querySelectorAll('[data-sound-on-hover]');

  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      const soundId = element.dataset.soundOnHover;
      const soundVolume = element.dataset.volume;
      const soundElement = document.getElementById(soundId);

      if (soundElement) {
        soundElement.play();
        soundElement.volume = parseFloat(soundVolume);
      }
    });
  });
}

playSoundOnHover();



const bgSound = document.getElementById("background-sound");
document.getElementById("play-button").addEventListener("click", () => {
  bgSound.play()
});

function createParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-parallax-stall]');

  parallaxElements.forEach(element => {
    const parallaxStall = parseFloat(element.dataset.parallaxStall);
    let isVisible = false;
    let originalTop = element.offsetTop;

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const applyParallax = () => {
      if (!isVisible) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = element.offsetTop;

      const parallax = (scrollTop - elementTop)/window.innerHeight * parallaxStall;
      // Apply new top  
      const newTop = originalTop + parallax;
      element.style.top = `${newTop}px`;
    };

    window.addEventListener('scroll', () => {
      checkVisibility();
      applyParallax();
    });
  });
}

createParallaxEffect();


var audio = document.getElementById("rain-sound");
audio.volume = 0.6;


document.getElementById('s5a').addEventListener("mouseenter", () => {
  if (body.classList.contains("s5a-triggered")) {
    document.getElementById("rain-sound").play();
  }
});

document.getElementById('s7').addEventListener("mouseenter", () => {
  document.getElementById("rain-sound").pause();
});