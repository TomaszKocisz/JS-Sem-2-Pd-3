//                   +-------------------------+
//                   ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//                   +-------------------------+
// 1)	Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure.
// The values in the array are clues. Each cell contains an integer between 11 and 55;
// for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell
//  containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array.
//  (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates.
//  Your program should output the cells it visits during its search, and a message indicating where you found the treasure.

let arr = [
  [
    [3, 4],
    [2, 1],
    [3, 2],
    [4, 1],
    [2, 5],
  ],
  [
    [1, 4],
    [4, 2],
    [4, 3],
    [1, 4],
    [3, 1],
  ],
  [
    [5, 4],
    [4, 5],
    [5, 2],
    [4, 2],
    [2, 3],
  ],
  [
    [3, 3],
    [1, 5],
    [5, 1],
    [3, 1],
    [3, 5],
  ],
  [
    [2, 1],
    [5, 2],
    [3, 3],
    [1, 3],
    [2, 3],
  ],
];

let startPoint = [arr[0][0][0], arr[0][0][1]];
console.log("Start Row: " + startPoint[0] + "; Start Column: " + startPoint[1]);

function play() {
  let nextPoint = [
    arr[startPoint[0] - 1][startPoint[1] - 1][0],
    arr[startPoint[0] - 1][startPoint[1] - 1][1],
  ];
  console.log(nextPoint);
  while (startPoint[0] !== nextPoint[0] || startPoint[1] !== nextPoint[1]) {
    startPoint = nextPoint;
    console.log("Row: " + startPoint[0] + "; Column: " + startPoint[1]);
    nextPoint = [
      arr[startPoint[0] - 1][startPoint[1] - 1][0],
      arr[startPoint[0] - 1][startPoint[1] - 1][1],
    ];
  }
  console.log("Treasure: Row: " + nextPoint[0] + " Column: " + nextPoint[1]);
}
play();

// 2)	Chess board. Program is to choose at random one of the chess piece (except the pawn) and place it at the random spot on
// the board. After placing any piece (except first one) check all present pieces move ranges and see if any can reach other piece.
//  Is so Give that pieces position and quit program. FACTORY (with class hierarhy) + SINGLETON pattern

// 3)	[EXAM] Create bouncy simulator. Get board from ExampleInput.js.
// X – border, 0 – boards object can travel, 1 – bouncing object.
// The program is to show how the object would travel and bounce against the walls.
// The program is to end when object comes back to original position.
