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

let firstmin = document.getElementsByClassName("first-minute")[0];
let firstmin_main = firstmin.getElementsByClassName("main")[0];
let firstmin_lower = firstmin.getElementsByClassName("lower")[0];
let firstmin_flip = firstmin.getElementsByClassName("flip-card-inner")[0];
let firstmin_front = firstmin.getElementsByClassName("flip-card-front")[0];
let firstmin_back = firstmin.getElementsByClassName("flip-card-back")[0];

let firsthour = document.getElementsByClassName("first-hour")[0];
let firsthour_main = firsthour.getElementsByClassName("main")[0];
let firsthour_lower = firsthour.getElementsByClassName("lower")[0];
let firsthour_flip = firsthour.getElementsByClassName("flip-card-inner")[0];
let firsthour_front = firsthour.getElementsByClassName("flip-card-front")[0];
let firsthour_back = firsthour.getElementsByClassName("flip-card-back")[0];

let sechour = document.getElementsByClassName("second-hour")[0];
let sechour_main = sechour.getElementsByClassName("main")[0];
let sechour_lower = sechour.getElementsByClassName("lower")[0];
let sechour_flip = sechour.getElementsByClassName("flip-card-inner")[0];
let sechour_front = sechour.getElementsByClassName("flip-card-front")[0];
let sechour_back = sechour.getElementsByClassName("flip-card-back")[0];

let now = new Date();
let second, minute, hour;
let fsec, ssec, fmin, smin, fh, sh;

// ---- INITIAL TIME ----
second = now.getSeconds().toString();
minute = now.getMinutes().toString();
hour = now.getHours().toLocaleString("en-US");
if (second.length > 1) {
  fsec = second.charAt(0);
  ssec = second.charAt(1);
} else {
  fsec = 0;
  ssec = second.charAt(0);
}
firstsec_front.innerHTML = fsec;
firstsec_lower.innerHTML = fsec;
secsec_front.innerHTML = ssec;
secsec_lower.innerHTML = ssec;
if (minute.length > 1) {
  fmin = minute.charAt(0);
  smin = minute.charAt(1);
} else {
  fmin = 0;
  smin = minute.charAt(0);
}
firstmin_front.innerHTML = fmin;
firstmin_lower.innerHTML = fmin;
secmin_front.innerHTML = smin;
secmin_lower.innerHTML = smin;
if (hour.length > 1) {
  fh = hour.charAt(0);
  sh = hour.charAt(1);
} else {
  fh = 0;
  sh = hour.charAt(0);
}
firsthour_front.innerHTML = fh;
firsthour_lower.innerHTML = fh;
sechour_front.innerHTML = sh;
sechour_lower.innerHTML = sh;

