// -----------------------------------------------
// Goal of Extension: Taking a break from work with random pictures of dogs
// Functionality: After a set amount of time spent on a page, while a user is browsing mdn, create a popup/overlay that has pictures of dogs and arrow keys to scroll
// Or a button to generate a new random picture
// The popup will also play a song: https://www.youtube.com/watch?v=goeYYzXGcgw

// document.addEventListener('DOMContentLoaded', () => {
// 1) Create a board/box in CSS to hold our images and main functionality
const pageBody = document.getElementsByTagName("body")[0]; // grab the first <body> element that appears on the page
const board = document.createElement("div"); // create div to represent board
const rules = document.createElement("p");
const textRules = document.createTextNode(
  "You've been working too hard! Take a paws and enjoy these cute dog pictures. Click anywhere within the border for random dog photos to destress during this ruff time."
);
const banner = document.createElement("div");

// const music = document.createElement('audio');
// music.setAttribute('type', 'audio/mpeg');
// music.setAttribute('controls', '')
// music.src = "dogsong.mp3";
// board.appendChild(music);
// music.play();

pageBody.prepend(board); // prepend board to pageBody
rules.appendChild(textRules);
banner.setAttribute("id", "ruleBanner");
banner.appendChild(rules);
board.appendChild(banner);
board.setAttribute("id", "board"); // assign 'board' id to the board div
// const song = new Audio('./dogsong.mp3');
// song.play();

const dogImg = document.createElement("img");
dogImg.setAttribute("id", "dogPic");
board.appendChild(dogImg);
const arr = [];
arr.push(dogImg);

// 1a) FETCH
// https://dog.ceo/api/breeds/image/random
board.addEventListener("click", () => {
  const newDogImg = document.createElement("img");
  newDogImg.setAttribute("id", "dogPic");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      newDogImg.src = data.message;
      board.replaceChild(newDogImg, arr[0]);
      arr.pop();
      arr.push(newDogImg);
      console.log(data.message);
    });
});

// Have board pop up after x amount of time (stretch feature, make it slide out smoothly)
// 2) Create css elements that represent our extensions functionality(arrows, random, exit(escape)
