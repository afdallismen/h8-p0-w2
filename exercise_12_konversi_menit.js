function konversiMenit (detik) {
    var menit = Math.floor(detik / 60)
    var mod = detik % 60
    mod = mod < 10 ? '0' + mod : mod
    return '' + menit + ':' + mod
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
