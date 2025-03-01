// Configuration variables for user-friendly wall-building
const WALK_SPEED = 8; // Moderate speed of the man's walking (pixels per frame)
const ACTION_DELAY = 300; // Moderate delay (in ms) for bending, holding, and dropping actions
const ANIMATION_FRAME_RATE = 50; // Moderate delay (in ms) for the moveTo animation loop
const EMOTE_DELAY = 2000; // Standard delay (in ms) for displaying emotions after completing a row
const CHEER_DELAY = 1000; // Standard delay (in ms) for each happy emotion after tearing down the wall
const JOKE_FREQUENCY = 3; // Tells a joke randomly between 1 and this number of bricks (lower = more frequent)
const SPEECH_BUBBLE_DURATION = 5000; // How long the joke speech bubble stays visible

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

// Dad jokes array - will be populated from JSON
let dadJokes = [];

// Fetch dad jokes from JSON file
fetch('dadJokes.json')
  .then(response => response.json())
  .then(data => {
    dadJokes = data;
    console.log('Dad jokes loaded:', dadJokes.length);
  })
  .catch(error => {
    console.error('Error loading dad jokes:', error);
    // Fallback jokes in case the file doesn't load
    dadJokes = 
    
    [
      {"id": 1, "joke": "I couldn't figure out why the baseball kept getting larger. Then it hit me."},
      {"id": 2, "joke": "What's the difference between a hippo and a zippo? One is really heavy, the other is a little lighter."},
      {"id": 3, "joke": "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you...'"},
      {"id": 4, "joke": "Why do pirates not know the alphabet? They always get lost at C."},
      {"id": 5, "joke": "What do dentists call their x-rays? Tooth pics."},
      {"id": 6, "joke": "Did you hear about the kidnapping at the playground? They woke up."},
      {"id": 7, "joke": "What did the janitor say when he jumped out of the closet? Supplies!"},
      {"id": 8, "joke": "Why did the hipster burn his mouth? He drank the coffee before it was cool."},
      {"id": 9, "joke": "How does Moses make tea? Hebrews it."},
      {"id": 10, "joke": "Why can't you hear a pterodactyl go to the bathroom? Because the p is silent."},
      {"id": 11, "joke": "What do you call a line of men waiting to get haircuts? A barberqueue."},
      {"id": 12, "joke": "What do you call a deer with no eyes? No idea."},
      {"id": 13, "joke": "What's the best part about living in Switzerland? I don't know, but the flag is a big plus."},
      {"id": 14, "joke": "How do you organize a space party? You planet."},
      {"id": 15, "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."},
      {"id": 16, "joke": "I'm reading a book about anti-gravity. It's impossible to put down!"},
      {"id": 17, "joke": "Why do sea-gulls fly over the sea? Because if they flew over the bay, they'd be bagels."},
      {"id": 18, "joke": "What kind of award did the dentist receive? A little plaque."},
      {"id": 19, "joke": "Why don't scientists trust atoms? Because they make up everything."},
      {"id": 20, "joke": "What sits at the bottom of the sea and twitches? A nervous wreck."},
      {"id": 21, "joke": "What's Forrest Gump's password? 1forrest1"},
      {"id": 22, "joke": "Why couldn't the bicycle stand up by itself? It was two tired."},
      {"id": 23, "joke": "How many tickles does it take to make an octopus laugh? Ten-tickles."},
      {"id": 24, "joke": "What do you call a belt made of watches? A waist of time."},
      {"id": 25, "joke": "What do you call a elephant that doesn't matter? An irrelephant."},
      {"id": 26, "joke": "What did the fish say when it hit the wall? Dam."},
      {"id": 27, "joke": "What do you get from a pampered cow? Spoiled milk."},
      {"id": 28, "joke": "What do you call a sad cup of coffee? Depresso."},
      {"id": 29, "joke": "What did the pirate say on his 80th birthday? Aye matey!"},
      {"id": 30, "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one."},
      {"id": 31, "joke": "Why don't eggs tell jokes? They'd crack each other up."},
      {"id": 32, "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."},
      {"id": 33, "joke": "What do you call a fake noodle? An impasta."},
      {"id": 34, "joke": "What's brown and sticky? A stick."},
      {"id": 35, "joke": "Did you hear about the cheese factory explosion? There was nothing left but de-brie."},
      {"id": 36, "joke": "When does a joke become a dad joke? When it becomes apparent."},
      {"id": 37, "joke": "I used to be a baker, but I couldn't make enough dough."},
      {"id": 38, "joke": "What did the buffalo say to his son when he left for college? Bison."},
      {"id": 39, "joke": "Did you hear about the guy who invented Lifesavers? They say he made a mint."},
      {"id": 40, "joke": "I used to be addicted to the hokey pokey, but I turned myself around."},
      {"id": 41, "joke": "Why don't skeletons fight each other? They don't have the guts."},
      {"id": 42, "joke": "How do you make holy water? You boil the hell out of it."},
      {"id": 43, "joke": "What's the difference between a poorly dressed man on a trampoline and a well-dressed man on a trampoline? Attire."},
      {"id": 44, "joke": "I used to be a banker, but I lost interest."},
      {"id": 45, "joke": "What do you call a factory that makes okay products? A satisfactory."},
      {"id": 46, "joke": "How does a penguin build its house? Igloos it together."},
      {"id": 47, "joke": "Why do melons have weddings? Because they cantaloupe."},
      {"id": 48, "joke": "What do you call a dog that can do magic? A labracadabrador."},
      {"id": 49, "joke": "I'm on a whiskey diet. I've lost three days already."},
      {"id": 50, "joke": "I was wondering why the ball kept getting bigger and bigger, and then it hit me."},
      {"id": 51, "joke": "Why are skeletons so calm? Because nothing gets under their skin."},
      {"id": 52, "joke": "What's Beethoven's favorite fruit? BA-NA-NA-NAAA!"},
      {"id": 53, "joke": "I used to be addicted to soap, but I'm clean now."},
      {"id": 54, "joke": "I have a fear of speedbumps, but I'm slowly getting over it."},
      {"id": 55, "joke": "I invented a new word today: Plagiarism."},
      {"id": 56, "joke": "My boss told me to have a good day, so I went home."},
      {"id": 57, "joke": "Someone broke into my house last night and stole my limbo trophy. How low can you go?"},
      {"id": 58, "joke": "What do you call an alligator in a vest? An investigator."},
      {"id": 59, "joke": "My wife told me to stop impersonating a flamingo. I had to put my foot down."},
      {"id": 60, "joke": "What do you call it when Batman skips church? Christian Bale."},
      {"id": 61, "joke": "Did you hear about the Italian chef who died? He pasta way."},
      {"id": 62, "joke": "Parallel lines have so much in common. It's a shame they'll never meet."},
      {"id": 63, "joke": "Where does a general keep his armies? In his sleevies."},
      {"id": 64, "joke": "Two guys walked into a bar. The third one ducked."},
      {"id": 65, "joke": "What do you call someone with no body and no nose? Nobody knows."},
      {"id": 66, "joke": "I had a neck brace fitted years ago and I've never looked back since."},
      {"id": 67, "joke": "A priest, a rabbi, and a minister walk into a bar. The bartender says, 'What is this, some kind of joke?'"},
      {"id": 68, "joke": "Why is six afraid of seven? Because seven eight nine."},
      {"id": 69, "joke": "What did the left eye say to the right eye? Between you and me, something smells."},
      {"id": 70, "joke": "I have a joke about chemistry, but I don't think it will get a reaction."},
      {"id": 71, "joke": "I tried to catch fog yesterday. Mist."},
      {"id": 72, "joke": "What's the difference between a seal and a sea lion? An ion."},
      {"id": 73, "joke": "I'm friends with all electricians. We have great current connections."},
      {"id": 74, "joke": "The rotation of Earth really makes my day."},
      {"id": 75, "joke": "What do you get when you cross a joke with a rhetorical question?"},
      {"id": 76, "joke": "Two goldfish are in a tank. One says to the other, 'Do you know how to drive this thing?'"},
      {"id": 77, "joke": "What's red and smells like blue paint? Red paint."},
      {"id": 78, "joke": "Why did the man fall down the well? Because he couldn't see that well!"},
      {"id": 79, "joke": "My neighbor asked if he could use my lawnmower. I told him sure, just don't take it out of my yard."},
      {"id": 80, "joke": "Why did the picture go to jail? Because it was framed!"},
      {"id": 81, "joke": "Did you hear about the restaurant called 'Karma'? There's no menu—you get what you deserve."},
      {"id": 82, "joke": "I had a dream that I was floating in an ocean of orange soda. It was a Fanta sea."},
      {"id": 83, "joke": "Did you hear about the circus fire? It was in tents."},
      {"id": 84, "joke": "What do you call a pig that does karate? A pork chop."},
      {"id": 85, "joke": "I've started telling everyone about the benefits of eating dried grapes. It's all about raisin awareness."},
      {"id": 86, "joke": "What did the baby corn say to the mama corn? Where's popcorn?"},
      {"id": 87, "joke": "What do you call an illegally parked frog? Toad."},
      {"id": 88, "joke": "How do you get a country girl's attention? A tractor."},
      {"id": 89, "joke": "Why did the stadium get hot after the game? All the fans left."},
      {"id": 90, "joke": "What do you call a pile of cats? A meowtain."},
      {"id": 91, "joke": "What do you call a dinosaur with an extensive vocabulary? A thesaurus."},
      {"id": 92, "joke": "Why was the belt sent to jail? For holding up a pair of pants."},
      {"id": 93, "joke": "I'm friends with 25 letters of the alphabet. I don't know Y."},
      {"id": 94, "joke": "A woman in labor suddenly shouted, 'Shouldn't! Wouldn't! Couldn't! Didn't! Can't!' The doctor said, 'Don't worry, those are just contractions.'"},
      {"id": 95, "joke": "Did you hear about the claustrophobic astronaut? He needed a little space."},
      {"id": 96, "joke": "What's the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire."},
      {"id": 97, "joke": "What did one elevator say to the other? I think I'm coming down with something."},
      {"id": 98, "joke": "What did the ocean say to the beach? Nothing, it just waved."},
      {"id": 99, "joke": "What did the fish say when it swam into a wall? Dam."},
      {"id": 100, "joke": "What did one toilet say to another toilet? You look flushed."},
      {"id": 101, "joke": "What do you call a bear with no teeth? A gummy bear."},
      {"id": 102, "joke": "What has more lives than a cat? A frog, because it croaks every day."},
      {"id": 103, "joke": "I used to play piano by ear, but now I use my hands."},
      {"id": 104, "joke": "Where do fruits go on vacation? Pear-is."},
      {"id": 105, "joke": "I wouldn't buy anything with velcro. It's a total rip-off."},
      {"id": 106, "joke": "What do you call a cow with two legs? Lean beef."},
      {"id": 107, "joke": "Did you hear about the scientist who was lab partners with a pot of boiling water? He had a very heated relationship."},
      {"id": 108, "joke": "Why don't eggs tell jokes? They might crack up."},
      {"id": 109, "joke": "The shovel was a ground-breaking invention."},
      {"id": 110, "joke": "What time did the man go to the dentist? Tooth-hurty."},
      {"id": 111, "joke": "Did you hear about the guy who invented the knock-knock joke? He won the 'no-bell' prize."},
      {"id": 112, "joke": "A termite walks into a bar and asks, 'Is the bar tender here?'"},
      {"id": 113, "joke": "Why did the invisible man turn down the job offer? He couldn't see himself doing it."},
      {"id": 114, "joke": "What kind of shoes do ninjas wear? Sneakers."},
      {"id": 115, "joke": "How do you make a tissue dance? Put a little boogie in it."},
      {"id": 116, "joke": "Why did the tomato turn red? Because it saw the salad dressing."},
      {"id": 117, "joke": "What do you call a parade of rabbits hopping backwards? A receding hare-line."},
      {"id": 118, "joke": "What do you call a cow with no legs? Ground beef."},
      {"id": 119, "joke": "How do you catch a squirrel? Climb a tree and act like a nut."},
      {"id": 120, "joke": "What's orange and sounds like a parrot? A carrot."},
      {"id": 121, "joke": "Why can't you hear a psychiatrist using the bathroom? Because the P is silent."},
      {"id": 122, "joke": "What did one hat say to the other? You stay here. I'll go on ahead."},
      {"id": 123, "joke": "What did the finger say to the thumb? I'm in glove with you."},
      {"id": 124, "joke": "What is a computer's favorite snack? Computer chips."},
      {"id": 125, "joke": "What do you call cheese that isn't yours? Nacho cheese."},
      {"id": 126, "joke": "Why do cows wear bells? Because their horns don't work."},
      {"id": 127, "joke": "A book just fell on my head. I only have myshelf to blame."},
      {"id": 128, "joke": "I ordered a chicken and an egg online. I'll let you know."},
      {"id": 129, "joke": "What's E.T. short for? Because he's got little legs."},
      {"id": 130, "joke": "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them."},
      {"id": 131, "joke": "I'm on a seafood diet. Every time I see food, I eat it."},
      {"id": 132, "joke": "What did one wall say to the other wall? I'll meet you at the corner."},
      {"id": 133, "joke": "Did you hear about the guy who invented the door knocker? He won the No-bell prize."},
      {"id": 134, "joke": "I've got a joke about construction, but I'm still working on it."},
      {"id": 135, "joke": "I would tell you a chemistry joke, but I know I wouldn't get a reaction."},
      {"id": 136, "joke": "Did you hear about the restaurant called Karma? There's no menu - you get what you deserve."},
      {"id": 137, "joke": "What do you call a fish wearing a crown? King of the sea."},
      {"id": 138, "joke": "What do you call a fish with no eyes? Fsh."},
      {"id": 139, "joke": "What did the grape say when it got stepped on? Nothing, it just let out a little wine."},
      {"id": 140, "joke": "Want to hear a joke about construction? Nah, I'm still working on it."},
      {"id": 141, "joke": "What do you call a can opener that doesn't work? A can't opener."},
      {"id": 142, "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day."},
      {"id": 143, "joke": "My wife said I should do lunges to stay in shape. That would be a big step forward."},
      {"id": 144, "joke": "What's a vampire's favorite fruit? A neck-tarine."},
      {"id": 145, "joke": "My dad unfortunately passed away when we couldn't remember his blood type. His last words were 'Be positive.'"},
      {"id": 146, "joke": "Why did the old man fall in the well? Because he couldn't see that well."},
      {"id": 147, "joke": "What do you call a sleeping bull? A bulldozer."},
      {"id": 148, "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."},
      {"id": 149, "joke": "I don't like elevator jokes. They work on so many levels."},
      {"id": 150, "joke": "My friend drove his expensive car into a tree and found out how the Mercedes bends."},
      {"id": 151, "joke": "I used to hate facial hair, but then it grew on me."},
      {"id": 152, "joke": "I'm so good at sleeping I can do it with my eyes closed."},
      {"id": 153, "joke": "Why did the coffee file a police report? It got mugged."},
      {"id": 154, "joke": "Why don't oysters donate to charity? Because they're shellfish."},
      {"id": 155, "joke": "What happens when a strawberry gets run over crossing the street? Traffic jam."},
      {"id": 156, "joke": "Why couldn't the leopard play hide and seek? Because he was always spotted."},
      {"id": 157, "joke": "Where do you learn to make a banana split? Sundae school."},
      {"id": 158, "joke": "How do astronomers organize a party? They planet."},
      {"id": 159, "joke": "What's the best way to watch a fly fishing tournament? Live stream."},
      {"id": 160, "joke": "Why are graveyards so noisy? Because of all the coffin."},
      {"id": 161, "joke": "What do you call a cow with a twitch? Beef jerky."},
      {"id": 162, "joke": "I told my doctor that I broke my arm in two places. He told me to stop going to those places."},
      {"id": 163, "joke": "Why can't you give Elsa a balloon? Because she will let it go."},
      {"id": 164, "joke": "What musical instrument is found in the bathroom? A tuba toothpaste."},
      {"id": 165, "joke": "What do you get when you cross a snowman with a vampire? Frostbite."},
      {"id": 166, "joke": "What do sprinters eat before a race? Nothing, they fast."},
      {"id": 167, "joke": "My wife told me to take the spider out instead of killing it. We went out, had some drinks. Nice guy. Wants to be a web designer."},
      {"id": 168, "joke": "What kind of tree fits in your hand? A palm tree."},
      {"id": 169, "joke": "What did the digital clock say to its mother? Look, no hands!"},
      {"id": 170, "joke": "Did you hear about the restaurant on the moon? Great food, no atmosphere."},
      {"id": 171, "joke": "What do you call two monkeys that share an Amazon account? Prime mates."},
      {"id": 172, "joke": "I found a wooden shoe in my toilet today. It was clogged."},
      {"id": 173, "joke": "What's a pirate's favorite letter? You'd think it's R, but his first love is the C."},
      {"id": 174, "joke": "What do you call a pony with a sore throat? A little horse."},
      {"id": 175, "joke": "What do you call a man with a rubber toe? Roberto."},
      {"id": 176, "joke": "Where do boats go when they're sick? To the dock."},
      {"id": 177, "joke": "What do you call a boomerang that doesn't come back? A stick."},
      {"id": 178, "joke": "What's brown and sounds like a bell? Dung!"},
      {"id": 179, "joke": "I know a lot of jokes about unemployed people but none of them work."},
      {"id": 180, "joke": "How do you make a Swiss roll? Push him down a mountain."},
      {"id": 181, "joke": "I don't play soccer because I enjoy the sport. I'm just doing it for kicks."},
      {"id": 182, "joke": "How do trees access the internet? They log in."}
    ];  });

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

