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
let secsec = document.getElementsByClassName("second-second")[0];
let secsec_main = secsec.getElementsByClassName("main")[0];
let secsec_lower = secsec.getElementsByClassName("lower")[0];
let secsec_flip = secsec.getElementsByClassName("flip-card-inner")[0];
let secsec_front = secsec.getElementsByClassName("flip-card-front")[0];
let secsec_back = secsec.getElementsByClassName("flip-card-back")[0];

let firstsec = document.getElementsByClassName("first-second")[0];
let firstsec_main = firstsec.getElementsByClassName("main")[0];
let firstsec_lower = firstsec.getElementsByClassName("lower")[0];
let firstsec_flip = firstsec.getElementsByClassName("flip-card-inner")[0];
let firstsec_front = firstsec.getElementsByClassName("flip-card-front")[0];
let firstsec_back = firstsec.getElementsByClassName("flip-card-back")[0];

let secmin = document.getElementsByClassName("second-minute")[0];
let secmin_main = secmin.getElementsByClassName("main")[0];
let secmin_lower = secmin.getElementsByClassName("lower")[0];
let secmin_flip = secmin.getElementsByClassName("flip-card-inner")[0];
let secmin_front = secmin.getElementsByClassName("flip-card-front")[0];
let secmin_back = secmin.getElementsByClassName("flip-card-back")[0];

let now = new Date();
let second, minute, hour;
let fsec, ssec, fmin, smin, fh, sh;
setInterval(() => {
  now = new Date();
  second = now.getSeconds();
  minute = now.getMinutes();
  hour = now.getHours().toLocaleString("en-us");
  // Second (1)
  if (parseInt(second) % 10 == 0) {
    firstsec_flip.style.animation = "flip 1s";
    if (second.toString().length < 2) {
      fsec = 0;
    } else {
      fsec = second.toString().charAt(0);
    }
    firstsec_front.innerHTML = fsec;
    firstsec_lower.innerHTML = fsec;
    firstsec_main.innerHTML = parseInt(fsec);
    firstsec_back.innerHTML = parseInt(fsec);
    firstsec_flip.style.animation = "flip 1s";
    setTimeout(() => {
      firstsec_flip.style.animation = "none";
      firstsec_front.innerHTML = parseInt(fsec);
      firstsec_lower.innerHTML = parseInt(fsec);
    }, 900);
  }

  // Second (2)
  if (second.toString().length < 2) {
    secsec_lower.innerHTML = second.toString().charAt(0);
    secsec_front.innerHTML = second.toString().charAt(0);
    secsec_main.innerHTML =
      parseInt(second.toString().charAt(0)) + 1 > 9
        ? 0
        : parseInt(second.toString().charAt(0)) + 1;
    secsec_back.innerHTML =
      parseInt(second.toString().charAt(0)) + 1 > 9
        ? 0
        : parseInt(second.toString().charAt(0)) + 1;
  } else {
    secsec_front.innerHTML = second.toString().charAt(1);
    secsec_lower.innerHTML = second.toString().charAt(1);
    secsec_main.innerHTML =
      parseInt(second.toString().charAt(1)) + 1 > 9
        ? 0
        : parseInt(second.toString().charAt(1)) + 1;
    secsec_back.innerHTML =
      parseInt(second.toString().charAt(1)) + 1 > 9
        ? 0
        : parseInt(second.toString().charAt(1)) + 1;
  }
  secsec_flip.style.animation = "flip 1s";
  setTimeout(() => {
    secsec_flip.style.animation = "none";
    if (second.toString().length < 2) {
      secsec_lower.innerHTML =
        parseInt(second.toString().charAt(0)) + 1 > 9
          ? 0
          : parseInt(second.toString().charAt(0)) + 1;
      secsec_front.innerHTML =
        parseInt(second.toString().charAt(0)) + 1 > 9
          ? 0
          : parseInt(second.toString().charAt(0)) + 1;
    } else {
      secsec_front.innerHTML =
        parseInt(second.toString().charAt(1)) + 1 > 9
          ? 0
          : parseInt(second.toString().charAt(1)) + 1;
      secsec_lower.innerHTML =
        parseInt(second.toString().charAt(1)) + 1 > 9
          ? 0
          : parseInt(second.toString().charAt(1)) + 1;
    }
  }, 900);
  // ------------------------------------------------------------------------------------- //

  if (second % 60 == 0) {
    if (minute.toString().length < 2) {
      smin = parseInt(minute.toString().charAt(0));
    } else {
      smin = parseInt(minute.toString().charAt(1));
    }
    secmin_main.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    secmin_back.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    secmin_flip.style.animation = "flip 1s";
    setTimeout(() => {
      secmin_flip.style.animation = "none";
      secmin_front.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
      secmin_lower.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    }, 900);
  }

  if (minute % 10 == 0) {
    if (minute.toString().length < 2) {
      smin = minute.toString().charAt(0);
      fmin = 0;
    } else {
      smin = minute.toString().charAt(1);
      fmin = minute.toString().charAt(0);
    }
  }

  if (minute % 60 === 0) {
    if (hour.length < 2) {
      sh = hour.charAt(0);
      fh = 0;
    } else {
      sh = hour.charAt(1);
      fh = hour.charAt(0);
    }
  }
}, 1000);
// Second (second)
// setInterval(() => {
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 900);
// }, 1000);

