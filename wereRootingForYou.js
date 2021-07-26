const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highestRanking = vegetables[0][metric];
  let winningSubmitter = vegetables[0].submitter;
 
  for (let i = 1; i < vegetables.length; i++){
    if (vegetables[i][metric] > highestRanking){
      //console.log(vegetables[i][metric]);
      highestRanking = vegetables[i][metric];
      winningSubmitter = vegetables[i].submitter;
    }

  }
  return winningSubmitter;
}


