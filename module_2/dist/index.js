// Modul 2: Array, Tuple, Object, Union, Intersection, Keyof, Enum
// 1. array
const angka = [1, 2, 3];
const nama = ["Budi", "Sari"];
// angka.push("3"); error
const pertama = angka[0];
console.log(pertama);
const lokasi = [106.8, -6.21];
lokasi[0];
lokasi[1];
const kopi = {
    sku: "K-01",
    nama: "Kopi Susu",
    harga: 18000,
};
// kopi.sku = "K-02";          // Error: readonly
console.log(kopi);
function tampil(id) {
    if (typeof id === "string") {
        return id.toUpperCase(); // jika id string
    }
    return id.toFixed(2); // jika id number
}
const p = {
    sku: "T-01",
    nama: "Teh",
    harga: 8000,
    created_at: new Date(),
    updated_at: new Date(),
};
console.log(p);
function ambil(p, kunci) {
    return p[kunci];
}
console.log(ambil(kopi, "harga"));
console.log(ambil(kopi, "sku"));
// 7. enum
var Hari;
(function (Hari) {
    Hari[Hari["Senin"] = 0] = "Senin";
    Hari[Hari["Selasa"] = 1] = "Selasa";
    Hari[Hari["Rabu"] = 2] = "Rabu";
    Hari[Hari["Kamis"] = 3] = "Kamis";
    Hari[Hari["Jumat"] = 4] = "Jumat";
})(Hari || (Hari = {}));
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
// Berbeda dengan fitur lain, enum tidak hanya tipe, karena ia menghasilkan kode JavaScript nyata.
//
// Itu membuatnya bermasalah kalau file .ts dijalankan langsung oleh Node (type stripping),
// karena Node hanya membuang tipe dan tidak menerjemahkan enum. Banyak tim modern lebih suka alternatif yang sudah kamu kenal:
const Roles = {
    Admin: "Admin",
    User: "User",
};
export {};
//# sourceMappingURL=index.js.map