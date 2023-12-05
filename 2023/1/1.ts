import { processLines } from "../processLines";

const fs = require('node:fs');
const readline = require('node:readline');

let sum = 0;
processLines('1/input.txt', (line) => {
  const nums = line.replace(/\D/g,"");
  const first = (nums[0]);
  const last = (nums[nums.length -1]);
  sum += parseInt(first + last);  
}).then(() => console.log(sum))
export {};
