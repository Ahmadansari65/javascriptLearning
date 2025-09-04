const character = "#";
const count = 6;
const rows = [];

function parRow(rowNumber, rowCount){
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 *rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for(let i = 0; i < count; i++){
  rows.push(parRow(i+1, count));
}
for(let i = 5; i >= 0; i--){
  console.log(rows[i]);
}
// console.log(rows[0]);
// console.log(rows[2]);
// console.log(rows[4]);

// let result = "";

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);