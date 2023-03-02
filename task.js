console.log('buat 2 method procedure')
// Metode 1
function hello(nama, asal, suku, kampus, jurusan) {
    console.log(
    'halo, perkenalkan nama aku ' +
        nama +
        ' dari ' + asal + ' aku dari suku ' + 
        suku +
        ', saat ini sedang menjalani kuliah di ' +
        kampus + 
        ' dengan jurusan ' + jurusan +
        ', salam kenal semuanya'
    )
}
hello('Aryo', 'Bekasi', 'Betawi', 'Universitas Indonesia', 'geologi')

// Metode 2
const greetings = function(nama , asal, suku, kampus , jurusan) {
        console.log(`halo semua, nama aku ${nama}, Aku berdomisili di ${asal}, dan aku dari suku ${suku}. Saat ini aku sedang Kuliah di ${kampus}, jurusan ${jurusan}`)
}
greetings('Aryo', 'Bekasi', 'Betawi', 'Universitas Indonesia', 'geologi')


console.log('====','Fungsi Matematika','====')
let x1 = 2
console.log('f(x) = x ** 2')
function hasilHitung(x1) {
    const hasil1 = (x1 ** 2)
    return hasil1  
}
const hasil1 = hasilHitung(x1)
console.log(hasil1)

let x2 = 2, y2 = 8
console.log('f(x,y) = (x * 2) + (y * 2)')
function hasilHitung(x2,y2) {
    const hasil2 = (x2 * 2) + (y2 * 2)
    return hasil2
    
}
const hasil2 = hasilHitung(x2,y2)
console.log(hasil2)

let x3 = 6, y3 = 2
console.log('f(x,y) = (x * y) / 2')
function hasilHitung(x3,y3) {
    const hasil3 = (x3 * y3) / 2
    return hasil3
}
const hasil3 = hasilHitung(x3,y3)
console.log(hasil3)

let x4 = 5, y4 = 10
console.log('f(x,y) = x * y')
function hasilHitung(x4,y4) {
    const hasil4 = x4 * y4
    return hasil4
}
const hasil4 = hasilHitung(x4,y4)
console.log(hasil4)

let x5 = 4, phi = 22 / 7 
console.log('f(x) = phi * 2 * x')
function hasilHitung(x5) {
    const hasil5 = phi * 2 * x5
    return hasil5
}
const hasil5 = hasilHitung(10)
console.log(hasil5)