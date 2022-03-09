// function map(arr,fn) {
    
// }
// Sum of Squares 
data = [1,2,3,4,5];
const sumOfSquares = data.reduce((pV, cV)=>{
    pV +=(cV*cV);
    return pV; 
  },0);

  console.log(sumOfSquares);


  data2 = ['Mary','had','a', 'little','lamb'];

  const sentence = data2.reduce((pV, cV)=>{
    pV +=(cV.toUpperCase() + ' ')
    return pV; 
  },'');

  console.log(sentence);