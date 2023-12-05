import { processLines } from "../processLines";

const numberStrings = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let reString = '';
for(let [idx, str] of Object.entries(numberStrings)) {
  reString += `(${str})`;
  if(parseInt(idx) < numberStrings.length - 1) {
    reString += '|';
  }
}
const RE = new RegExp(reString, 'g');
// console.log(reString);
// process.exit();

let sum = 0;
processLines('1/input.txt', (line) => {  

// let line = "zoneight234"
  /* remove any digits */
  // console.log('0: ', line);
  let words = line; //line.replace(/\d/g,"");
  console.log('0: ', words);
  

  numberStrings.forEach((numberString, idx) => {    
    words = words.replace(RE, (match: string) => {
      // console.log('MATHC', match, numberStrings.indexOf(match));
      return (numberStrings.indexOf(match) +1).toString();
      process.exit();
    })
  })
  console.log('2: ',words);
  /* Remove any non digits */
  words = words.replace(/\D/g,"");
  const first = (words[0]);
  const last = (words[words.length -1]);
  sum += parseInt(first + last);  

  console.log('3: ',words);
  console.log('4: ', parseInt(first + last));
}).then(() => console.log(sum))
export {};
// 54403 wrong
// 55061 wrong