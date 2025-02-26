// DEV ONLY

// const WALK_SPEED = 50;
// const ACTION_DELAY = 20;
// const ANIMATION_FRAME_RATE = 10;
// const EMOTE_DELAY = 500;
// const CHEER_DELAY = 500;

// Configuration variables for user-friendly wall-building (balanced for natural pace, adjust as needed)
const WALK_SPEED = 8; // Moderate speed of the man's walking (pixels per frame), smooth and visible
const ACTION_DELAY = 300; // Moderate delay (in ms) for bending, holding, and dropping actions, allowing clear visibility
const ANIMATION_FRAME_RATE = 50; // Moderate delay (in ms) for the moveTo animation loop, ensuring smooth transitions
const EMOTE_DELAY = 2000; // Standard delay (in ms) for displaying emotions after completing a row, long enough to enjoy
const CHEER_DELAY = 1000; // Standard delay (in ms) for each happy emotion after tearing down the wall, natural and engaging
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
  { title: 'ElodieBook_One', url: 'https://mathew-harvey.github.io/ElodieBook_One/', imageUrl: './images/ebook1.png' },
  { title: 'The BodyweightGym', url: 'https://mathewharvey.wixsite.com/mysite/about', imageUrl: './images/bwgSite.png' }

];

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
    slideShadows: false
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slideToClickedSlide: true
});

swiper.slides.forEach(slide => {
  slide.addEventListener('click', function () {
    if (slide.classList.contains('swiper-slide-active')) {
      const url = slide.getAttribute('data-url');
      window.open(url, '_blank');
    }
  });
});

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

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.addEventListener('mouseenter', () => isHovering = true);
  slide.addEventListener('mouseleave', () => isHovering = false);
});

updateCursor();

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
  cheering: 'pixel_art_frames/man_cheering.png'
};

const man = document.getElementById('man');
const wall = document.getElementById('wall');
man.style.left = '0px';
man.style.bottom = '0px';
let manX = 0;
let currentRow = 0;
let brickIndex = 0;
let buildVersion = 0;
const brickWidth = 50;
const brickHeight = 25;
let numCols = Math.ceil(window.innerWidth / brickWidth);
let numRows = Math.ceil(window.innerHeight / brickHeight);
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
  return 'standing_happy';
}

function animateWalk() {
  let frame = 0;
  return setInterval(() => {
    man.src = (frame % 2 === 0) ? assets.walking1 : assets.walking2;
    frame++;
  }, 200);
}

function moveTo(targetX, targetBottom, callback, version) {
  const walkInterval = animateWalk();
  const moveInterval = setInterval(() => {
    if (version !== buildVersion) {
      clearInterval(moveInterval);
      clearInterval(walkInterval);
      return;
    }
    if (manX < targetX) {
      manX += WALK_SPEED;
      if (manX > targetX) manX = targetX;
    } else if (manX > targetX) {
      manX -= WALK_SPEED;
      if (manX < targetX) manX = targetX;
    }
    man.style.left = `${manX}px`;
    if (manX === targetX) {
      const currentBottom = parseInt(man.style.bottom) || 0;
      if (currentBottom < targetBottom) {
        man.style.bottom = `${Math.min(currentBottom + WALK_SPEED, targetBottom)}px`;
      } else if (currentBottom > targetBottom) {
        man.style.bottom = `${Math.max(currentBottom - WALK_SPEED, targetBottom)}px`;
      }
    }
    if (manX === targetX && parseInt(man.style.bottom || '0') === targetBottom) {
      clearInterval(moveInterval);
      clearInterval(walkInterval);
      man.src = assets.standing_neutral;
      if (version === buildVersion) callback();
    }
  }, ANIMATION_FRAME_RATE);
}

