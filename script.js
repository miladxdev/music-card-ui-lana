let menuButton = document.getElementById('menu');
let backButton = document.getElementById('back');
let album = document.getElementById('album');

let coverImg = document.getElementById('cover');
let homeButton = document.getElementById('home');
let artist = document.getElementById('artist');

menuButton.addEventListener('click', function() {
    album.style.left = 0;
    album.style.right = 0;
});

backButton.addEventListener('click', function() {
    album.style.left = '100%';
    album.style.right = '-100%';
});

coverImg.addEventListener('click', function() {
    artist.style.top = 0;
    artist.style.bottom = 0;
});
homeButton.addEventListener('click', function() {
    artist.style.top = '100%';
    artist.style.bottom = '-100%';
});