/**
 * Ive noticed im struggling with nested loops, which is a lil emabaressing
 * as they are fundamental. So lets practice
 */

const printStars = (rows) => {
  for (var o = 0; o < rows; o++) {
    let row = "*";
    for (var i = 0; i < rows; i++) {
      if (i < o) {
        row = row.concat("*");
      }
    }
    console.log(row);
    row = row.concat("\n");
  }
};

printStars(6);

// ok here you ran into an issue confusion at the start val

const multiplicationTable = () => {
  for (var o = 1; o <= 5; o++) {
    let row = ``;
    for (var i = 1; i <= 5; i++) {
      row = row.concat((o * i).toString());
      row = row.concat(" ");
    }
    console.log(row);
  }
};

multiplicationTable();

const findPairs = (arr, target) => {};
