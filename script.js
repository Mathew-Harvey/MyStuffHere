const portfolioItems = [
    { title: 'Artificial-Life', url: 'https://mathew-harvey.github.io/Artificial-Life/', imageUrl: 'https://picsum.photos/300/200?random=1' },
    { title: '3dShip', url: 'https://mathew-harvey.github.io/3dShip/', imageUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'BlurredPhotos', url: 'https://mathew-harvey.github.io/BlurredPhotos/', imageUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Portfolio', url: 'https://mathew-harvey.github.io/portfolio/', imageUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'The-Bodyweight-Gym-Online', url: 'https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/', imageUrl: 'https://picsum.photos/300/200?random=5' },
    { title: 'game_of_life', url: 'https://mathew-harvey.github.io/game_of_life/', imageUrl: 'https://picsum.photos/300/200?random=6' },
    { title: 'IWHCManualCompanionApp', url: 'https://mathew-harvey.github.io/IWHCManualCompanionApp/', imageUrl: 'https://picsum.photos/300/200?random=8' },
    { title: 'Clean My Ship', url: 'https://cleanmyship.netlify.app/', imageUrl: 'https://picsum.photos/300/200?random=9' },
    { title: 'A-New-F_framework-for-Understanding-Consciouness', url: 'https://mathew-harvey.github.io/A-New-F_framework-for-Understanding-Consciouness/', imageUrl: 'https://picsum.photos/300/200?random=10' },
    { title: 'CleanHullsClearWaters', url: 'https://mathew-harvey.github.io/CleanHullsClearWaters/', imageUrl: 'https://picsum.photos/300/200?random=11' },
    { title: 'ExtremeLimitFilms', url: 'https://mathew-harvey.github.io/ExtremeLimitFilms/', imageUrl: 'https://picsum.photos/300/200?random=12' },
    { title: 'FoulingCostCalculator', url: 'https://mathew-harvey.github.io/FoulingCostCalculator/', imageUrl: 'https://picsum.photos/300/200?random=13' },
    { title: 'TheHullTruth', url: 'https://mathew-harvey.github.io/TheHullTruth/', imageUrl: 'https://picsum.photos/300/200?random=14' },
    { title: 'bfmpGenerator', url: 'https://mathew-harvey.github.io/bfmpGenerator/', imageUrl: 'https://picsum.photos/300/200?random=15' },
    { title: 'AgenticBubbleSort', url: 'https://mathew-harvey.github.io/AgenticBubbleSort/', imageUrl: 'https://picsum.photos/300/200?random=16' },
    { title: 'ElodieBook_Two', url: 'https://mathew-harvey.github.io/ElodieBook_Two/', imageUrl: 'https://picsum.photos/300/200?random=17' },
    { title: 'ElodieBook_One', url: 'https://mathew-harvey.github.io/ElodieBook_One/', imageUrl: 'https://picsum.photos/300/200?random=18' }
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

// Dynamically create slides
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
    card.appendChild(img);
    card.appendChild(p);
    slide.appendChild(card);
    swiperWrapper.appendChild(slide);
});

// Initialize Swiper with coverflow effect
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