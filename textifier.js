let trnscrpt = ``
//enter above

let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let text = ''

for ( i = 0; i < transcript.length; i++ ){
  if (numbers.includes(transcript[i]) && transcript[i+2] == ":") {
    i = i + 5
  } else {
    text = text + transcript[i];
  }
}

let stringified = JSON.stringify(text);
console.log(stringified.split('\\n').join(' '));
