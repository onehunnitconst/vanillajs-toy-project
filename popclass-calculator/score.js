var nums = document.getElementsByClassName('num-list');
var levels = document.getElementsByClassName('level-input');
var names = document.getElementsByClassName('name-input');
var fcombos = document.getElementsByClassName('fc-input');
var scores = document.getElementsByClassName('score-input');
var popclasses = document.getElementsByClassName('popclass-list');
var total_class = document.getElementById('popclass');

for(var i = 0; i < 50; i++){
    levels[i].addEventListener('change', calculate);
    levels[i].addEventListener('change', titles);
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
    popclasses[i].innerHTML=`${score.toFixed(4)}`;
    var total_score = 0;

    for(var j = 0; j < 50; j++){
        total_score = total_score + (+popclasses[j].innerHTML);
    }

    total_score = total_score / 50;

    total_class.innerHTML = `${total_score.toFixed(2)}`;
}

function titles(e) {
    var i = e.target.parentNode.parentNode.firstChild.innerHTML - 1;
    var lv = levels[i].value;
    var all = readText(lv).split("\n");
    console.log(all);
    names[i].innerHTML = "";
    for (var n in all) {
        var a = document.createElement('option');
        a.value = all[n];
        a.appendChild(document.createTextNode(all[n]));
        names[i].appendChild(a);
    }
}

function readText(lv) {
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", `data/level${lv}`, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    rawFile.close();

    return allText;
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