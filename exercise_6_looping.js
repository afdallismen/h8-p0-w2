// 1. Looping menggunakan while
var i = 2

console.log('LOOPING PERTAMA')
while (i <= 20) {
    console.log(i + ' - I love coding')
    i = i + 2
}

i = 20
console.log('LOOPING KEDUA')
while (i >= 2) {
    console.log(i + ' - I will become fullstack developer')
    i = i - 2
}

// 2. Looping menggunakan for
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var i = 20; i >= 1; i--) {
    console.log(i + ' - I will become fullstack developer')
}

// 3. Angka ganjil dan genap
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + " kelipatan 3")
    }
}

for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + " kelipatan 6")
    }
}

for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + " kelipatan 10")
    }
}
