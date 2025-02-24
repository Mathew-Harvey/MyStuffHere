// // Configuration variables for wall-building speed and behavior (adjust these as needed)
// const WALK_SPEED = 20; // Speed of the man's walking (pixels per frame)
// const ACTION_DELAY = 50; // Delay (in ms) for bending, holding, and dropping actions
// const ANIMATION_FRAME_RATE = 16; // Delay (in ms) for the moveTo animation loop (controls smoothness)
// const EMOTE_DELAY = 2000; // Delay (in ms) for displaying random emotion after completing a row
// const CHEER_DELAY = 1000; // Delay (in ms) for each happy emotion after tearing down the wall

// Configuration variables for fast wall-building (optimized for debugging, adjust as needed)
const WALK_SPEED = 30; // Reduced speed for smoother movement (pixels per frame)
const ACTION_DELAY = 20; // Slightly increased delay for stability (in ms)
const ANIMATION_FRAME_RATE = 10; // Reduced delay for faster but smooth animation loop (in ms)
const EMOTE_DELAY = 500; // Reduced delay for emotions, quick for testing (in ms)
const CHEER_DELAY = 500; // Reduced delay for happy emotions after tear-down, fast for debugging (in ms)

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
    return 'standing_happy'; // Force happy emotion as requested
}

function animateWalk() {
    let frame = 0;
    return setInterval(() => {
        man.src = (frame % 2 === 0) ? assets.walking1 : assets.walking2;
        frame++;
    }, 200);
}