// Cursor and circle effects
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

// All available assets for the man character
const assets = {
  // Standing emotions
  standing_neutral: 'pixel_art_frames/man_standing_neutral_var0.png',
  standing_neutral_var1: 'pixel_art_frames/man_standing_neutral_var1.png',
  standing_neutral_var2: 'pixel_art_frames/man_standing_neutral_var2.png',
  standing_neutral_var3: 'pixel_art_frames/man_standing_neutral_var3.png',
  standing_neutral_var4: 'pixel_art_frames/man_standing_neutral_var4.png',
  standing_happy: 'pixel_art_frames/man_standing_happy_var0.png',
  standing_happy_var1: 'pixel_art_frames/man_standing_happy_var1.png',
  standing_happy_var2: 'pixel_art_frames/man_standing_happy_var2.png',
  standing_happy_var3: 'pixel_art_frames/man_standing_happy_var3.png',
  standing_happy_var4: 'pixel_art_frames/man_standing_happy_var4.png',
  standing_angry: 'pixel_art_frames/man_standing_angry_var0.png',
  standing_angry_var1: 'pixel_art_frames/man_standing_angry_var1.png',
  standing_angry_var2: 'pixel_art_frames/man_standing_angry_var2.png',
  standing_angry_var3: 'pixel_art_frames/man_standing_angry_var3.png',
  standing_angry_var4: 'pixel_art_frames/man_standing_angry_var4.png',
  standing_frustrated: 'pixel_art_frames/man_standing_frustrated_var0.png',
  standing_frustrated_var1: 'pixel_art_frames/man_standing_frustrated_var1.png',
  standing_frustrated_var2: 'pixel_art_frames/man_standing_frustrated_var2.png',
  standing_frustrated_var3: 'pixel_art_frames/man_standing_frustrated_var3.png',
  standing_frustrated_var4: 'pixel_art_frames/man_standing_frustrated_var4.png',
  standing_sad: 'pixel_art_frames/man_standing_sad_var0.png',
  standing_sad_var1: 'pixel_art_frames/man_standing_sad_var1.png',
  standing_sad_var2: 'pixel_art_frames/man_standing_sad_var2.png',
  standing_sad_var3: 'pixel_art_frames/man_standing_sad_var3.png',
  standing_sad_var4: 'pixel_art_frames/man_standing_sad_var4.png',
  standing_satisfied: 'pixel_art_frames/man_standing_satisfied_var0.png',
  standing_satisfied_var1: 'pixel_art_frames/man_standing_satisfied_var1.png',
  standing_satisfied_var2: 'pixel_art_frames/man_standing_satisfied_var2.png',
  standing_satisfied_var3: 'pixel_art_frames/man_standing_satisfied_var3.png',
  standing_satisfied_var4: 'pixel_art_frames/man_standing_satisfied_var4.png',
  // Walking animations
  walking1_var0: 'pixel_art_frames/man_walking1_var0.png',
  walking1_var1: 'pixel_art_frames/man_walking1_var1.png',
  walking1_var2: 'pixel_art_frames/man_walking1_var2.png',
  walking1_var3: 'pixel_art_frames/man_walking1_var3.png',
  walking1_var4: 'pixel_art_frames/man_walking1_var4.png',
  walking2_var0: 'pixel_art_frames/man_walking2_var0.png',
  walking2_var1: 'pixel_art_frames/man_walking2_var1.png',
  walking2_var2: 'pixel_art_frames/man_walking2_var2.png',
  walking2_var3: 'pixel_art_frames/man_walking2_var3.png',
  walking2_var4: 'pixel_art_frames/man_walking2_var4.png',
  // Bending animations
  bending_var0: 'pixel_art_frames/man_bending_var0.png',
  bending_var1: 'pixel_art_frames/man_bending_var1.png',
  bending_var2: 'pixel_art_frames/man_bending_var2.png',
  bending_var3: 'pixel_art_frames/man_bending_var3.png',
  bending_var4: 'pixel_art_frames/man_bending_var4.png',
  // Holding animations
  holding_var0: 'pixel_art_frames/man_holding_var0.png',
  holding_var1: 'pixel_art_frames/man_holding_var1.png',
  holding_var2: 'pixel_art_frames/man_holding_var2.png',
  holding_var3: 'pixel_art_frames/man_holding_var3.png',
  holding_var4: 'pixel_art_frames/man_holding_var4.png',
  // Dropping animations
  dropping_var0: 'pixel_art_frames/man_dropping_var0.png',
  dropping_var1: 'pixel_art_frames/man_dropping_var1.png',
  dropping_var2: 'pixel_art_frames/man_dropping_var2.png',
  dropping_var3: 'pixel_art_frames/man_dropping_var3.png',
  dropping_var4: 'pixel_art_frames/man_dropping_var4.png',
  // Cheering/surprised animations
  cheering_var0: 'pixel_art_frames/man_surprised_var0.png',
  cheering_var1: 'pixel_art_frames/man_surprised_var1.png',
  cheering_var2: 'pixel_art_frames/man_surprised_var2.png',
  cheering_var3: 'pixel_art_frames/man_surprised_var3.png',
  cheering_var4: 'pixel_art_frames/man_surprised_var4.png',
  // Wet animations for crying or sweating
  wet_var0: 'pixel_art_frames/man_wet_var0.png',
  wet_var1: 'pixel_art_frames/man_wet_var1.png',
  wet_var2: 'pixel_art_frames/man_wet_var2.png',
  wet_var3: 'pixel_art_frames/man_wet_var3.png',
  wet_var4: 'pixel_art_frames/man_wet_var4.png',
  // Reaching up animations
  reaching_up_var0: 'pixel_art_frames/man_reaching_up_var0.png',
  reaching_up_var1: 'pixel_art_frames/man_reaching_up_var1.png',
  reaching_up_var2: 'pixel_art_frames/man_reaching_up_var2.png',
  reaching_up_var3: 'pixel_art_frames/man_reaching_up_var3.png',
  reaching_up_var4: 'pixel_art_frames/man_reaching_up_var4.png'
};

