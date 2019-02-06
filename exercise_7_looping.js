// 1. Menyusun barisan bintang
var rows1 = 5

for (var i=0; i<rows1; i++) {
    console.log('*')
}

// 2. Menyusun barisan bintang dengan nested looping
var rows2 = 5

for (var i=0; i<rows2; i++) {
    var bintang = ''
    for (var j=0; j<rows2; j++) {
        bintang += '*'
    }
    console.log(bintang)
}

// 3. Menyusun barisan tangga bintang dengan nested looping
var rows3 = 5

for (var i=0; i<rows3; i++) {
    var bintang = ''
    for (var j=0; j<i+1; j++) {
        bintang += '*'
    }
    console.log(bintang)
}
