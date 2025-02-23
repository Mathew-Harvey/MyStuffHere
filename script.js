const portfolioItems = [
    { title: 'Artificial Life', url: 'https://mathew-harvey.github.io/Artificial-Life/', imageUrl: './images/particleplayground.png' },
    { title: '3d Ship', url: 'https://mathew-harvey.github.io/3dShip/', imageUrl: './images/3dship.png' },
    { title: 'Blurred Photos', url: 'https://mathew-harvey.github.io/BlurredPhotos/', imageUrl: './images/blurphoto.png' },
    { title: 'Old Portfolio', url: 'https://mathew-harvey.github.io/portfolio/', imageUrl: './images/oldPortfolio.png' },
    { title: 'The Bodyweight Gym Online', url: 'https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/', imageUrl: './images/bwg.png' },
    { title: 'Game of life', url: 'https://mathew-harvey.github.io/game_of_life/', imageUrl: './images/gameoflife.png' },
    { title: 'IWHC Manual Companion App', url: 'https://mathew-harvey.github.io/IWHCManualCompanionApp/', imageUrl: './images/IWHCManual.png' },
    { title: 'Clean My Ship', url: 'https://cleanmyship.netlify.app/', imageUrl: './images/cleanmyship.png' },
    { title: 'Recursive Observation and Biochemical Weighting', url: 'https://mathew-harvey.github.io/A-New-Framework-for-Understanding-Consciousness/', imageUrl: './images/RecursiveObs.png' },
    { title: 'Clean Hulls Clear Waters', url: 'https://mathew-harvey.github.io/CleanHullsClearWaters/', imageUrl: './images/CleanHullsClearWaters.png' },
    { title: 'Extreme Limit Films', url: 'https://mathew-harvey.github.io/ExtremeLimitFilms/', imageUrl: './images/elf.png' },
    { title: 'Fouling Cost Calculator', url: 'https://mathew-harvey.github.io/FoulingCostCalculator/', imageUrl: './images/costCalc.png' },
    { title: 'The Hull Truth', url: 'https://mathew-harvey.github.io/TheHullTruth/', imageUrl: './images/hulltruth.png' },
    { title: 'bfmpGenerator', url: 'https://mathew-harvey.github.io/bfmpGenerator/', imageUrl: './images/bfmpgenerator.png' },
    { title: 'AgenticBubbleSort', url: 'https://mathew-harvey.github.io/AgenticBubbleSort/', imageUrl: './images/agenticsort.png' },
    { title: 'ElodieBook_Two', url: 'https://mathew-harvey.github.io/ElodieBook_Two/', imageUrl: './images/ebook2.png' },
    { title: 'ElodieBook_One', url: 'https://mathew-harvey.github.io/ElodieBook_One/', imageUrl: './images/ebook1.png' }
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

// Dynamically create slides
portfolioItems.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.setAttribute('data-url', item.url);  // Store the website URL
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    const p = document.createElement('p');
    p.textContent = item.title;
    const promptDiv = document.createElement('div');  // Create the prompt element
    promptDiv.className = 'visit-prompt';
    promptDiv.textContent = 'Click to visit site';
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(promptDiv);  // Append the prompt to the card
    slide.appendChild(card);
    swiperWrapper.appendChild(slide);
});
// Initialize Swiper with coverflow effect
const swiper = new Swiper('.swiper', {
    effect: 'coverflow',              // Assuming coverflow effect based on your setup
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    coverflowEffect: {
        rotate: 15,
        stretch: 50,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true         // Add this to slide to the clicked slide
});
// Add click event to open URL on active slide
swiper.slides.forEach(slide => {
    slide.addEventListener('click', function() {
        if (slide.classList.contains('swiper-slide-active')) {
            const url = slide.getAttribute('data-url');
            window.open(url, '_blank');
        }
    });
});

// Custom Cursor
// Assume portfolioItems and Swiper initialization code exists above

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const circles = [];
for (let i = 0; i < 5; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    if (i === 4) {
        circle.classList.add('center-circle');
    }
    cursor.appendChild(circle);
    circles.push(circle);
}

let mouseX = 0;
let mouseY = 0;
let isHovering = false;

// Random movement offsets
const offsets = circles.map(() => ({
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
}));

// Ikigai alignment positions (relative to mouse pointer)
const ikigaiPositions = [
    { x: -8, y: -8 },
    { x: 8, y: -8 },
    { x: -8, y: 8 },
    { x: 8, y: 8 },
    { x: 0, y: 0 }
];

function updateCursor() {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    circles.forEach((circle, i) => {
        if (isHovering) {
            const pos = ikigaiPositions[i];
            circle.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            circle.classList.add('glow');
        } else {
            offsets[i].x += offsets[i].vx;
            offsets[i].y += offsets[i].vy;
            if (offsets[i].x > 10 || offsets[i].x < -10) offsets[i].vx *= -1;
            if (offsets[i].y > 10 || offsets[i].y < -10) offsets[i].vy *= -1;
            circle.style.transform = `translate(${offsets[i].x}px, ${offsets[i].y}px)`;
            circle.classList.remove('glow');
        }
    });

    requestAnimationFrame(updateCursor);
}

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Detect hover over cards
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        isHovering = true;
    });
    slide.addEventListener('mouseleave', () => {
        isHovering = false;
    });
});

// Start the animation
updateCursor();