// Helper function to get a random variant of an asset
function getRandomVariant(baseAssetName) {
  const variants = [];
  const baseKey = baseAssetName.split('_var')[0];
  
  // Find all variants of this asset
  for (const key in assets) {
    if (key.startsWith(baseKey)) {
      variants.push(assets[key]);
    }
  }
  
  // Return a random variant
  return variants[Math.floor(Math.random() * variants.length)];
}

  // Create and position brick pile
const brickPile = document.createElement('div');
brickPile.id = 'brick-pile';
brickPile.style.position = 'absolute';
brickPile.style.left = '20px';
brickPile.style.bottom = '0px';
brickPile.style.width = '180px';  // Increased size further
brickPile.style.height = '120px';  // Increased size further
brickPile.style.backgroundImage = "url('pixel_art_frames/brick_pile.png')";
brickPile.style.backgroundSize = 'contain';
brickPile.style.backgroundRepeat = 'no-repeat';
brickPile.style.zIndex = '5';
document.body.appendChild(brickPile);

  // Speech bubble for jokes
const speechBubble = document.createElement('div');
speechBubble.id = 'speech-bubble';
speechBubble.style.position = 'absolute';
speechBubble.style.display = 'none';
speechBubble.style.maxWidth = '250px';
speechBubble.style.padding = '15px';
speechBubble.style.background = 'white';
speechBubble.style.border = '3px solid black';
speechBubble.style.borderRadius = '20px';
speechBubble.style.zIndex = '100';
speechBubble.style.boxShadow = '3px 3px 8px rgba(0,0,0,0.3)';
speechBubble.style.transform = 'translateY(-20px)';
document.body.appendChild(speechBubble);

  // Create a pointer for the speech bubble