function moveTo(targetX, targetBottom, callback) {
    console.log(`Moving to targetX: ${targetX}, targetBottom: ${targetBottom}, current manX: ${manX}, current bottom: ${man.style.bottom}`);
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

        if (manX === targetX && parseInt(man.style.bottom) !== targetBottom) {
            const currentBottom = parseInt(man.style.bottom) || 0;
            if (currentBottom < targetBottom) {
                man.style.bottom = `${Math.min(currentBottom + WALK_SPEED, targetBottom)}px`;
            } else if (currentBottom > targetBottom) {
                man.style.bottom = `${Math.max(currentBottom - WALK_SPEED, targetBottom)}px`;
            }
        }

        if (manX === targetX && parseInt(man.style.bottom) === targetBottom) {
            clearInterval(moveInterval);
            clearInterval(walkInterval);
            man.src = assets.standing_neutral;
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
    console.log(`Placing brick ${brickIndex}, currentRow: ${currentRow}, brick.row: ${brick.row}, brick.col: ${brick.col}, brick.left: ${brick.left}, brick.bottom: ${brick.bottom}`);
    // Determine if the man should start from the bottom or current row
    const startBottom = currentRow === 0 ? 0 : currentRow * brickHeight; // Start at bottom for new builds, or current row height
    // Ensure man doesn’t exceed viewport
    const maxBottom = window.innerHeight - 240; // Man’s height is 240px
    const adjustedStartBottom = Math.min(startBottom, maxBottom);
    // Move to pick up position (hardcoded since brick pile is removed)
    const pickUpX = Math.min(160, window.innerWidth - 160); // Hardcoded pickup position, clamped to viewport
    const pickUpBottom = adjustedStartBottom;
    moveTo(pickUpX, pickUpBottom, () => { // Start at bottom or current row, within viewport
        man.src = assets.bending;
        setTimeout(() => {
            man.src = assets.holding;
            setTimeout(() => {
                const placeBottom = brick.row === 0 ? 0 : brick.row * brickHeight; // Place at bottom for first row, or brick row height
                const adjustedPlaceBottom = Math.min(placeBottom, maxBottom);
                moveTo(brick.left, adjustedPlaceBottom, () => { // Place brick at bottom or current row level, within viewport
                    man.src = assets.dropping;
                    setTimeout(() => {
                        // Add brick to wall
                        const brickDiv = document.createElement('div');
                        brickDiv.className = 'brick';
                        brickDiv.style.left = `${Math.min(brick.left, window.innerWidth - 50)}px`; // Clamp brick left to viewport
                        brickDiv.style.bottom = `${adjustedPlaceBottom}px`;
                        wall.appendChild(brickDiv);
                        man.src = assets.standing_neutral;
                        // If completed a row, update wall height and emot/climb
                        if (brick.col === numCols - 1) {
                            const completedRows = brick.row + 1;
                            wall.style.height = `${completedRows * brickHeight}px`;
                            // Move man to center of window before emoting
                            const centerX = window.innerWidth / 2 - 80; // Center, accounting for man’s width (160px)
                            moveTo(centerX, adjustedStartBottom, () => {
                                // Show happy emotion three times
                                let emoteCount = 0;
                                function showHappyEmotion() {
                                    man.src = assets.standing_happy;
                                    setTimeout(() => {
                                        emoteCount++;
                                        if (emoteCount < 3) {
                                            showHappyEmotion(); // Show happy again
                                        } else {
                                            // Then climb to the top of the completed row
                                            currentRow = completedRows - 1; // Stand on the top row
                                            const climbBottom = Math.min(currentRow * brickHeight, maxBottom);
                                            moveTo(centerX, climbBottom, () => {
                                                man.src = assets.standing_neutral; // Reset to neutral after climbing
                                                // Start the next row (first brick of the next row)
                                                if (brickIndex < bricks.length - 1) {
                                                    placeBrick(brickIndex + 1);
                                                }
                                            });
                                        }
                                    }, CHEER_DELAY);
                                }
                                showHappyEmotion();
                            });
                            // Check if should show button (e.g., when row >= 10)
                            if (completedRows >= 10 && !document.getElementById('tear-down-button')) {
                                showTearDownButton();
                            }
                        } else {
                            // Continue with the next brick in the current row
                            if (brickIndex < bricks.length - 1) {
                                placeBrick(brickIndex + 1);
                            }
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

    // Clear the wall completely and ensure no residual bricks
    const remainingBricks = document.querySelectorAll('.brick');
    if (remainingBricks.length > 0) {
        console.log('Removing remaining bricks:', remainingBricks.length);
        remainingBricks.forEach(brick => brick.remove());
    }
    wall.innerHTML = '';
    wall.style.height = '0px';
    wall.style.backgroundColor = 'transparent'; // Temporarily ensure no mortar color shows
    document.body.removeChild(document.getElementById('tear-down-button'));

    // Reset man to bottom and show happy emotion three times before rebuilding
    man.style.left = '0px';
    man.style.bottom = '0px';
    manX = 0; // Reset man’s position
    currentRow = 0; // Reset to start at the bottom
    brickIndex = 0; // Reset brick index to start from the beginning
    let emoteCount = 0;
    function showHappyEmotion() {
        man.src = assets.standing_happy;
        setTimeout(() => {
            emoteCount++;
            if (emoteCount < 3) {
                showHappyEmotion(); // Show happy again
            } else {
                man.src = assets.standing_neutral; // Return to neutral before starting
                placeBrick(brickIndex); // Start building from the bottom
            }
        }, CHEER_DELAY);
    }
    showHappyEmotion();
}

// Start the wall building process
placeBrick(0);

// Handle window resize to update brick layout dynamically
window.addEventListener('resize', () => {
    const newNumCols = Math.ceil(window.innerWidth / brickWidth);
    const newNumRows = Math.ceil(window.innerHeight / brickHeight);
    if (newNumCols !== numCols || newNumRows !== numRows) {
        // Recalculate bricks if window size changes significantly
        numCols = newNumCols;
        numRows = newNumRows;
        bricks.length = 0; // Clear existing bricks
        for (let row = 0; row < numRows; row++) {
            const offset = (row % 2 === 0) ? 0 : brickWidth / 2;
            for (let col = 0; col < numCols; col++) {
                const left = col * brickWidth + offset;
                const bottom = row * brickHeight;
                bricks.push({ row, col, left, bottom });
            }
        }
        // Reset if building is in progress
        if (brickIndex > 0) {
            tearDownWall(); // Reset to handle resizing during build
        }
    }
});