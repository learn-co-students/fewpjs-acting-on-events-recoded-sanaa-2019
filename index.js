let dodger=document.getElementById("dodger");
dodger.style.backgroundColor="#ff69b4";
dodger.style.bottom="0";

function moveDodgerLeft(){
    let leftNumbers=dodger.style.left;
    //console.log(leftNumbers);
    let left=parseInt(leftNumbers,10);
    if(left>0){
        dodger.style.left=`${left-1}px`;
    }
}
function moveDodgerRight(){
    let rightNumbers=dodger.style.left;
    //console.log(rightNumbers);
    let right=parseInt(rightNumbers,10);
    if(right<360){
        dodger.style.left=`${right+1}px`;
    }
}
document.addEventListener("keydown", function(s) {
    if(s.key=="ArrowLeft"){
        moveDodgerLeft();
    }
    if(s.key=="ArrowRight"){
        moveDodgerRight();
    }
});