// Second (first)
// setInterval(() => {
//   let el = document.getElementsByClassName("first-second")[0];
//   let main = el.getElementsByClassName("el main")[0];
//   let lower = el.getElementsByClassName("lower")[0];
//   let flip = el.getElementsByClassName("flip-card-inner")[0];
//   let front = el.getElementsByClassName("flip-card-front")[0];
//   let back = el.getElementsByClassName("flip-card-back")[0];
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 1000);
// }, 10000);

// Minute (second)

// setInterval(() => {
//   let el = document.getElementsByClassName("second-minute")[0];
//   let main = document.getElementsByClassName("el main")[0];
//   let lower = el.getElementsByClassName("lower")[0];
//   let flip = el.getElementsByClassName("flip-card-inner")[0];
//   let front = el.getElementsByClassName("flip-card-front")[0];
//   let back = el.getElementsByClassName("flip-card-back")[0];
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 1000);
// }, 60000);

// Minute (first)

// setInterval(() => {
//   let el = document.getElementsByClassName("first-minute")[0];
//   let main = document.getElementsByClassName("el main")[0];
//   let lower = el.getElementsByClassName("lower")[0];
//   let flip = el.getElementsByClassName("flip-card-inner")[0];
//   let front = el.getElementsByClassName("flip-card-front")[0];
//   let back = el.getElementsByClassName("flip-card-back")[0];
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 1000);
// }, 600000);

// Hour (second)

// setInterval(() => {
//   let el = document.getElementsByClassName("second-hour")[0];
//   let main = document.getElementsByClassName("el main")[0];
//   let lower = el.getElementsByClassName("lower")[0];
//   let flip = el.getElementsByClassName("flip-card-inner")[0];
//   let front = el.getElementsByClassName("flip-card-front")[0];
//   let back = el.getElementsByClassName("flip-card-back")[0];
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 1000);
// }, 3600000);

// Hour (first)

// setInterval(() => {
//   let el = document.getElementsByClassName("first-hour")[0];
//   let main = document.getElementsByClassName("el main")[0];
//   let lower = el.getElementsByClassName("lower")[0];
//   let flip = el.getElementsByClassName("flip-card-inner")[0];
//   let front = el.getElementsByClassName("flip-card-front")[0];
//   let back = el.getElementsByClassName("flip-card-back")[0];
//   if()
//   flip.style.animation = "flip 1s";
//   setTimeout(() => {
//     flip.style.animation = "none";
//   }, 3600100);
// }, 3600000);
