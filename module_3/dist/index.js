// Module 3: Functions
// 1. Mengetik parameter dan returns
function tambah(a, b) {
    return a + b;
}
// error:
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(tambah(20, "2"))
console.log(tambah(20, 2));
// 2. Parameter opsional, default, rest
function sapa(nama, sapaan = "Helo", tanda) {
    return `${sapaan}, ${nama}${tanda ?? ""}`;
}
console.log(sapa("Budi")); // "Halo, Budi"
console.log(sapa("Budi", "Selamat pagi")); // "Selamat pagi, Budi"
console.log(sapa("Budi", "Hai", "!")); // "Hai, Budi!"
// tanda?: string adalah parameter opsional. Di dalam fungsi tipenya string | undefined, jadi harus ditangani.
// rest parameter
function jumlahkan(...angka) {
    let total = 0;
    for (let n of angka) {
        total += n;
    }
    return total;
}
console.log(jumlahkan(1, 2, 3, 4, 5));
const kali = (a, b) => a * b;
function hitung(a, b, op) {
    return op(a, b);
}
console.log(hitung(3, 4, kali));
console.log(hitung(3, 4, (x, y) => x - y));
export {};
//# sourceMappingURL=index.js.map