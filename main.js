// Animate the introLogo element
anime({
    targets: '#introLogo',
    translateY: [-100, 0], // Move the element vertically from -100px to 0px
    opacity: [0, 1], // Fade in the element
    duration: 1500, // Animation duration in milliseconds
    easing: 'easeOutQuad' // Easing function for smooth animation
});

// Animate the menu items
anime({
    targets: '.dish', // Target all elements with the 'dish' class
    translateX: [-50, 0], // Move the elements horizontally from -50px to 0px
    opacity: [0, 1], // Fade in the elements
    delay: anime.stagger(100), // Delay each element's animation
    duration: 1000, // Animation duration in milliseconds
    easing: 'easeInOutSine' // Easing function for smooth animation
});

// Animate the menu images
anime({
    targets: '.menuIntro img', // Target all images within elements with the 'menuIntro' class
    translateY: [50, 0], // Move the images vertically from 50px to 0px
    opacity: [0, 1], // Fade in the images
    delay: anime.stagger(100), // Delay each image's animation
    duration: 1000, // Animation duration in milliseconds
    easing: 'easeInOutSine' // Easing function for smooth animation
});
