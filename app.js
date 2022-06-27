// FEAT - Audio, Start, and Play Buttons

window.onload = () => {
  localStorage.setItem('storedPrize', '$ 0');
  //delay display of Start Button on Splashscreen
  const startButton = document.querySelector('#start-button');

  //background music
  //should play on page load

  const bgm = document.getElementById('bgm');
  const muteBGM = document.getElementById('mute');
  const musicButton = document.querySelector('#music-button');
  let isPlaying = true;

  //page transition
  document.body.classList.add('fade-in');

  // play "let's play" bgm
  const letsPlay = new Audio('assets/sounds/letsplay.mp3');
  const playBtn = document.querySelector('.play-button');
  let currentURL = window.location.href;
  let path = 'http://127.0.0.1:5500/group-2-js-game/';

  setTimeout(function () {
    if (startButton == null) {
      console.log('startButton value is null');
    } else {
      startButton.style.display = 'block';
    }
  }, 8000);
  playMusic();

  // function to play music on page load.
  if (muteBGM == null) {
    console.log('muteBGM value is null');
  } else {
    muteBGM.addEventListener('click', function toggleMusic() {
      if (isPlaying == true) {
        pauseMusic();
        isMuteButtonClicked();
      } else {
        playMusic();
        isMuteButtonClicked();
      }
    });
  }

  function isMuteButtonClicked() {
    if (musicButton == null) {
      return 'musicButton returned null value.';
    }
  }

  function playMusic() {
    bgm.play();
    bgm.volume = 0.4;
    isPlaying = true;
    muteBGM.style.backgroundImage = "url('assets/icons/music-icon.svg')";
  }

  function pauseMusic() {
    bgm.pause();
    // to play bgm at the start uncomment code below
    // bgm.currentTime = 0;
    isPlaying = false;
    muteBGM.style.backgroundImage = "url('assets/icons/mute-icon.svg')";
  }

  if (playBtn == null) {
    console.log('playBtn value is null');
  } else {
    playBtn.addEventListener('click', toggleLetsPlay);
  }
  function toggleLetsPlay() {
    letsPlay.play();
    letsPlay.volume = 0.4;
    pauseMusic();
    setTimeout(() => {
      goToPage(currentURL);
    }, 4000);
  }

  // console.log(currentURL);
  const goToPage = (url) => {
    if (url == path + 'player-name.html') {
      window.location.href = 'game.html';
    } else {
      window.location.href = 'index.html';
    }
  };
};

// FEAT - Question Bank and Lifelines