const speechPointer = document.createElement('div');
speechPointer.style.position = 'absolute';
speechPointer.style.width = '24px';
speechPointer.style.height = '24px';
speechPointer.style.background = 'white';
speechPointer.style.border = '3px solid black';
speechPointer.style.borderTop = 'none';
speechPointer.style.borderRight = 'none';
speechPointer.style.bottom = '-12px';
speechPointer.style.left = '50%';
speechPointer.style.marginLeft = '-12px';
speechPointer.style.transform = 'rotate(-45deg)';
speechBubble.appendChild(speechPointer);

// Initialize man and wall elements
const man = document.getElementById('man');
const wall = document.getElementById('wall');
man.style.left = '0px';
man.style.bottom = '0px';
man.style.zIndex = '10';
let manX = 0;
let currentRow = 0;
let brickIndex = 0;
let buildVersion = 0;
let bricksPlaced = 0;
let shouldTellJoke = false;

// Brick dimensions and layout
const brickWidth = 50;
const brickHeight = 25;
let numCols = Math.ceil(window.innerWidth / brickWidth);
let numRows = Math.ceil(window.innerHeight / brickHeight);
const bricks = [];

// Initialize bricks grid
for (let row = 0; row < numRows; row++) {
  const offset = (row % 2 === 0) ? 0 : brickWidth / 2;
  for (let col = 0; col < numCols; col++) {
    const left = col * brickWidth + offset;
    const bottom = row * brickHeight;
    bricks.push({ row, col, left, bottom });
  }
}

