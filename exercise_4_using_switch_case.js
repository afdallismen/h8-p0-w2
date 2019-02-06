var tanggal = 14
var bulan = 8
var tahun = 1991

switch (bulan) {
    case 1:
        bulan = 'Januari'
        break
    case 2:
        bulan = 'Februari'
        break
    case 3:
        bulan = 'Maret'
        break
    case 4:
        bulan = 'April'
        break
    case 5:
        bulan = 'Mei'
        break
    case 6:
        bulan = 'Juni'
        break
    case 7:
        bulan = 'Juli'
        break
    case 8:
        bulan = 'Agustus'
        break
    case 9:
        bulan = 'September'
        break
    case 10:
        bulan = 'Oktober'
        break
    case 11:
        bulan = 'November'
        break
    case 12:
        bulan = 'Desember'
        break
}

if (tanggal < 1 || tanggal > 31) {
    console.log('Tanggal yang anda gunakan harus berada pada range 1-31')
} else if (bulan < 1 || bulan > 12) {
    console.log('Bulan yang anda gunakan harus berada pada range 1-12')
} else if (tahun < 1900 || tahun > 2200) {
    console.log('Tahun yang anda gunakan harus berada pada range 1900-2200')
} else {
    console.log(tanggal + ' ' + bulan + ' ' + tahun)
}