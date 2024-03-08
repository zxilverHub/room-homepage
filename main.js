const left = document.querySelector('.left'),
    right = document.querySelector('.right');

right.addEventListener('click', moveRight)
left.addEventListener('click', moveLeft)

let articleScroll = 0

function moveRight() {
    const articles = document.querySelector('.articles');

    if(articleScroll<(articles.clientWidth*2)) {
        articles.scrollLeft = (articleScroll + articles.clientWidth)
        articleScroll += articles.clientWidth
    }
}

function moveLeft() {
    const articles = document.querySelector('.articles');

    if(articleScroll>0) {
        articles.scrollLeft = (articleScroll - articles.clientWidth)
        articleScroll -= articles.clientWidth
    }
}

const animation = setInterval(animate, 3000);
let heroScroll = 0

function animate() {
    const hero = document.querySelector('.hero');

    if(heroScroll<(hero.clientWidth*2)) {
        hero.scrollLeft = (heroScroll+ hero.clientWidth)
        heroScroll += hero.clientWidth;
    } else {
        hero.scrollLeft = 0
        heroScroll = 0
    }
}