var input = document.getElementById('input-contents');

for (var i = 0; i < 50; i++) {
    var tr = document.createElement('tr');

    var num = document.createElement('td');
    num.className = "table-list num-list";
    num.appendChild(document.createTextNode(`${i+1}`));

    var level_input = document.createElement('select');
    level_input.className = "input level-input"

    for (var j = 47; j < 50; j++) {
        var level_value = document.createElement('option');
        level_value.value = `${j+1}`
        level_value.appendChild(document.createTextNode(`${j+1}`));
        level_input.appendChild(level_value);
    }


    var level = document.createElement('td');
    level.className = "table-list level-list";
    level.appendChild(level_input);
    
    var name_input = document.createElement('select');
    name_input.className = "input name-input";

    var sname = document.createElement('td');
    sname.className = "table-list name-list";
    sname.appendChild(name_input);

    var score_input = document.createElement('input');
    score_input.className = "input score-input"
    score_input.type = "number"

    var score = document.createElement('td');
    score.className = "table-list score-list";
    score.appendChild(score_input);

    var fc_check = document.createElement('input');
    fc_check.className = "input fc-input"
    fc_check.type = "checkbox"

    var fullcombo = document.createElement('td');
    fullcombo.className = "table-list fc-list";
    fullcombo.appendChild(fc_check);

    var popclass = document.createElement('td');
    popclass.className = "table-list popclass-list";
    popclass.appendChild(document.createTextNode('0'));

    tr.append(num, level, sname, score, fullcombo, popclass);

    input.appendChild(tr);
}