// Random emotion generator based on context
function getRandomEmotion(context) {
  const emotions = {
    'neutral': ['standing_neutral', 'standing_neutral_var1', 'standing_neutral_var2', 'standing_neutral_var3', 'standing_neutral_var4'],
    'happy': ['standing_happy', 'standing_happy_var1', 'standing_happy_var2', 'standing_happy_var3', 'standing_happy_var4', 'cheering_var0', 'cheering_var1'],
    'angry': ['standing_angry', 'standing_angry_var1', 'standing_angry_var2', 'standing_angry_var3', 'standing_angry_var4'],
    'sad': ['standing_sad', 'standing_sad_var1', 'standing_sad_var2', 'standing_sad_var3', 'standing_sad_var4', 'wet_var0', 'wet_var1'],
    'frustrated': ['standing_frustrated', 'standing_frustrated_var1', 'standing_frustrated_var2', 'standing_frustrated_var3', 'standing_frustrated_var4'],
    'satisfied': ['standing_satisfied', 'standing_satisfied_var1', 'standing_satisfied_var2', 'standing_satisfied_var3', 'standing_satisfied_var4'],
    'tired': ['wet_var2', 'wet_var3', 'wet_var4'],
    'surprised': ['cheering_var0', 'cheering_var1', 'cheering_var2', 'cheering_var3', 'cheering_var4'],
    'reaching': ['reaching_up_var0', 'reaching_up_var1', 'reaching_up_var2', 'reaching_up_var3', 'reaching_up_var4']
  };
  
  let category;
  
  switch (context) {
    case 'buildStart':
      category = Math.random() < 0.7 ? 'neutral' : (Math.random() < 0.5 ? 'happy' : 'frustrated');
      break;
    case 'buildEnd':
      category = Math.random() < 0.6 ? 'satisfied' : (Math.random() < 0.5 ? 'happy' : 'tired');
      break;
    case 'rowComplete':
      category = Math.random() < 0.7 ? 'happy' : (Math.random() < 0.5 ? 'satisfied' : 'tired');
      break;
    case 'brickDropped':
      // Rare chance of a random emotion
      if (Math.random() < 0.05) {
        const allCategories = Object.keys(emotions);
        category = allCategories[Math.floor(Math.random() * allCategories.length)];
      } else {
        category = Math.random() < 0.5 ? 'neutral' : (Math.random() < 0.6 ? 'satisfied' : 'tired');
      }
      break;
    case 'tellJoke':
      category = Math.random() < 0.5 ? 'happy' : 'surprised';
      break;
    case 'reachingUp':
      category = 'reaching';
      break;
    default:
      category = 'neutral';
  }
  
  const emotionList = emotions[category];
  const selectedEmotion = emotionList[Math.floor(Math.random() * emotionList.length)];
  return assets[selectedEmotion];
}

