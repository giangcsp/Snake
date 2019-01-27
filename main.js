
function id(i, j) {
    return document.getElementById("i" + i + "j"+j);
}
function genTable() {
    var i, j;
    document.writeln('<table><tbody>');
    for (i = 0; i < 50; i++) {
        document.writeln('<tr>');
        for (j = 0; j < 50; j++) {
            document.writeln('<td align="center" id="i' + i + 'j' + j + '" style="width:8pt; height:8pt"></td>');
        }
        document.writeln('</tr>');
    }
    document.writeln('</tbody></table>');
}
function genFood() {
    var x = random(50)
    var y = random(50)
    id(x, y).style.backgroundColor = "red";
}
function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function setup(){
    for (i = 0; i < 50; i++){
        for (j = 0; j < 50; j++){
            id(i, j).style.backgroundColor = "white";
        }
    }
}   
var startPos = id(random(50), random(50)); 
genTable();
setup();
