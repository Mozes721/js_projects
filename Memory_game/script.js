
function onCardClicked(e) {
    const target = e.currentTarget;
    console.log("It workes", target.className);
    target.className  = target.className.replace('color-hidden','').trim();
    target.className('front-face') = 'red';
}

