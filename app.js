var isNewGame;
// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer;

// тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;

var diceDom = document.querySelector(".dice");

initGame();

function initGame(){
    isNewGame = true;

    activePlayer = 0;

    scores = [0, 0];

    roundScore = 0;

    document.getElementById("score-0").textContent = 0 ;
    document.getElementById("score-1").textContent = 0 ;
    document.getElementById("current-0").textContent = 0 ;
    document.getElementById("current-1").textContent = 0 ;

    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
    
    diceDom.style.display = "none";
}


document.querySelector(".btn-roll").addEventListener("click", function() {
if (isNewGame){
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
    switchToNextplayer();
}
} else {
    alert("Тоглоом дууссан байна New Game  товчийг дарж шинээр эхлэнэ үү")
}
});

//hold товчийн эвент 
document.querySelector(".btn-hold").addEventListener("click", function() {
 if(isNewGame){
        // // уг тоглогчийн цуглуулсан оноог глобал оноон дээр нь нэмж өгнө.
scores[activePlayer] = scores[activePlayer] + roundScore;
// // уг тоглогч хожсон эсхийг шалгана
// // дэлгэц дээр тоог нь өөрчилнө 
document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

// // ээлжийн оноог нь 0 болгоно
    if(scores[activePlayer] >= 100){
        isNewGame = false;
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
         // Тоглогчийн ээлжийг солино
    switchToNextplayer();
    }
 } else {
     alert("Тоглоом дууссан байна New Game  товчийг дарж шинээр эхлэнэ үү")
 }

});
document.querySelector(".btn-new").addEventListener("click", function() {
    initGame();
});


//энэ функц нь 
function switchToNextplayer(){
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;


    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

// Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

// шоог түр алга болгоно
diceDom.style.display = "none";

}