// Walking animation with random variants
function animateWalk() {
  let frame = 0;
  const walkingAssets = [
    [assets.walking1_var0, assets.walking2_var0],
    [assets.walking1_var1, assets.walking2_var1],
    [assets.walking1_var2, assets.walking2_var2],
    [assets.walking1_var3, assets.walking2_var3],
    [assets.walking1_var4, assets.walking2_var4]
  ];
  
  // Choose a random walking style
  const walkStyle = Math.floor(Math.random() * walkingAssets.length);
  
  return setInterval(() => {
    man.src = walkingAssets[walkStyle][frame % 2];
    frame++;
  }, 200);
}

// Move the man character to a specific position
function moveTo(targetX, targetBottom, callback, version) {
  const walkInterval = animateWalk();
  const moveInterval = setInterval(() => {
    if (version !== buildVersion) {
      clearInterval(moveInterval);
      clearInterval(walkInterval);
      return;
    }
    
    // Move horizontally
    if (manX < targetX) {
      manX += WALK_SPEED;
      if (manX > targetX) manX = targetX;
    } else if (manX > targetX) {
      manX -= WALK_SPEED;
      if (manX < targetX) manX = targetX;
    }
    man.style.left = `${manX}px`;
    
    // Move vertically once horizontal position is reached
    if (manX === targetX) {
      const currentBottom = parseInt(man.style.bottom) || 0;
      if (currentBottom < targetBottom) {
        man.style.bottom = `${Math.min(currentBottom + WALK_SPEED, targetBottom)}px`;
      } else if (currentBottom > targetBottom) {
        man.style.bottom = `${Math.max(currentBottom - WALK_SPEED, targetBottom)}px`;
      }
    }
    
    // Check if the destination is reached
    if (manX === targetX && parseInt(man.style.bottom || '0') === targetBottom) {
      clearInterval(moveInterval);
      clearInterval(walkInterval);
      man.src = getRandomEmotion('neutral');
      if (version === buildVersion) callback();
    }
  }, ANIMATION_FRAME_RATE);
}

