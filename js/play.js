function pauseau() {
    var mymp3 = document.getElementById("mp3");
    var playbtn = document.getElementsByClassName("playBtn");
    if (mymp3.paused) {
        mymp3.play();
        playbtn[0].className = "playBtn";
    }
    else {
        mymp3.pause();
        playbtn[0].className = "playBtn playBtn_stopturn";
    }
}