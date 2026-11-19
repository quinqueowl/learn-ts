const gudang = [
    {
        sku: "K-01",
        nama: "Kopi susu",
        harga: 6000,
        kategori: "minuman",
        catatan: "expired nya cepat",
        jumlah: 200,
        lokasi: [1, 1],
    },
    {
        sku: "K-02",
        nama: "Setrika",
        harga: 32000,
        kategori: "alat",
        jumlah: 30,
        lokasi: [2, 1],
    },
    {
        sku: "K-03",
        nama: "Roti",
        harga: 5000,
        kategori: "makanan",
        catatan: "expired nya cepat",
        jumlah: 130,
        lokasi: [1, 2],
    },
];
function cariBarang(daftar, kunci, nilai) {
    return daftar.find((barang) => {
        if (barang[kunci] === nilai) {
            return true;
        }
        else {
            return false;
        }
    });
}
function formatId(id) {
    if (typeof id === "number") {
        return `ID-${id}`;
    }
    return id.toUpperCase();
}
console.log(formatId(123));
console.log(formatId("skusoascasj"));
console.log(cariBarang(gudang, "nama", "Kopi susu"));
console.log(cariBarang(gudang, "nama", "Boba")); // harus undefined
console.log(cariBarang(gudang, "harga", "18000")); // undefined
console.log(cariBarang(gudang, "harga", "10000")); // undefined
export {};
//# sourceMappingURL=inventaris.js.map