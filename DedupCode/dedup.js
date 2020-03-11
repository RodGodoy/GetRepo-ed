
  
'use strict'
/*
    Skeleton code to read from a file in order to dedup the file
    Usage:
    node dedupcode.js dedup.txt > unique.txt
    NOTE - writing console.log() outputs to STDOUT which means the results will not get printed
    to the screen and instead end up in the file called "unique.txt" as shown above.
    If you write things to console.error() those output to STDERR which means they will get printed
    to the screen for you to see (and will NOT end up in unique.txt).
*/
const fs = require("fs");
const readline = require('readline');
if(require.main === module) {
    const theFile = process.argv[2];
    if(theFile === undefined) {
        console.error("Must provide the file to dedup against");
        process.exit(1);
    }
    (async () => {
        console.log(`Reading file ${theFile}`);
        const fileStream = fs.createReadStream(theFile);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let array = [];

        for await (const line of rl) {


            if(array.length == 0){array.push(line)} else {
               if(!(array.includes(line))) {
                   array.push(line);
               }
            }
        }  
        
        console.log(JSON.stringify(array));
    })();
}

