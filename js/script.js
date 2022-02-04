let indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
let i;
const img = document.querySelectorAll('img');
const slider = document.querySelectorAll('.btm-slides span');
if(e > img.length){indexValue = 1}
if(e < 1){indexValue = img.length}
for(i = 0; i < img.length; i++){
    img[i].style.display = "none";
}
// スライダーをクリックしたら透明に変化
for(i = 0; i < slider.length; i++){
    slider[i].style.background = "rgba(255,255,255,0.1)";
}
img[indexValue-1].style.display = "block";
slider[indexValue-1].style.background = "white";
}

/////////////////////////////////////////////////////////////////
function logger(){
    console.log("She is enaco");
}
logger();
logger();
////////////////////////////////
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5,3);
console.log(appleJuice);
console.log(fruitProcessor(5,3));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
///////////////////////////////
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2011);

console.log(age1, age2);

