
function start() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("cake").style.display = "block";
}

function blowCandles() {
    document.querySelectorAll(".flame").forEach(f => f.style.display = "none");
    setTimeout(() => {
        document.getElementById("cake").style.display = "none";
        document.getElementById("form").style.display = "block";
    }, 1000);
}

function showCard() {
    const imageInput = document.getElementById("imageInput").files[0];
    const musicInput = document.getElementById("musicInput").files[0];
    const reader = new FileReader();
    const audioReader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("userImage").src = e.target.result;
    };

    audioReader.onload = function (e) {
        const music = document.getElementById("music");
        music.src = e.target.result;
        music.play();
    };

    if (imageInput) reader.readAsDataURL(imageInput);
    if (musicInput) audioReader.readAsDataURL(musicInput);

    document.getElementById("form").style.display = "none";
    document.getElementById("card").style.display = "block";
}
