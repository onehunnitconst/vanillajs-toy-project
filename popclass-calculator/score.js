var nums = document.getElementsByClassName('num-list');
var levels = document.getElementsByClassName('level-input');
var fcombos = document.getElementsByClassName('fc-input');
var scores = document.getElementsByClassName('score-input');
var popclasses = document.getElementsByClassName('popclass-list');
var total_class = document.getElementById('popclass');

for(var i = 0; i < 50; i++){
    levels[i].addEventListener('change', calculate);
    fcombos[i].addEventListener('input', calculate);
    scores[i].addEventListener('input', calculate);
}

function calculate(e) {
    var i = e.target.parentNode.parentNode.firstChild.innerHTML - 1;
    var score = ((levels[i].value * 10000) + (scores[i].value - 50000) + 3000);
    if(fcombos[i].checked){
        score = score + 2000;
    }
    score = score / 5440;
    if(score < 0){
        score = 0;
    }
    console.log(score);
    popclasses[i].innerHTML=`${score.toFixed(4)}`

    var total_score = 0;

    for(var j = 0; j < 50; j++){
        total_score = total_score + (+popclasses[j].innerHTML);
    }

    total_score = total_score / 50;

    total_class.innerHTML = `${total_score.toFixed(2)}`;
}

// function calculate() {
//     for(var i = 0; i < 50; i++){
//         var score = ((levels[i].value * 10000) + (scores[i].value - 50000) + 3000);
//         if(fcombos[i].checked){
//             score = score + 2000;
//         }
//         score = score / 5440;
//         popclasses[i].innerHTML=`${score}`
//     }
// }