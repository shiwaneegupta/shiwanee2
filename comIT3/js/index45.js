const playerName = 'Patrik Laine is lame';
const team = ' New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = ' Winnipeg is the best Canadian city, Go Winnipeg';
const result1 = playerName.slice(0,-4);
const result2 = team.slice(46,51);
const result22 = team.charAt(47).toUpperCase() +team.slice(48,51);
const result3 = message.slice(12,21);
const result4 = message.slice(35,39);
console.log(result1, result2,result3,result4);
const result11 = playerName.slice(0,-7).toUpperCase()+playerName.slice(12,16);
console.log(result11,result3,result22,'player',result4,result22,'!!!');