setInterval(() => {
  now = new Date();
  second = now.getSeconds();
  minute = now.getMinutes();
  hour = now.getHours().toLocaleString("en-US");

  // ------------------------------ SECONDS -------------------------------------------- //

  // Second (1)
  if (parseInt(second + 1) % 10 == 0) {
    firstsec_flip.style.animation = "flip 0.9s";
    if (second.toString().length < 2) {
      fsec = 0;
    } else {
      fsec = second.toString().charAt(0);
    }
    firstsec_front.innerHTML = fsec;
    firstsec_lower.innerHTML = fsec;
    firstsec_main.innerHTML = parseInt(fsec) + 1 > 5 ? 0 : parseInt(fsec) + 1;
    firstsec_back.innerHTML = parseInt(fsec) + 1 > 5 ? 0 : parseInt(fsec) + 1;
    firstsec_flip.style.animation = "flip 0.9s";
    setTimeout(() => {
      firstsec_flip.style.animation = "none";
      firstsec_front.innerHTML =
        parseInt(fsec) + 1 > 5 ? 0 : parseInt(fsec) + 1;
      firstsec_lower.innerHTML =
        parseInt(fsec) + 1 > 5 ? 0 : parseInt(fsec) + 1;
    }, 800);
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
  secsec_flip.style.animation = "flip 0.9s";
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
  }, 800);
  // ------------------------------------------------------------------------------------- //

  // ------------------------------ MINUTES -------------------------------------------- //

  // Minute (2)
  if (parseInt(second + 1) % 60 == 0) {
    if (minute.toString().length < 2) {
      smin = parseInt(minute.toString().charAt(0));
    } else {
      smin = parseInt(minute.toString().charAt(1));
    }
    secmin_front.innerHTML = smin;
    secmin_lower.innerHTML = smin;
    secmin_main.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    secmin_back.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    secmin_flip.style.animation = "flip 0.9s";
    setTimeout(() => {
      secmin_flip.style.animation = "none";
      secmin_front.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
      secmin_lower.innerHTML = smin + 1 > 9 ? 0 : smin + 1;
    }, 800);
  }

  // Minute (1)

  if (
    (parseInt(second + 1) *
      (parseInt(
        minute.toString().length > 1
          ? minute.toString().charAt(1)
          : minute.toString().charAt(0)
      ) +
        1)) %
      600 ==
    0
  ) {
    if (minute.toString().length < 2) {
      fmin = parseInt(0);
    } else {
      fmin = parseInt(minute.toString().charAt(0));
    }
    firstmin_front.innerHTML = fmin;
    firstmin_lower.innerHTML = fmin;
    firstmin_main.innerHTML = fmin + 1 > 5 ? 0 : fmin + 1;
    firstmin_back.innerHTML = fmin + 1 > 5 ? 0 : fmin + 1;
    firstmin_flip.style.animation = "flip 0.9s";
    setTimeout(() => {
      firstmin_flip.style.animation = "none";
      firstmin_front.innerHTML = fmin + 1 > 5 ? 0 : fmin + 1;
      firstmin_lower.innerHTML = fmin + 1 > 5 ? 0 : fmin + 1;
    }, 800);
  }

  // ------------------------------------------------------------------------------------- //

  // ------------------------------ HOURS -------------------------------------------- //

  if ((parseInt(second + 1) * parseInt(minute + 1)) % 3600 === 0) {
    if (hour.length < 2) {
      sh = parseInt(hour.charAt(0));
      fh = 0;
    } else {
      sh = parseInt(hour.charAt(1));
      fh = parseInt(hour.charAt(0));
    }
    sechour_front.innerHTML = sh;
    sechour_lower.innerHTML = sh;
    sechour_main.innerHTML = sh + 1 > 9 ? 0 : sh + 1;
    sechour_back.innerHTML = sh + 1 > 9 ? 0 : sh + 1;
    sechour_flip.style.animation = "flip 0.9s";
    setTimeout(() => {
      sechour_flip.style.animation = "none";
      sechour_front.innerHTML = sh + 1 > 9 ? 0 : sh + 1;
      sechour_lower.innerHTML = sh + 1 > 9 ? 0 : sh + 1;
    }, 800);

    if (
      (parseInt(second + 1) * parseInt(minute + 1) * parseInt(hour + 1)) /
        36000 ===
      0
    ) {
      firsthour_front.innerHTML = fh;
      firsthour_lower.innerHTML = fh;
      firsthour_main.innerHTML = fh + 1;
      firsthour_back.innerHTML = fh + 1;
      firsthour_flip.style.animation = "flip 0.9s";
      setTimeout(() => {
        firsthour_flip.style.animation = "none";
        firsthour_front.innerHTML = fh + 1;
        firsthour_lower.innerHTML = fh + 1;
      }, 800);
    }
    if (
      (parseInt(second + 1) * parseInt(minute + 1) * parseInt(hour + 1)) /
        72000 ===
      0
    ) {
      firsthour_front.innerHTML = fh;
      firsthour_lower.innerHTML = fh;
      firsthour_main.innerHTML = fh + 1;
      firsthour_back.innerHTML = fh + 1;
      firsthour_flip.style.animation = "flip 0.9s";
      setTimeout(() => {
        firsthour_flip.style.animation = "none";
        firsthour_front.innerHTML = fh + 1;
        firsthour_lower.innerHTML = fh + 1;
      }, 800);
    }
    if (
      (parseInt(second + 1) * parseInt(minute + 1) * parseInt(hour + 1)) /
        86400 ===
      0
    ) {
      firsthour_front.innerHTML = fh;
      firsthour_lower.innerHTML = fh;
      firsthour_main.innerHTML = 0;
      firsthour_back.innerHTML = 0;
      firsthour_flip.style.animation = "flip 0.9s";
      setTimeout(() => {
        firsthour_flip.style.animation = "none";
        firsthour_front.innerHTML = 0;
        firsthour_lower.innerHTML = 0;
      }, 800);
    }
  }
}, 1000);
