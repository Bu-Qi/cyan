new TypeIt("#jcyyzg", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("JCY && YZG")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("第1个七夕...")
    .pause(3000)
    .go();

new TypeIt('#talkToJCY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();