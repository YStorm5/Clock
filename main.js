var date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(`${hour} ${minute} ${second}`);
var num = 1;
let main = document.getElementsByClassName("main")[0];
let flip = document.getElementsByClassName("flip-card-inner")[0];
let lower = document.getElementsByClassName("lower")[0];
let front = document.getElementsByClassName("flip-card-front")[0];
let back = document.getElementsByClassName("flip-card-back")[0];

// setInterval(() => {
//   num = num > 9 ? 1 : num;
//   front.innerHTML = num;
//   lower.innerHTML = num;
//   main.innerHTML = num + 1 > 9 ? 1 : num + 1;
//   flip.style.transition = "transform 2.5s";
//   flip.style.transform = "rotateX(-90deg)";
//   setTimeout(() => {
//     flip.style.transition = "transform 2.5s";
//     flip.style.transform = "rotateX(-180deg)";
//     main.style.zIndex = 10;
//     lower.style.zIndex = 1;
//     back.innerHTML = num + 1 > 9 ? 1 : num + 1;
//   }, 2500);
//   setTimeout(() => {
//     front.innerHTML = num + 1 > 9 ? 1 : num + 1;
//     lower.innerHTML = num + 1 > 9 ? 1 : num + 1;
//     lower.style.zIndex = 10;
//     main.style.zIndex = 1;
//     flip.style.transform = "";
//     flip.style.transition = "none";
//     num += 1;
//   }, 5000);
// }, 5000);
flip.style.transition = "transform 0.5s";
flip.style.transform = "rotateX(-150deg)";
main.style.zIndex = 0;
flip.style.zIndex = 10;
main.style.zIndex = 11;
lower.style.zIndex = 1;

// setInterval(() => {
//   front.style.zIndex = 10;
//   main.style.zIndex = 1;
//   lower.style.zIndex = 10;
//   back.style.zIndex = 1;
//   num = num > 9 ? 1 : num;
//   main.innerHTML = num + 1 > 9 ? 1 : num + 1;

//   flip.style.transition = "transform 0.5s";
//   flip.style.transform = "rotateX(-30deg)";

//   setTimeout(() => {
//     main.style.zIndex = 10;
//     lower.style.zIndex = 1;
//     front.style.zIndex = 1;
//     back.style.zIndex = 10;
//     back.innerHTML = num + 1 > 9 ? 1 : num + 1;
//     flip.style.transition = "transform 0.5s";
//     flip.style.transform = "rotateX(-180deg)";
//   }, 500);

//   setTimeout(() => {
//     num = num + 1;
//     lower.innerHTML = num;
//     front.innerHTML = num;
//     flip.style.transition = "none";
//     flip.style.transform = "";
//   }, 1000);
// }, 1000);
