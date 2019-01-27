//start the snake
var startPosX = random(50);
var startPosY = random(50);
//snake'a cells values
var pos = ["i25j25"];
var celldirect = ["right"];
//turnpoints values                             
var turnp = [];                                        
var turnpdirect = [];
//Read in user movement
document.onkeydown = function(e) {              
    turnp.push(id(posX[-1], posY[-1]));
    switch (e.keyCode) {
        case 37:
            alert('left');
            turnpdirect.push("left");
            break;
        case 38:
            alert('up');
            turnpdirect.push("up");
            break;
        case 39:
            alert('right');
            turnpdirect.push("right");
            break;
        case 40:
            alert('down');
            turnpdirect.push("down");
            break;
    }
};
//main function to run the snake
function move(){
    var x = setInterval(run, 200);
    function run(){
        for (var i in pos){                                //Check if 
            for (var j in pos){                            //snake is dead
                if (pos[i] == pos[j]){                     //or not
                    dead();                                //
                }                                          //
            }                                              //
        }                                                  //
        if (pos[-1]==foodpos){                             //check if snake eats fruit
            var pos1 = pos[0];
            switch (celldirect[0]){
                case "left":
                
            }
        }
        for (var i in pos){                                //Check if snake hits turn points
            for (var j in turnp){
                if (pos[i] == turnp[j]){                  
                    celldirect[i] = turnpdirect[j];
                } else if (i = pos.length() && pos[i] == turnp[j]){         //Check if last cell hits turn point, if so pop turn point  
                    celldirect[i] = turnpdirect[j];
                    turnp.pop();
                    turnpdirect.pop();
                }
            }
        }
    }
}
//quickly change color of cells
function live(i, j){
    id(i, j).style.backgroundColor = "black";
}
function die(i, j){
    id(i, j).style.backgroundColor = "white";
}
//return the snake to other side of map
function convert(x){                                     
    if (x > 49){
        return 0;
    } else if (x < 0){
        return 49;
    } else return x;
}
//end game
function dead(){

}

