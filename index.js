// Your code here
let dodger = document.getElementById('dodger');
dodger.style.right = dodger.style.left;

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "");
    leftNumber = parseInt(leftNumber, 10);
    if (leftNumber > 0) {
        dodger.style.left = leftNumber - 1 + 'px';
        console.log('Left');
    }
}
function moveDodgerRight() {
    let rightNumber = dodger.style.right.replace("px", "");
    rightNumber = parseInt(rightNumber, 10);
    let leftNumber = dodger.style.left.replace("px", "");
    leftNumber = parseInt(leftNumber, 10);
    if (rightNumber > 0) {
        dodger.style.left = leftNumber + 1 + 'px';
        console.log('Right');
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
    moveDodgerRight();
    }
});
