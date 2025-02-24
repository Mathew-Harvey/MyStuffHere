const WALK_SPEED = 20; // Speed of the man's walking (pixels per frame)
const ACTION_DELAY = 50; // Delay (in ms) for bending, holding, and dropping actions
const ANIMATION_FRAME_RATE = 16; // Delay (in ms) for the moveTo animation loop (controls smoothness)
const EMOTE_DELAY = 1000; // Delay (in ms) for displaying random emotion after completing a row
const CHEER_DELAY = 2000; // Delay (in ms) for cheering after tearing down the wall

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

// Swiper setup
const swiperWrapper = document.querySelector('.swiper-wrapper');
portfolioItems.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.setAttribute('data-url', item.url);
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    const p = document.createElement('p');
    p.textContent = item.title;
    const promptDiv = document.createElement('div');
    promptDiv.className = 'visit-prompt';
    promptDiv.textContent = 'Click to visit site';
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(promptDiv);
    slide.appendChild(card);
    swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
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
    slideToClickedSlide: true
});

swiper.slides.forEach(slide => {
    slide.addEventListener('click', function() {
        if (slide.classList.contains('swiper-slide-active')) {
            const url = slide.getAttribute('data-url');
            window.open(url, '_blank');
        }
    });
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const circles = [];
for (let i = 0; i < 5; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    if (i === 4) circle.classList.add('center-circle');
    cursor.appendChild(circle);
    circles.push(circle);
}

let mouseX = 0;
let mouseY = 0;
let isHovering = false;

const offsets = circles.map(() => ({
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
}));

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

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => isHovering = true);
    slide.addEventListener('mouseleave', () => isHovering = false);
});

updateCursor();

// Pixel Man Animation
const assets = {
    standing_neutral: 'pixel_art_frames/man_standing_neutral.png',
    standing_happy: 'pixel_art_frames/man_standing_happy.png',
    standing_angry: 'pixel_art_frames/man_standing_angry.png',
    standing_sad: 'pixel_art_frames/man_standing_sad.png',
    standing_frustrated: 'pixel_art_frames/man_standing_frustrated.png',
    standing_satisfied: 'pixel_art_frames/man_standing_satisfied.png',
    walking1: 'pixel_art_frames/man_walking1.png',
    walking2: 'pixel_art_frames/man_walking2.png',
    bending: 'pixel_art_frames/man_bending.png',
    holding: 'pixel_art_frames/man_holding.png',
    dropping: 'pixel_art_frames/man_dropping.png',
    cheering: 'pixel_art_frames/man_cheering.png' // Assuming you have a cheering image
};

const man = document.getElementById('man');
const wall = document.getElementById('wall');

let manX = 0;
let currentRow = 0; // Track the current row the man is on
let brickIndex = 0; // Track the current brick index to ensure progression

// Brick setup
const brickWidth = 50;
const brickHeight = 25;
const numCols = Math.ceil(window.innerWidth / brickWidth);
const numRows = Math.ceil(window.innerHeight / brickHeight);
const bricks = [];

for (let row = 0; row < numRows; row++) {
    const offset = (row % 2 === 0) ? 0 : brickWidth / 2;
    for (let col = 0; col < numCols; col++) {
        const left = col * brickWidth + offset;
        const bottom = row * brickHeight;
        bricks.push({ row, col, left, bottom });
    }
}

function getRandomEmotion() {
    const emotions = [
        'standing_happy', 'standing_angry', 'standing_sad',
        'standing_frustrated', 'standing_satisfied'
    ];
    return emotions[Math.floor(Math.random() * emotions.length)];
}

function animateWalk() {
    let frame = 0;
    return setInterval(() => {
        man.src = (frame % 2 === 0) ? assets.walking1 : assets.walking2;
        frame++;
    }, 200);
}

function moveTo(targetX, targetBottom, callback) {
    const walkInterval = animateWalk();
    const moveInterval = setInterval(() => {
        if (manX < targetX) {
            manX += WALK_SPEED;
            if (manX >= targetX) manX = targetX;
        } else if (manX > targetX) {
            manX -= WALK_SPEED;
            if (manX <= targetX) manX = targetX;
        }
        man.style.left = `${manX}px`;
        if (manX === targetX) {
            clearInterval(moveInterval);
            clearInterval(walkInterval);
            man.src = assets.standing_neutral;
            man.style.bottom = `${targetBottom}px`; // Set the final bottom position immediately
            callback();
        }
    }, ANIMATION_FRAME_RATE);
}