// Display a joke in the speech bubble with emotion sequence
function tellJoke(version) {
  if (version !== buildVersion) return;
  
  // Go to center stage to tell the joke
  const centerX = window.innerWidth / 2 - 40;
  const currentBottom = parseInt(man.style.bottom) || 0;
  
  moveTo(centerX, currentBottom, () => {
    if (version !== buildVersion) return;
    
    // Get a random joke from the dadJokes array
    // If the array is empty (not loaded yet), use a fallback joke
    const randomJoke = dadJokes.length > 0 
      ? dadJokes[Math.floor(Math.random() * dadJokes.length)]
      : { id: 0, joke: "Why don't scientists trust atoms? Because they make up everything!" };
    
    // Position speech bubble much higher to not obscure the man's face
    speechBubble.textContent = randomJoke.joke;
    speechBubble.style.display = 'block';
    speechBubble.style.left = `${centerX - 100}px`;
    speechBubble.style.bottom = `${currentBottom + 200}px`;  // Positioned much higher
    
    // Sequence of emotions for telling joke
    const emotions = [
      'standing_neutral',
      'standing_happy',
      'standing_satisfied'
    ];
    
    let emotionIndex = 0;
    const emotionInterval = setInterval(() => {
      if (version !== buildVersion) {
        clearInterval(emotionInterval);
        return;
      }
      
      man.src = getRandomVariant(emotions[emotionIndex]);
      emotionIndex = (emotionIndex + 1) % emotions.length;
    }, 800);
    
    // After joke is told, make the man laugh at his own joke
    setTimeout(() => {
      if (version !== buildVersion) {
        clearInterval(emotionInterval);
        return;
      }
      
      clearInterval(emotionInterval);
      
      // Laughing sequence
      let laughCount = 0;
      const laughInterval = setInterval(() => {
        if (version !== buildVersion) {
          clearInterval(laughInterval);
          return;
        }
        
        // Alternate between happy and surprised for laughing effect
        if (laughCount % 2 === 0) {
          man.src = getRandomVariant('standing_happy');
        } else {
          man.src = getRandomVariant('cheering_var');
        }
        
        laughCount++;
        
        if (laughCount >= 6) {
          clearInterval(laughInterval);
          
          // Hide speech bubble and return to normal
          speechBubble.style.display = 'none';
          man.src = getRandomEmotion('neutral');
          
          // Go back to placing bricks
          placeBrick(brickIndex, version);
        }
      }, 500);
    }, SPEECH_BUBBLE_DURATION - 3000);
  }, version);
}

// Core brick placement function
function placeBrick(brickIndex, version) {
  if (version !== buildVersion) return;
  if (brickIndex >= bricks.length) return;
  
  // Check if it's time to tell a joke (increased frequency)
  if (Math.random() < 1/JOKE_FREQUENCY && bricksPlaced > 0) {
    shouldTellJoke = true;
  }
  
  if (shouldTellJoke) {
    shouldTellJoke = false;
    tellJoke(version);
    return;
  }
  
  const brick = bricks[brickIndex];
  const startBottom = currentRow === 0 ? 0 : currentRow * brickHeight;
  const maxBottom = window.innerHeight - 240;
  const adjustedStartBottom = Math.min(startBottom, maxBottom);
  
  // First go to the brick pile
  const brickPileX = 110;  // Adjusted for larger brick pile
  const brickPileBottom = 0; 
  
  moveTo(brickPileX, brickPileBottom, () => {
    if (version !== buildVersion) return;
    
    // Bend down to pick up a brick
    man.src = getRandomVariant('bending_var');
    
    setTimeout(() => {
      if (version !== buildVersion) return;
      
      // Hold the brick
      man.src = getRandomVariant('holding_var');
      
      setTimeout(() => {
        if (version !== buildVersion) return;
        
        // Move to the placement position
        const placeBottom = brick.row === 0 ? 0 : brick.row * brickHeight;
        const adjustedPlaceBottom = Math.min(placeBottom, maxBottom);
        
        moveTo(brick.left, adjustedPlaceBottom, () => {
          if (version !== buildVersion) return;
          
          // Use reaching up animation if placing higher
          if (placeBottom > 50) {
            man.src = getRandomEmotion('reachingUp');
          } else {
            man.src = getRandomVariant('dropping_var');
          }
          
          setTimeout(() => {
            if (version !== buildVersion) return;
            
            // Create and place the brick
            const brickDiv = document.createElement('div');
            brickDiv.className = 'brick';
            brickDiv.style.left = `${Math.min(brick.left, window.innerWidth - 50)}px`;
            brickDiv.style.bottom = `${adjustedPlaceBottom}px`;
            wall.appendChild(brickDiv);
            
            // Update counters
            bricksPlaced++;
            man.src = getRandomEmotion('brickDropped');
            
            // Check if a row is completed
            if (brick.col === numCols - 1) {
              const completedRows = brick.row + 1;
              wall.style.height = `${completedRows * brickHeight}px`;
              
              // Move to center to celebrate
              const centerX = window.innerWidth / 2 - 40;
              moveTo(centerX, adjustedStartBottom, () => {
                if (version !== buildVersion) return;
                
                // Celebrate with happy emotions
                let emoteCount = 0;
                function showRowCompleteEmotion() {
                  if (version !== buildVersion) return;
                  
                  // Show a variety of happy emotions
                  man.src = getRandomEmotion('rowComplete');
                  
                  setTimeout(() => {
                    if (version !== buildVersion) return;
                    emoteCount++;
                    
                    if (emoteCount < 2) {
                      showRowCompleteEmotion();
                    } else {
                      // Update current row and continue building
                      currentRow = completedRows - 1;
                      const climbBottom = Math.min(currentRow * brickHeight, maxBottom);
                      
                      // Move to the new row position
                      moveTo(centerX, climbBottom, () => {
                        if (version !== buildVersion) return;
                        man.src = getRandomEmotion('buildStart');
                        
                        // Continue with the next brick
                        if (brickIndex < bricks.length - 1) {
                          placeBrick(brickIndex + 1, version);
                        }
                      }, version);
                    }
                  }, CHEER_DELAY);
                }
                
                showRowCompleteEmotion();
              }, version);
              
              // Show tear down button after enough rows
              if (completedRows >= 5 && !document.getElementById('tear-down-button')) {
                showTearDownButton();
              }
            } else {
              // Continue with the next brick if row isn't complete
              if (brickIndex < bricks.length - 1) {
                placeBrick(brickIndex + 1, version);
              }
            }
          }, ACTION_DELAY);
        }, version);
      }, ACTION_DELAY);
    }, ACTION_DELAY);
  }, version);
}

