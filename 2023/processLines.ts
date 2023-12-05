const fs = require('node:fs');
const readline = require('node:readline');

export async function processLines<T>(filename: string, fn: (line: string) => T) {
    const fileStream = fs.createReadStream(filename);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });    
    for await (const line of rl) {
        fn(line);      
    }    
  }