function placeBrick(brickIndex, version) {
  if (version !== buildVersion) return;
  if (brickIndex >= bricks.length) return;
  const brick = bricks[brickIndex];
  const startBottom = currentRow === 0 ? 0 : currentRow * brickHeight;
  const maxBottom = window.innerHeight - 240;
  const adjustedStartBottom = Math.min(startBottom, maxBottom);
  const pickUpX = Math.min(160, window.innerWidth - 160);
  const pickUpBottom = adjustedStartBottom;
  moveTo(pickUpX, pickUpBottom, () => {
    if (version !== buildVersion) return;
    man.src = assets.bending;
    setTimeout(() => {
      if (version !== buildVersion) return;
      man.src = assets.holding;
      setTimeout(() => {
        if (version !== buildVersion) return;
        const placeBottom = brick.row === 0 ? 0 : brick.row * brickHeight;
        const adjustedPlaceBottom = Math.min(placeBottom, maxBottom);
        moveTo(brick.left, adjustedPlaceBottom, () => {
          if (version !== buildVersion) return;
          man.src = assets.dropping;
          setTimeout(() => {
            if (version !== buildVersion) return;
            const brickDiv = document.createElement('div');
            brickDiv.className = 'brick';
            brickDiv.style.left = `${Math.min(brick.left, window.innerWidth - 50)}px`;
            brickDiv.style.bottom = `${adjustedPlaceBottom}px`;
            wall.appendChild(brickDiv);
            man.src = assets.standing_neutral;
            if (brick.col === numCols - 1) {
              const completedRows = brick.row + 1;
              wall.style.height = `${completedRows * brickHeight}px`;
              const centerX = window.innerWidth / 2 - 80;
              moveTo(centerX, adjustedStartBottom, () => {
                if (version !== buildVersion) return;
                let emoteCount = 0;
                function showHappyEmotion() {
                  if (version !== buildVersion) return;
                  man.src = assets.standing_happy;
                  setTimeout(() => {
                    if (version !== buildVersion) return;
                    emoteCount++;
                    if (emoteCount < 3) {
                      showHappyEmotion();
                    } else {
                      currentRow = completedRows - 1;
                      const climbBottom = Math.min(currentRow * brickHeight, maxBottom);
                      moveTo(centerX, climbBottom, () => {
                        if (version !== buildVersion) return;
                        man.src = assets.standing_neutral;
                        if (brickIndex < bricks.length - 1) placeBrick(brickIndex + 1, version);
                      }, version);
                    }
                  }, CHEER_DELAY);
                }
                showHappyEmotion();
              }, version);
              if (completedRows >= 10 && !document.getElementById('tear-down-button')) showTearDownButton();
            } else {
              if (brickIndex < bricks.length - 1) placeBrick(brickIndex + 1, version);
            }
          }, ACTION_DELAY);
        }, version);
      }, ACTION_DELAY);
    }, ACTION_DELAY);
  }, version);
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
  buildVersion++;
  const v = buildVersion;
  const numDebris = 20;
  for (let i = 0; i < numDebris; i++) {
    const debris = document.createElement('div');
    debris.className = 'debris';
    debris.style.left = `${Math.random() * 100}%`;
    debris.style.bottom = `${Math.random() * (parseInt(wall.style.height) || 0)}px`;
    debris.style.setProperty('--dx', (Math.random() * 2 - 1).toFixed(2));
    debris.style.setProperty('--dy', (Math.random() * 1).toFixed(2));
    document.body.appendChild(debris);
  }
  setTimeout(() => {
    document.querySelectorAll('.debris').forEach(debris => debris.remove());
  }, 1500);
  document.querySelectorAll('.brick').forEach(brick => brick.remove());
  wall.innerHTML = '';
  wall.style.height = '0px';
  wall.style.backgroundColor = 'transparent';
  const btn = document.getElementById('tear-down-button');
  if (btn) document.body.removeChild(btn);
  man.style.left = '0px';
  man.style.bottom = '0px';
  manX = 0;
  currentRow = 0;
  brickIndex = 0;
  let emoteCount = 0;
  function showHappyEmotion() {
    if (v !== buildVersion) return;
    man.src = assets.standing_happy;
    setTimeout(() => {
      if (v !== buildVersion) return;
      emoteCount++;
      if (emoteCount < 3) {
        showHappyEmotion();
      } else {
        man.src = assets.standing_neutral;
        placeBrick(0, buildVersion);
      }
    }, CHEER_DELAY);
  }
  showHappyEmotion();
}

placeBrick(0, buildVersion);

window.addEventListener('resize', () => {
  numCols = Math.ceil(window.innerWidth / brickWidth);
  numRows = Math.ceil(window.innerHeight / brickHeight);
  bricks.length = 0;
  for (let row = 0; row < numRows; row++) {
    const offset = (row % 2 === 0) ? 0 : brickWidth / 2;
    for (let col = 0; col < numCols; col++) {
      const left = col * brickWidth + offset;
      const bottom = row * brickHeight;
      bricks.push({ row, col, left, bottom });
    }
  }
  tearDownWall();
});
