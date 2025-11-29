// Part 1

// 1.1
function showMessage() {
    setTimeout(() {
        console.log("Hello after 3 seconds");
    }, 3000);
}

// 1.2
function helloUser(name) {
    setTimeout(() 
    {
        console.log("Hello, " + name);
    }, 2000);
}



// 2.1
function counter1to10() {
    let n = 1;
    let t = setInterval(() 
    {
        console.log(n);
        if (n === 10) clearInterval(t);
        n++;
    }, 1000);
}

// 2.2
function countdown10() {
    let n = 10;
    let t = setInterval(()  {
        console.log(n);
        n--;
        if (n < 0) {
            console.log("Start!");
            clearInterval(t);
        }
    }, 1000);
}



// 3.1
function showDate() {
    let d = new Date();
    let day = String(d.getDate()).padStart(2, "0");
    let month = String(d.getMonth() + 1).padStart(2, "0");
    let year = d.getFullYear();
    console.log({day}.{month}.{year});
}

// 3.2
function getAge(year) {
    let now = new Date().getFullYear();
    return now - year;
}

// 3.3
function daysToNewYear() {
    let now = new Date();
    let next = new Date(now.getFullYear() + 1, 0, 1);
    let diff = next - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log("Days left: " + days);
}



// 4.1
function random1to100() {
    return Math.floor(Math.random() * 100) + 1;
}

// 4.2
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

// 4.3
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}


// 5.1
function countdownToDate(targetDate) {
    let end = new Date(targetDate);
    let timer = setInterval(() => {
        let now = new Date();
        let diff = end - now;

        if (diff <= 0) {
            console.log("Time is over!");
            clearInterval(timer);
            return;
        }

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        let mins = Math.floor(diff / (1000 * 60)) % 60;
        let secs = Math.floor(diff / 1000) % 60;

        console.log(Left: {days} days {hours} hours {mins} minutes {secs} seconds);}, 1000);
}




// 6.1
function digitalClock() {
    setInterval(() => {
        let d = new Date();
        let h = String(d.getHours()).padStart(2, "0");
        let m = String(d.getMinutes()).padStart(2, "0");
        let s = String(d.getSeconds()).padStart(2, "0");
        console.log({h}:{m}:{s});
    }, 1000);
}

// 6.2
function textBlink(id) {
    let colors = ["red", "blue", "green", "purple"];
    let i = 0;
    setInterval(() => {
        document.getElementById(id).style.color = colors[i];
        i++;
        if (i === colors.length) i = 0;
    }, 500);
}