// 1.
function shoutOut () {
    return 'Halo Function!'
}

console.log(shoutOut())

// 2.
function calculateMultiply (num1, num2) {
    return num1 * num2
}

var num1 = 5
var num2 = 6
var hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)

// 3.
function processSentence (name, age, address, hobby) {
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby
}

var name = 'Afdal'
var age = 27
var address = 'Perumahan pondok benda'
var hobby = 'membaca'

var fullSentence = processSentence(name, age, address, hobby)
console.log(fullSentence)