const level1Questions = [
  {
    question: 'What is the universal selector in CSS?',
    choices: {
      A: '?',
      B: '*',
      C: '@',
      D: '!',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What type of element is <article>?',
    choices: {
      A: 'Graphic',
      B: 'Multimedia',
      C: 'Input',
      D: 'Semantic',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'What is not an arithmetic operator in JavaScript?',
    choices: {
      A: '%',
      B: '>',
      C: 'x',
      D: '++',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What year was HTML released?',
    choices: {
      A: '1989',
      B: '1992',
      C: '1993',
      D: '1981',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'The internal clock in JavaScript counts from midnight of what date?',
    choices: {
      A: 'January 1, 1970',
      B: 'January 1, 1972',
      C: 'January 1, 1980',
      D: 'January 1, 1947',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What does CSS stand for?',
    choices: {
      A: 'Cascade Styles Sheet',
      B: 'Cascade Sheets Style',
      C: 'Cascading Sheet Styles',
      D: 'Cascading Style Sheets',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'In Javascript, what method displays a dialog box that prompts the user for input?',
    choices: {
      A: 'confirm()',
      B: 'prompt()',
      C: 'alert()',
      D: 'window.alert()',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'An HTML document can contain _____.',
    choices: {
      A: 'Attributes',
      B: 'Elements',
      C: 'Raw Text',
      D: 'All of the above',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'In order to upload an HTML file to a web server, you use _____?',
    choices: {
      A: 'SIP',
      B: 'FTP',
      C: 'SMTP',
      D: 'HTTP',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['C', 'A', 'D'],
    chosenAlready: false,
  },
  {
    question: 'Which CSS property can we use to control the stack order of multiple divs?',
    choices: {
      A: 'd-index',
      B: 's-index',
      C: 'z-index',
      D: 'x-index',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
];

const level2Questions = [
  {
    question:
      'What is the JavaScript method used to remove the whitespace at the beginning and end of any string?',
    choices: {
      A: 'trim()',
      B: 'trimmed()',
      C: 'strip()',
      D: 'stripped()',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'Where are files stored before they are commited to the local repository?',
    choices: {
      A: 'Saved Files',
      B: 'git cache',
      C: 'Staging Area',
      D: 'git documents',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'Which event is fired when a user clicks on an element in a webpage?',
    choices: {
      A: 'onclick',
      B: 'onmouseclick',
      C: 'onmousedown',
      D: 'onmouseover',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What is the value of "total" if total = 10 + 1 + "3"?',
    choices: {
      A: '14',
      B: '113',
      C: 'This results in an error',
      D: '1013',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'If foo = "door".length * 4, what is the value of the variable foo?',
    choices: {
      A: '2',
      B: '4',
      C: '8',
      D: '16',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'What is the purpose of the <tt> tag in HTML?',
    choices: {
      A: '<tt> is a text formatting tag',
      B: '<tt> is an image formatting tag',
      C: '<tt> is a table formatting tag',
      D: 'None of the above',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'In HTML, the element that defines collecting data from user is called _____.',
    choices: {
      A: '<form>',
      B: '<entry>',
      C: '<textbox>',
      D: '<input>',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'The data type of null is a/an _____.',
    choices: {
      A: 'Function',
      B: 'Undefined',
      C: 'Number',
      D: 'Object',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'Which event can be generated when the mouse leaves an element?',
    choices: {
      A: 'onmousedown',
      B: 'onmouseout',
      C: 'onmousemove',
      D: 'onmouseover',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What method can we use to stop an interval timer in Javascript?',
    choices: {
      A: 'intervalOver()',
      B: 'clearTimer()',
      C: 'clearInterval()',
      D: 'None of the above',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
];

const level3Questions = [
  {
    question: '"b" + "a" ++ "a" + "a" === _____',
    choices: {
      A: 'baaa',
      B: 'baNaNa',
      C: 'string',
      D: 'throws an error',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: '(!+[]+[]+![]).length returns _____',
    choices: {
      A: '12',
      B: 'Throws an error',
      C: '9',
      D: 'NaN',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What is a logical operator that accepts two values and returns the second value if the first one is null or undefined?',
    choices: {
      A: 'Optional Chaining',
      B: 'Nullish Coalescing Operator',
      C: 'Conditional Operator',
      D: 'Bitwise Operator',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question:
      'What will "obj1" return if const obj1 = {a: 1, b: 2}; const obj2 = {b: 1, c: 2}; const obj3 = {c: 1, d: 2}; Object.assign(obj1, obj2, obj3);?',
    choices: {
      A: '{a: 1, b: 1, c: 1, d: 2}',
      B: '{a: 1, b: 1, c: 1, d: 1}',
      C: '{a: 1, b: 1, c: 2, d: 1}',
      D: '{a: 1, b: 1, c: 2, d: 2}',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What command would you use to see a description of all of the available options for a git reset?',
    choices: {
      A: 'git -h reset',
      B: 'git option reset',
      C: 'git reset help',
      D: 'git help reset',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'What option can you use to apply git configurations across your entire git environment?',
    choices: {
      A: '--all',
      B: '--global',
      C: '--master',
      D: '--update',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What does the expression [] == [] evaluate to?',
    choices: {
      A: 'Undefined',
      B: 'null',
      C: 'true',
      D: 'false',
    },
    correctAnswer: 'D',
    incorrectAnswers: ['A', 'B', 'C'],
    chosenAlready: false,
  },
  {
    question: 'What value is returned by Math.cos(Math.PI) ?',
    choices: {
      A: '-1',
      B: '3.14',
      C: '3.14159265358979',
      D: '1',
    },
    correctAnswer: 'A',
    incorrectAnswers: ['C', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What will be the output of print(typeof(NaN))?',
    choices: {
      A: 'Object',
      B: 'String',
      C: 'Number',
      D: 'None of the above',
    },
    correctAnswer: 'C',
    incorrectAnswers: ['A', 'B', 'D'],
    chosenAlready: false,
  },
  {
    question: 'What is "arrTwo" if: const myArr = [1,2,3]; const arrTwo = myArr.splice(0,4).slice(0,2); arrTwo[0] = 9;?',
    choices: {
      A: '[9, 0]',
      B: '[9, 2]',
      C: '[9, 3]',
      D: '[9, 1]',
    },
    correctAnswer: 'B',
    incorrectAnswers: ['A', 'C', 'D'],
    chosenAlready: false,
  },
];

function retrieveName() {
  localStorage.setItem(
    'winnerName',
    document.getElementById('input-name').value
  );
}

if (document.querySelector('#playername-done') !== null) {
  document.querySelector('#playername-done').innerText = localStorage.getItem('winnerName');
}

// Variables for pop-up display
const open1 = document.querySelector('.choice-1');
const open2 = document.querySelector('.choice-2');
const open3 = document.querySelector('.choice-3');
const open4 = document.querySelector('.choice-4');
const modalContainer = document.getElementById('modal-container');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

// Variables for question and choices display
const question = document.getElementById('question');
const choiceA = document.querySelector('.choice-a');
const choiceB = document.querySelector('.choice-b');
const choiceC = document.querySelector('.choice-c');
const choiceD = document.querySelector('.choice-d');

let questionCounter = 1;
const fiftyFiftyChoices = [];

function chooseRandomUnchosenQuestion(arr) {
  const random = Math.floor(Math.random() * arr.length);
  if (arr[random].chosenAlready) {
    return chooseRandomUnchosenQuestion(arr);
  }
  arr[random].chosenAlready = true;
  return arr[random];
}

function checkIfCorrect(clickedButton, questionObj) {
  return clickedButton === questionObj.correctAnswer;
}

function checkDifficultyLevel(questionNumber) {
  if (questionNumber > 4 && questionNumber < 10) {
    return level2Questions;
  }
  if (questionNumber >= 10) {
    return level3Questions;
  }
  return level1Questions;
}

function displayQuestionAndChoices(chosenQuestion) {
  question.innerText = chosenQuestion['question'];
  choiceA.innerText = chosenQuestion.choices['A'];
  choiceB.innerText = chosenQuestion.choices['B'];
  choiceC.innerText = chosenQuestion.choices['C'];
  choiceD.innerText = chosenQuestion.choices['D'];
}

function goToNextQuestion() {
  questionLevel = checkDifficultyLevel(questionCounter);
  chosenQuestion = chooseRandomUnchosenQuestion(questionLevel);
  displayQuestionAndChoices(chosenQuestion);
  questionCounter++;
}

// <Moneyline Highlighted Amount>
let levelsArray = [
  'level-1',
  'level-2',
  'level-3',
  'level-4',
  'level-5',
  'level-6',
  'level-7',
  'level-8',
  'level-9',
  'level-10',
  'level-11',
  'level-12',
  'level-13',
  'level-14',
  'level-15',
];

const highlightLevelInMoneyBoard = () => {
  let currentLevel = document.querySelector(
    '.' + levelsArray[questionCounter - 2]
  );
  currentLevel.style.backgroundColor = 'transparent';
  currentLevel.style.opacity = '.5';

  let nextLevel = document.querySelector(
    '.' + levelsArray[questionCounter - 1]
  );
  nextLevel.style.backgroundColor = '#03a6a6';
  nextLevel.style.borderRadius = '1.5rem';

  if (questionCounter % 5 == 0) {
    nextLevel.style.color = 'white';
  }
};
// </Moneyline Highlighted Amount>

// <Total Prize Amount (Display) the player Won>
const prizelist = [
  100, 100, 100, 200, 500, 1000, 2000, 4000, 8000, 16000, 32000, 61000, 125000,
  250000, 500000,
];
let sum = 0;

const sumPrize = () => {
  const prizeText = document.getElementById('money-level');
  sum += prizelist[questionCounter - 2];
  prizeText.innerText = `$ ${sum.toLocaleString('en', { useGrouping: true })}`;
  localStorage.setItem('storedPrize', prizeText.innerText);
};

//store reward to localStorage
const totalReward = localStorage.getItem('storedPrize');

const rewardText = document.getElementById('money-for-nothing');
if (rewardText !== null) {
  rewardText.innerText = totalReward;
}

// </Total Prize Amount (Display) the player Won>
let questionLevel = checkDifficultyLevel(questionCounter);
let chosenQuestion = chooseRandomUnchosenQuestion(questionLevel);

displayQuestionAndChoices(chosenQuestion);

let clickedAnswer;

open1.addEventListener('click', () => {
  clickedAnswer = 'A';
  modalContainer.classList.add('show');
  thatsItPancit()
});
open2.addEventListener('click', () => {
  clickedAnswer = 'C';
  modalContainer.classList.add('show');
  thatsItPancit()
});
open3.addEventListener('click', () => {
  clickedAnswer = 'B';
  modalContainer.classList.add('show');
  thatsItPancit()
});
open4.addEventListener('click', () => {
  clickedAnswer = 'D';
  modalContainer.classList.add('show');
  thatsItPancit()
});
no.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

const lifelineButtonSkip = document.querySelector('.skip');
let isClicked = false;
const finalRoundAudio = new Audio('assets/sounds/finalround.mp3');

yes.addEventListener('click', () => {
  let result = checkIfCorrect(clickedAnswer, chosenQuestion);
  if (questionCounter === 15 && result) {
    window.location.href = 'game-won.html';
  }
  if (result) {
    console.log('Right!');
    if (isClicked === true) {
      timerTickPause();
      createNode();
      isClicked = false;
    }

    if (questionCounter === 14) {
      bgm.pause();
      finalRoundAudio.play();
    }

    revertToHostStyle();
    reEnableButtons(fiftyFiftyChoices);
    goToNextQuestion();
    highlightLevelInMoneyBoard();
    sumPrize();
    if (questionCounter === 15) {
      lifelineButtonSkip.setAttribute('disabled', '');
    }
  } else {
    window.location.href = 'game-over.html';
  }
  modalContainer.classList.remove('show');
});

const lifelineButtonCall = document.querySelector('.call-a-marvs');
const timerContainer = document.querySelector('.timer-number');
let time = 30;

if (document.body.contains(lifelineButtonCall)) {
  lifelineButtonCall.addEventListener('click', showCount);
} else {
  console.log('none');
}

function showCount() {
  bgm.pause();
  finalRoundAudio.pause();
  timerTick();
  isClicked = true;
  const interval = setInterval(timerStart, 1000);

  function timerStart() {
    time -= 1;
    timerContainer.innerText = time;
    if (time == 0) {
      replayDelay();
      clearTime();
      createNode();
    }
  }

  function clearTime() {
    clearInterval(interval);
  }
}

const replayDelay = () => {
  setTimeout(() => {
    if (questionCounter === 15) {
      finalRoundAudio.play();
    }
    if (questionCounter < 14) {
      bgm.play();
    }
  }, 500);
};

const ticktock = new Audio('assets/sounds/callamarvs2.mp3');
const timerTick = () => {
  ticktock.volume = 0.4;
  ticktock.play();
};

const timerTickPause = () => {
  ticktock.pause();
  replayDelay();
};

function createNode() {
  timerContainer.remove();
  const node = document.createElement('h1');
  const textNode = document.createTextNode('0');
  node.classList.add('timer-number');
  node.appendChild(textNode);
  document.querySelector('.timer-img').appendChild(node).style.opacity = '.65';
}

// pancit bato
function thatsItPancit(){
  const thatsIt = new Audio('assets/sounds/thatsitpancit.mp3');
  if(questionCounter > 14){
    thatsIt.play();
  }
}

//play tick sound on button hover
const buttonsMother = document.querySelector('.choices-container');
const buttonsChild = buttonsMother.getElementsByTagName('button');

if (
  document.body.contains(buttonsMother) ||
  document.body.contains(buttonsChild)
) {
  for (let i = 0; i < buttonsChild.length; i++) {
    buttonsChild[i].addEventListener('mouseenter', function bubbleTick() {
      const buttonTick = new Audio('assets/sounds/bubbleclick.mp3');
      buttonTick.play();
    });
  }
} else {
  console.log('Element not found.');
}

// Variables and Functions for the lifelines
const imgIconContainer = document.querySelector('.img-icon-container');
const imgIconCoaster = document.querySelector('.round-icon-img');
const lifelineLabel = document.querySelector('.lifeline-label-container');
const lifelineLabelIcon = document.querySelector('.lifeline-label-icon');
const lifelineLabelText = document.querySelector('.lifeline-label-text');
imgIconCoaster.style.border = '2rem solid var(--color-deep-lavender)';
const lifelineButtonFifty = document.querySelector('.fifty-fifty');

function revertToHostStyle() {
  lifelineLabel.style.visibility = 'hidden';
  imgIconCoaster.src = '/assets/hosts/img-host.png';
  lifelineLabelText.innerText = '';
  imgIconContainer.style.padding = '0';
  imgIconCoaster.style.border = '2rem solid var(--color-deep-lavender)';
  imgIconCoaster.style.backgroundColor = 'none';
}

function changeToIconCoasterStyle() {
  imgIconCoaster.style.border = 'none';
  imgIconCoaster.style.backgroundColor = 'var(--color-deep-lavender)';
  imgIconContainer.style.padding = '6rem';
}

function chooseRandomIncorrectAnswer(questionObj) {
  const random = Math.floor(
    Math.random() * questionObj.incorrectAnswers.length
  );
  let result = questionObj.incorrectAnswers[random];
  if (fiftyFiftyChoices.includes(result)) {
    return chooseRandomIncorrectAnswer(questionObj);
  }
  fiftyFiftyChoices.push(result);
  return result;
}

function disableCorrespondingButton(key) {
  switch (key) {
    case 'A':
      open1.classList.add('choice-disabled');
      open1.setAttribute('disabled', '');
      break;
    case 'B':
      open3.classList.add('choice-disabled');
      open3.setAttribute('disabled', '');
      break;
    case 'C':
      open2.classList.add('choice-disabled');
      open2.setAttribute('disabled', '');
      break;
    case 'D':
      open4.classList.add('choice-disabled');
      open4.setAttribute('disabled', '');
      break;
  }
}

function reEnableButtons(fiftyFiftyChoices) {
  for (let i = 0; i < fiftyFiftyChoices.length; i++) {
    let disabledAnswer = fiftyFiftyChoices[i];
    switch (disabledAnswer) {
      case 'A':
        open1.classList.remove('choice-disabled');
        open1.removeAttribute('disabled');
        break;
      case 'B':
        open3.classList.remove('choice-disabled');
        open3.removeAttribute('disabled');
        break;
      case 'C':
        open2.classList.remove('choice-disabled');
        open2.removeAttribute('disabled');
        break;
      case 'D':
        open4.classList.remove('choice-disabled');
        open4.removeAttribute('disabled');
        break;
    }
  }
}

lifelineButtonCall.addEventListener('click', () => {
  lifelineButtonCall.setAttribute('disabled', '');
  lifelineButtonCall.classList.add('choice-disabled');
  lifelineLabel.style.visibility = 'visible';
  imgIconContainer.style.padding = '0';
  imgIconCoaster.style.border = '2rem solid var(--color-deep-lavender)';
  lifelineLabelText.innerText = 'Call A Marvs';
  imgIconCoaster.src = '/assets/hosts/img-friend.png';
  window.setTimeout(revertToHostStyle, 30000);
});

lifelineButtonFifty.addEventListener('click', () => {
  lifelineButtonFifty.setAttribute('disabled', '');
  lifelineButtonFifty.classList.add('choice-disabled');
  lifelineLabel.style.visibility = 'visible';
  lifelineLabelText.innerText = '50 / 50';
  imgIconCoaster.src = '/assets/icons/lifeline-1-5050.svg';
  changeToIconCoasterStyle();

  let incorrectAnswer1 = chooseRandomIncorrectAnswer(chosenQuestion);
  let incorrectAnswer2 = chooseRandomIncorrectAnswer(chosenQuestion);

  disableCorrespondingButton(incorrectAnswer1);
  disableCorrespondingButton(incorrectAnswer2);
});

lifelineButtonSkip.addEventListener('click', () => {
  lifelineButtonSkip.setAttribute('disabled', '');
  lifelineButtonSkip.classList.add('choice-disabled');
  lifelineLabel.style.visibility = 'visible';
  lifelineLabelText.innerText = 'Skip A Question';
  imgIconCoaster.src = '/assets/icons/lifeline-3-skip.svg';
  changeToIconCoasterStyle();
  window.setTimeout(revertToHostStyle, 3000);
  reEnableButtons(fiftyFiftyChoices);
  goToNextQuestion();
  if (questionCounter === 15) {
    bgm.pause();
    finalRoundAudio.play();
  }
  highlightLevelInMoneyBoard();
  sumPrize();
  if(questionCounter >= 14){
    bgm.pause();
    finalRoundAudio.play();
  }
});

//GO HOME BUTTON

const goHome = document.querySelector('.go-home');
const goHomePopUp = document.getElementById('modal-gohome');

const yesGoHome = document.getElementById('yes-gohome');
const noGoHome = document.getElementById('no-gohome');

goHome.addEventListener('click', () => {
  goHomePopUp.classList.add('show');
});

yesGoHome.addEventListener('click', () => {
  window.location.href = 'game-over.html';
});

noGoHome.addEventListener('click', () => {
  goHomePopUp.classList.remove('show');
});

//QUIT GAME BUTTON

const quitGame = document.querySelector('.quit-button');
const quitGamePopUp = document.getElementById('modal-quitgame');

const yesQuitGame = document.getElementById('yes-quitgame');
const noQuitGame = document.getElementById('no-quitgame');

quitGame.addEventListener('click', () => {
  quitGamePopUp.classList.add('show');
});

yesQuitGame.addEventListener('click', () => {
  window.location.href = 'index.html';
});

noQuitGame.addEventListener('click', () => {
  quitGamePopUp.classList.remove('show');
});

//Display Player Name
displayName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  let playerNameTrim = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    finalPlayerName = playerNameTrim.exec(url);
  if (!finalPlayerName) return null;
  if (!finalPlayerName[2]) return '';
  return decodeURIComponent(finalPlayerName[2].replace(/\+/g, ' '));
};

const player = displayName('playerName');
const nameOnGamePage = document.getElementById('inputed-name');

nameOnGamePage.innerText = player;
