const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// console.log(finalPosition(moves));


const finalPosition = function (moves) {
  let paradeEnd = [0,0];
  

  for (let move of moves){
    if (move == "north"){
      paradeEnd[1] += 1;      
    }
    else if (move == "south"){
      paradeEnd[1] -= 1;  
    }
    else if (move == "east"){
      paradeEnd[0] += 1;      
    }
    else if (move == "west"){
      paradeEnd[0] -= 1;
    }
  }
    return paradeEnd;
}
console.log(finalPosition(moves));