function placeBrick(brickIndex) {
    if (brickIndex >= bricks.length) {
        // Wall is complete, wait for button click
        return;
    }
    const brick = bricks[brickIndex];
    // Move to pick up position (hardcoded since brick pile is removed)
    const pickUpX = 160; // Hardcoded pickup position
    moveTo(pickUpX, 0, () => { // Start at bottom or current row level
        man.src = assets.bending;
        setTimeout(() => {
            man.src = assets.holding;
            setTimeout(() => {
                moveTo(brick.left, 0, () => { // Place brick at bottom level
                    man.src = assets.dropping;
                    setTimeout(() => {
                        // Add brick to wall
                        const brickDiv = document.createElement('div');
                        brickDiv.className = 'brick';
                        brickDiv.style.left = `${brick.left}px`;
                        brickDiv.style.bottom = `${brick.bottom}px`;
                        wall.appendChild(brickDiv);
                        man.src = assets.standing_neutral;
                        // If completed a row, update wall height and emot/climb
                        if (brick.col === numCols - 1) {
                            const completedRows = brick.row + 1;
                            wall.style.height = `${completedRows * brickHeight}px`;
                            // Show random emotion
                            const emotion = getRandomEmotion();
                            man.src = assets[emotion];
                            setTimeout(() => {
                                // Then climb to the top of the completed row
                                currentRow = completedRows - 1; // Stand on the top row
                                moveTo(brick.left, currentRow * brickHeight, () => {
                                    man.src = assets.standing_neutral; // Reset to neutral after climbing
                                    // Start the next row (first brick of the next row)
                                    placeBrick(brickIndex + 1);
                                });
                            }, EMOTE_DELAY);
                            // Check if should show button (e.g., when row >= 10)
                            if (completedRows >= 10 && !document.getElementById('tear-down-button')) {
                                showTearDownButton();
                            }
                        } else {
                            // Continue with the next brick in the current row
                            placeBrick(brickIndex + 1);
                        }
                    }, ACTION_DELAY);
                });
            }, ACTION_DELAY);
        }, ACTION_DELAY);
    });
}

function showTearDownButton() {
    const button = document.createElement('button');
    button.id = 'tear-down-button';
    button.textContent = 'Tear down the wall';
    button.style.position = 'fixed';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.zIndex = '100';
    button.style.padding = '10px 20px';
    button.style.fontSize = '1.5rem';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);
    button.addEventListener('click', tearDownWall);
}

function tearDownWall() {
    // Create debris for smoke and crumbling effect
    const numDebris = 20; // Number of debris pieces for a fuller effect
    for (let i = 0; i < numDebris; i++) {
        const debris = document.createElement('div');
        debris.className = 'debris';
        debris.style.left = `${Math.random() * 100}%`; // Random horizontal position
        debris.style.bottom = `${Math.random() * parseInt(wall.style.height) || 0}px`; // Random vertical position within wall height
        debris.style.setProperty('--dx', (Math.random() * 2 - 1).toFixed(2)); // Random x direction (-1 to 1)
        debris.style.setProperty('--dy', (Math.random() * 1).toFixed(2)); // Random y direction (0 to 1, upward)
        document.body.appendChild(debris);
    }

    // Remove debris after animation (1.5s as per the explode animation duration)
    setTimeout(() => {
        document.querySelectorAll('.debris').forEach(debris => debris.remove());
    }, 1500);

    // Clear the wall
    wall.innerHTML = '';
    wall.style.height = '0px';
    document.body.removeChild(document.getElementById('tear-down-button'));

    // Reset man to bottom and cheer before rebuilding
    man.style.left = '0px';
    man.style.bottom = '0px';
    man.src = assets.cheering; // Show cheering animation
    setTimeout(() => {
        man.src = assets.standing_neutral; // Return to neutral before starting
        currentRow = 0; // Reset to start at the bottom
        brickIndex = 0; // Reset brick index to start from the beginning
        placeBrick(brickIndex); // Start building from the bottom
    }, CHEER_DELAY);
}

// Start the wall building process
placeBrick(0);