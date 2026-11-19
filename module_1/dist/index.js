// Modul 1: tipe dasar
// 1.1  Type annotation dan primitive typess
let nama = "budi";
console.log(nama);
let umur = 19;
console.log(umur);
let aktif = true;
console.log(aktif);
let saldo = 100n;
console.log(saldo);
// 1.2  Type inference
// typescript dapat menebak tipe nya sendiri tanpa harus didefinisikan terlebih dahulu
let kota = "Jakarta";
// kota = 5 | error: Type 'number' is not assignable to type 'string'
// 1.3  null and undefined
// let judul: string = null;    | error: Error: Type 'null' is not assignable to type 'string'.
let catatan = null; //   Ok, ini union type
console.log(catatan);
// 1.4  any, unknown dan void, never
let a = "halo";
// a.tidakAda.sama.sekali();    // ini tidak error kan, tapi ketika nanti kita di running baru akan error
let u = "halo";
// u.toUpperCase();    // error: Error: 'u' is of type 'unknown'. maka harus dilakukan pengecekan
if (typeof u === "string") {
    u.toUpperCase(); // baru bisa dijalankan
}
function log(pesan) {
    // tidak akan mengembalikkan function apapun
    console.log(pesan);
}
log("halo"); // kalau seperti ini ia akan menampilkan di terminal, tapi kalau kode nya seperti dibawah ini:
let hasil1 = log("test halo");
console.log(hasil1); // output nya undefined
function gagal(pesan) {
    // tidak pernah selesai secara normal atau selalu melempar error dan tidak pernah berhenti
    throw new Error(pesan);
}
// 1.5  Assertions
// assertions berarti kamu memberitahu compiler "aku lebih tahu tipenya". Ini tidak mengubah data saat runtime
let mentah = '{"nama":"Budi"}';
let obj = JSON.parse(mentah); // as [type]
console.log(obj);
// tapi jika kita mengakali nya diubah dengan `{"nama":23}` hasilnya tetap lolos
let warna = ["merah", "kuning"]; // as const jadi readonly, tidak bisa diganti atau di push ke variable nya
const testa = ["merah", "kuning"]; // tipe: string[]
const testb = ["merah", "kuning"]; // tipe: readonly ["merah", "kuning"]
console.log(typeof testa);
console.log(typeof testb);
const palet = {
    merah: [255, 0, 0],
    hijau: "#00ff00",
};
palet.merah.at(1);
palet.hijau.toUpperCase();
export {};
//# sourceMappingURL=index.js.map