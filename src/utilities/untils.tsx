
// algorithm credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffleArray(array: any[]) {
    for(let i = array.length-1; i > 0; i--) {
        let random = Math.floor(Math.random() * i);
        [array[i], array[random]] = [array[random], array[i]];
    }
  
    return array;
  }