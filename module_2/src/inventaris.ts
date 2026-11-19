type Kategori = "minuman" | "makanan" | "alat";

type Barang = {
  readonly sku: string;
  nama: string;
  harga: number;
  kategori: Kategori;
  catatan?: string;
};

type Stok = {
  jumlah: number;
  lokasi: [rak: number, baris: number];
};

type BarangGudang = Barang & Stok;

const gudang: BarangGudang[] = [
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

function cariBarang(
  daftar: BarangGudang[],
  kunci: keyof Barang,
  nilai: string,
) {
  return daftar.find((barang) => {
    if (barang[kunci] === nilai) {
      return true;
    } else {
      return false;
    }
  });
}

function formatId(id: string | number) {
  if (typeof id === "number") {
    return `ID-${id}`;
  }

  return id.toUpperCase();
}

console.log(formatId(123)); // ID - 123;
console.log(formatId("skusoascasj")); // SKUSOASCAS;

console.log(cariBarang(gudang, "nama", "Kopi susu"));
console.log(cariBarang(gudang, "nama", "Boba")); // harus undefined
console.log(cariBarang(gudang, "harga", "18000")); // undefined
console.log(cariBarang(gudang, "harga", "10000")); // undefined

const tesSku = gudang[0];
if (tesSku !== undefined) {
  // tesSku.sku = "X-99" // Error: Cannot assign to 'sku' because it is a read-only property.
}
