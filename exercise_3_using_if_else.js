var nama = 'Afdal Lismen'
var peran = 'Penyihir'

if (nama) {
    if (peran) {
        console.log('Selamat datang di dunia Proxytia, ' + nama)
        if (peran === 'ksatria') {
            console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
        } else if (peran === 'Tabib') {
            console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
        } else if (peran === 'Penyihir') {
            console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
        }
    } else {
        console.log('Halo ' + nama + ', pilih peranmu untuk memulai permainan')
    }
} else {
    console.log('Nama harus diisi!')
}
