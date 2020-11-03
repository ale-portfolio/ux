
function on() {
    document.getElementById("modal").style.display = "block";
    document.querySelector("main").style.filter = "blur(8px)";

}
function off() {
    document.getElementById("modal").style.display = "none";
    document.querySelector("main").style.filter = "blur(0)";


}
