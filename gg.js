// TASK 1
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2023,
    avgSpeed: 90,
    showInfo: function() {
        return ${this.manufacturer} ${this.model} (${this.year}), average speed: ${this.avgSpeed} km/h;
    },
    calcTime: function(distance) {
        let time = distance / this.avgSpeed;
        let fullHours = Math.floor(time);
        let breaks = Math.floor(fullHours / 4);
        return time + breaks;
    }
};

$("#showCar").click(function() {
    $("#carInfo").html(car.showInfo());
});

$("#calcTime").click(function() {
    let time = car.calcTime(200);
    let hours = Math.floor(time);
    let minutes = Math.round((time - hours) * 60);
    $("#carInfo").html(${car.showInfo()}<br>Time for 200 km: ${hours} h ${minutes} min);
});

// TASK 2
function Fraction(num, den) {
    this.num = num;
    this.den = den;
    this.gcd = function(a, b) {
        while (b) {
            a %= b;
            [a, b] = [b, a];
        }
        return Math.abs(a);
    };
    this.reduce = function() {
        let g = this.gcd(this.num, this.den);
        this.num /= g;
        this.den /= g;
    };
    this.toString = function() {
        return ${this.num}/${this.den};
    };
}

function addFractions(f1, f2) {
    let result = new Fraction(f1.num * f2.den + f2.num * f1.den, f1.den * f2.den);
    result.reduce();
    return result;
}
function subFractions(f1, f2) {
    let result = new Fraction(f1.num * f2.den - f2.num * f1.den, f1.den * f2.den);
    result.reduce();
    return result;
}
function mulFractions(f1, f2) {
    let result = new Fraction(f1.num * f2.num, f1.den * f2.den);
    result.reduce();
    return result;
}
function divFractions(f1, f2) {
    let result = new Fraction(f1.num * f2.den, f1.den * f2.num);
    result.reduce();
    return result;
}

$("#addFrac, #subFrac, #mulFrac, #divFrac").click(function() {
    let num1 = parseInt($("#num1").val()) || 0;
    let den1 = parseInt($("#den1").val()) || 1;
    let num2 = parseInt($("#num2").val()) || 0;
    let den2 = parseInt($("#den2").val()) || 1;

    let f1 = new Fraction(num1, den1);
    let f2 = new Fraction(num2, den2);

    let result;
    if ($(this).attr('id') === 'addFrac') result = addFractions(f1, f2);
    else if ($(this).attr('id') === 'subFrac') result = subFractions(f1, f2);
    else if ($(this).attr('id') === 'mulFrac') result = mulFractions(f1, f2);
    else result = divFractions(f1, f2);

    $("#fracResult").html(Result: {result.toString()});
});

// TASK 3
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
    show: function() {
        return ${this.hours.toString().padStart(2,'0')}:${this.minutes.toString().padStart(2,'0')}:${this.seconds.toString().padStart(2,'0')};
    },
    normalize: function() {
        this.seconds += this.minutes * 60 + this.hours * 3600;
        this.hours = Math.floor(this.seconds / 3600) % 24;
        this.minutes = Math.floor((this.seconds % 3600) / 60);
        this.seconds = this.seconds % 60;
    },
    addSeconds: function(sec) {
        this.seconds += sec;
        this.normalize();
    },
    addMinutes: function(min) {
        this.minutes += min;
        this.normalize();
    },
    addHours: function(hour) {
        this.hours += hour;
        this.normalize();
    }
};

$("#showTime").click(function() {
    $("#timeInfo").html(Current time: {time.show()});
});

$("#addSec").click(function() {
    time.addSeconds(30);
    $("#timeInfo").html(After +30 sec: {time.show()});
});

$("#addMin").click(function() {
    time.addMinutes(45);
    $("#timeInfo").html(After +45 min: {time.show()});
});

$("#addHour").click(function() {
    time.addHours(2);
    $("#timeInfo").html(After +2 h: {time.show()});
});