function myLocalScope() {
    // Змініть код лише під цим рядком
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Запустіть та перевірте консоль
  // myVar не визначений за межами myLocalScope
  console.log('outside myLocalScope', myVar);
  function caseInSwitch(val) {
    let answer = "";
    // Змініть код лише під цим рядком
  
  
  
    // Змініть код лише над цим рядком
    return answer;
  }
  
  caseInSwitch(1);

  //
  //new step in js

  let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }

  let decision;

  if (count <= 0) {
    decision = 'Hold';
  } else {
    decision = 'Bet';
  }

  return (count + ' ' + decision);
  // Змініть код лише над цим рядком
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

let admin;
let name;
alert(admin);

let ourPlanetName = 'Земля';
let currentUserName = 'Джон';


//-------------------
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push(
  {
    'artist': 'Billy Joel',
    'title': 'Piano Man',
    'release_year': 1973,
    'formats': [
      'cd',
      '8t',
      'LP'
    ]
  }
)