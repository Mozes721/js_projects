let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0

// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     console.log(`Found at ${foundPos}`);
//     pos = foundPos += 1;
// }

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx')

}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
console.log(truncate("What I'd like to tell on this topic is:", 20))