// Modul 2: Array, Tuple, Object, Union, Intersection, Keyof, Enum

// 1. array
const angka: number[] = [1, 2, 3];
const nama: Array<string> = ["Budi", "Sari"];

// angka.push("3"); error

const pertama = angka[0];
console.log(pertama);

// 2. tuple: array dengan panjang dan tipe tiap posisi yang pasti
type Titik = [x: number, y: number];
const lokasi: Titik = [106.8, -6.21];

lokasi[0];
lokasi[1];
// const salah: Titik = [106.8, "3"]; ini salah

// 3. object type dan type alias
type Product = {
  readonly sku: string;
  nama: string;
  harga: number;
  deskripsi?: string;
};

const kopi: Product = {
  sku: "K-01",
  nama: "Kopi Susu",
  harga: 18000,
};
// kopi.sku = "K-02";          // Error: readonly

console.log(kopi);

// 4. union dan literal types
type Id = string | number;
type Status = "menunggu" | "diproses" | "selesai";

function tampil(id: Id) {
  if (typeof id === "string") {
    return id.toUpperCase(); // jika id string
  }

  return id.toFixed(2); // jika id number
}
// Union berarti “salah satu dari”. Ini yang kamu pakai di string | null dan Status di program kasir.

// 5. intersection = menggabungkan beberapa tipe menjadi satu yang punya semua propertinya:
type Jejak = {
  created_at: Date;
  updated_at: Date;
};

type ProductTercatat = Product & Jejak;

const p: ProductTercatat = {
  sku: "T-01",
  nama: "Teh",
  harga: 8000,
  created_at: new Date(),
  updated_at: new Date(),
};
console.log(p);

// 6. keyof = keyof mengambil semua nama properti sebuah tipe sebagai union:
type KunciProduk = keyof Product; // sku, nama, harga, deskripsi

function ambil(p: Product, kunci: keyof Product) {
  return p[kunci];
}

console.log(ambil(kopi, "harga"));
console.log(ambil(kopi, "sku"));

// 7. enum
enum Hari {
  Senin,
  Selasa,
  Rabu,
  Kamis,
  Jumat,
}

enum Role {
  Admin = "ADMIN",
  User = "USER",
}

// Berbeda dengan fitur lain, enum tidak hanya tipe, karena ia menghasilkan kode JavaScript nyata.
//
// Itu membuatnya bermasalah kalau file .ts dijalankan langsung oleh Node (type stripping),
// karena Node hanya membuang tipe dan tidak menerjemahkan enum. Banyak tim modern lebih suka alternatif yang sudah kamu kenal:
const Roles = {
  Admin: "Admin",
  User: "User",
} as const;

type Persan = (typeof Roles)[keyof typeof Roles];
