// let second = new Date().getSeconds();
// let num = parseInt(second.toString().charAt(second.toString().length - 1));
// let main = document.getElementsByClassName("main")[0];
// let flip = document.getElementsByClassName("flip-card-inner")[0];
// let lower = document.getElementsByClassName("lower")[0];
// let front = document.getElementsByClassName("flip-card-front")[0];
// let back = document.getElementsByClassName("flip-card-back")[0];
// setInterval(() => {
//   let second = new Date().getSeconds();
//   num = parseInt(second.toString().charAt(second.toString().length - 1));
// }, 100);
// setInterval(() => {
//   main.innerHTML = num + 1 > 9 ? 0 : num + 1;
//   back.innerHTML = num + 1 > 9 ? 0 : num + 1;
// }, 1000);
// setInterval(() => {
//   front.innerHTML = num;
//   lower.innerHTML = num;
// }, 999);

// Second (second)
setInterval(() => {
  let el = document.getElementsByClassName("second-second")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 900);
}, 1000);

// Second (first)
setInterval(() => {
  let el = document.getElementsByClassName("first-second")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 1000);
}, 10000);

// Minute (second)

setInterval(() => {
  let el = document.getElementsByClassName("second-minute")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 1000);
}, 60000);

// Minute (first)

setInterval(() => {
  let el = document.getElementsByClassName("first-minute")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 1000);
}, 600000);

// Hour (second)

setInterval(() => {
  let el = document.getElementsByClassName("second-hour")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 1000);
}, 3600000);

// Hour (first)

setInterval(() => {
  let el = document.getElementsByClassName("first-hour")[0];
  let main = document.getElementsByClassName("el main")[0];
  let lower = el.getElementsByClassName("lower")[0];
  let flip = el.getElementsByClassName("flip-card-inner")[0];
  let front = el.getElementsByClassName("flip-card-front")[0];
  let back = el.getElementsByClassName("flip-card-back")[0];
  flip.style.animation = "flip 1s";
  setTimeout(() => {
    flip.style.animation = "none";
  }, 36001000);
}, 36000000);
