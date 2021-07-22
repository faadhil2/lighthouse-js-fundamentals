const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let goodStations = [];
  
  for (let i = 0; i < stations.length; i++){
    let temp = stations[i];
    
    if (temp[1] >= 20 && (temp[2] == "school" || temp [2] == "community centre")) {

      let pollingStation = temp [0];
      goodStations.push(pollingStation);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));