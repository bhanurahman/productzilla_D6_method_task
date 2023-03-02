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
console.log('f(x) = x ** 2')
function hasilHitung(x) {
    const hasil = (x ** 2)
    return hasil  
}
let x = 4
const hasil = hasilHitung(x)
console.log(hasil)

console.log('f(x,y) = (x * 2) + (y * 2)')
function hasilHitung1(x1, y) {
    const hasilNomer2 = (x1 * 2) + (y * 2)
    return hasilNomer2  
}
let x1 = 2, y = 2
const hasilNomer2 = hasilHitung1(x1,y)
console.log(hasilNomer2)

console.log('f(x,y) = (x * y1) / 2')
function hasilHitung2(x2, y1) {
    const hasilNomer3 = (x2 * y1) / 2
    return hasilNomer3  
}
let x2 = 3, y1 = 2
const hasilNomer3 = hasilHitung2(x2,y1)
console.log(hasilNomer3)

console.log('f(x,y) = x * y')
function hasilHitung3(x3, y2) {
    const HasilNomer4 = (x3 * y2)
    return HasilNomer4  
}
let x3 = 2, y2 = 2
const HasilNomer4 = hasilHitung3(x3,y2)
console.log(HasilNomer4)

console.log('f(x) = phi * 2 * x')
function hasilHitung4(x4) {
    const hasilNomer5 = (phi * 2 * x)
    return hasilNomer5  
}
let x4 = 2, phi = 22 / 7
const hasilNomer5 = hasilHitung4(x4)
console.log(hasilNomer5)