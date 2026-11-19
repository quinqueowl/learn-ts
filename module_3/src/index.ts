// Module 3: Functions

// 1. Mengetik parameter dan returns
function tambah(a: number, b: number): number {
  return a + b;
}

// error:
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(tambah(20, "2"))
console.log(tambah(20, 2));

// 2. Parameter opsional, default, rest
function sapa(nama: string, sapaan = "Helo", tanda?: string) {
  return `${sapaan}, ${nama}${tanda ?? ""}`;
}

console.log(sapa("Budi")); // "Halo, Budi"
console.log(sapa("Budi", "Selamat pagi")); // "Selamat pagi, Budi"
console.log(sapa("Budi", "Hai", "!")); // "Hai, Budi!"

// tanda?: string adalah parameter opsional. Di dalam fungsi tipenya string | undefined, jadi harus ditangani.

// rest parameter
function jumlahkan(...angka: number[]): number {
  let total = 0;

  for (let n of angka) {
    total += n;
  }

  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// 3. Function type: fungsi sebagai nilai
// Fungsi juga punya tipe, dan bisa dijadikan parameter (callback) atau disimpan di variabel:

type Operasi = (a: number, b: number) => number;

const kali: Operasi = (a, b) => a * b;

function hitung(a: number, b: number, op: Operasi): number {
  return op(a, b);
}

console.log(hitung(3, 4, kali));
console.log(hitung(3, 4, (x, y) => x - y));