// Create and display the tear down button
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
  button.style.backgroundColor = '#ff6b6b';
  button.style.color = 'white';
  button.style.border = '2px solid #c44d56';
  button.style.borderRadius = '8px';
  button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(button);
  
  // Add hover effects
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#ff5252';
    button.style.transform = 'translate(-50%, -50%) scale(1.05)';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#ff6b6b';
    button.style.transform = 'translate(-50%, -50%)';
  });
  
  button.addEventListener('click', tearDownWall);
}

// Tear down the wall and reset
function tearDownWall() {
  buildVersion++;
  const v = buildVersion;
  bricksPlaced = 0;
  
  // Create debris effects
  const numDebris = 40;
  for (let i = 0; i < numDebris; i++) {
    const debris = document.createElement('div');
    debris.className = 'debris';
    debris.style.left = `${Math.random() * 100}%`;
    debris.style.bottom = `${Math.random() * (parseInt(wall.style.height) || 0)}px`;
    debris.style.setProperty('--dx', (Math.random() * 2 - 1).toFixed(2));
    debris.style.setProperty('--dy', (Math.random() * 1).toFixed(2));
    document.body.appendChild(debris);
  }
  
  // Remove debris after animation
  setTimeout(() => {
    document.querySelectorAll('.debris').forEach(debris => debris.remove());
  }, 1500);
  
  // Clear existing bricks and wall
  document.querySelectorAll('.brick').forEach(brick => brick.remove());
  wall.innerHTML = '';
  wall.style.height = '0px';
  wall.style.backgroundColor = 'transparent';
  
  // Remove tear down button
  const btn = document.getElementById('tear-down-button');
  if (btn) document.body.removeChild(btn);
  
  // Hide any visible speech bubble
  speechBubble.style.display = 'none';
  
  // Reset man position
  man.style.left = '0px';
  man.style.bottom = '0px';
  manX = 0;
  currentRow = 0;
  brickIndex = 0;
  
  // Show a celebration animation before starting again
  let emoteCount = 0;
  function showHappyEmotion() {
    if (v !== buildVersion) return;
    
    // Display various happy emotions
    const emotions = ['standing_happy', 'cheering_var0', 'cheering_var1', 'cheering_var2', 'standing_satisfied'];
    man.src = assets[emotions[emoteCount % emotions.length]];
    
    setTimeout(() => {
      if (v !== buildVersion) return;
      emoteCount++;
      
      if (emoteCount < 3) {
        showHappyEmotion();
      } else {
        // Return to the neutral state and start building again
        man.src = getRandomEmotion('neutral');
        placeBrick(0, buildVersion);
      }
    }, CHEER_DELAY);
  }
  
  showHappyEmotion();
}

// Handle window resize
window.addEventListener('resize', () => {
  // Recalculate grid dimensions
  numCols = Math.ceil(window.innerWidth / brickWidth);
  numRows = Math.ceil(window.innerHeight / brickHeight);
  
  // Rebuild the bricks array
  bricks.length = 0;
  for (let row = 0; row < numRows; row++) {
    const offset = (row % 2 === 0) ? 0 : brickWidth / 2;
    for (let col = 0; col < numCols; col++) {
      const left = col * brickWidth + offset;
      const bottom = row * brickHeight;
      bricks.push({ row, col, left, bottom });
    }
  }
  
  // Reset and restart the building process
  tearDownWall();
});

// Add some CSS for the speech bubble
const style = document.createElement('style');
style.textContent = `
  #brick-pile {
    transition: transform 0.3s ease;
  }
  #brick-pile:hover {
    transform: scale(1.1);
  }
  #speech-bubble {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 16px;
    animation: bubble-appear 0.5s ease;
    color: #222;
    font-weight: 600;
    text-align: center;
  }
  @keyframes bubble-appear {
    0% { transform: translateY(50px) scale(0.8); opacity: 0; }
    50% { transform: translateY(-25px) scale(1.05); opacity: 0.9; }
    70% { transform: translateY(-20px) scale(0.95); opacity: 1; }
    100% { transform: translateY(-20px) scale(1); opacity: 1; }
  }
  
  /* Add a long connecting line from speech bubble to character */
  #speech-bubble::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 70px;
    background: black;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
  }
  .brick {
    position: absolute;
    width: ${brickWidth}px;
    height: ${brickHeight}px;
    background-color: #b22222;
    border: 1px solid #8b0000;
    animation: appear 0.3s ease;
  }
  @keyframes appear {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  .debris {
    position: absolute;
    width: ${brickWidth / 3}px;
    height: ${brickHeight / 3}px;
    background-color: #b22222;
    border: 1px solid #8b0000;
    animation: fly 1.5s ease-out forwards;
  }
  @keyframes fly {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    100% { transform: translate(calc(var(--dx) * 400px), calc(var(--dy) * -300px)) rotate(720deg); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Start the building process
placeBrick(0, buildVersion);