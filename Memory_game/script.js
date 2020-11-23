
var img_box = document.querySelectorAll("front face")


var images = new Array();

images[0].src = '/Memory_game/apple.jpg';
images[1].src = 'Memory_game/banana.jpg';
images[2].src = 'Memory_game/orange.jpg';
images[3].src = '/Memory_game/apple.jpg';
images[4].src = 'Memory_game/banana.jpg';
images[5].src = 'Memory_game/orange.jpg';

// Randomize array in place using Durenfeld shuffle // //#endregion
function shuffleArray(images){
    for (var i = images.length - 1; i >0; i--) {
        var j = Math.floor(Math.random() * (i +1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
for (i = 0; i < img_box.length; ++i) {
    for (i = 0; i < images.length; i++) {
    img_box[i].style.background.src = image[i];
}}

function onCardClicked(e) {
    const target = e.currentTarget;
    target.className  = target.className.replace('color-hidden','').trim();
    
}

