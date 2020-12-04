// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;

// тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;


//Шооны альталаараа буусныг хадгалах хувьсагч хэрэгтэй , 1 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var diceNumber = Math.floor( Math.random() * 6) + 1;

// Програм эхлэхэд бэлтгэе

document.getElementById("score-0").textContent = 0 ;
document.getElementById("score-1").textContent = 0 ;
document.getElementById("current-0").textContent = 0 ;
document.getElementById("current-1").textContent = 0 ;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
// 1-6 доторх санаисаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
// 
    diceDom.style.display = "block";
// Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог солино
    diceDom.src = 'dice-' + diceNumber + ".png";
if (diceNumber !== 1){

    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
} else {

    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;


    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

// Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

// шоог түр алга болгоно
diceDom.style.display = "none";
    // if(activePlayer === 0){
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
}
});

document.querySelector(".btn-new").addEventListener("click", function() {
    document.getElementById("score-0").textContent = 0 ;
document.getElementById("score-1").textContent = 0 ;
document.getElementById("current-0").textContent = 0 ;
document.getElementById("current-1").textContent = 0 ;

    diceDom.style.display = "none";
});
// document.querySelector(".btn-hold").addEventListener("click", function() {
//     document.getElementById("score-0").textContent += ;
// document.getElementById("score-1").textContent +=  ;

//     diceDom.style.display = "none";
// });

