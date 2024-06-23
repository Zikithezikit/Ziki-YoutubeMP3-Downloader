function DownloadMP3(){
    window.open("http://localhost:4000/download?url=" + document.getElementById("input-url").value + "&format=mp3");
}