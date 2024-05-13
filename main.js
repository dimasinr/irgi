const audioElement = document.getElementById("audioElement");

export function autoplayAudio() {
    audioElement.play();
}

window.addEventListener("load", autoplayAudio);