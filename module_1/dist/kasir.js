import { error } from "node:console";
const konfigurasi = {
    namaToko: "Kopi Senja",
    ppn: 0.11,
    jamBuka: [8, 22],
};
// ==== Data tetap: as const ====
const STATUS = ["menunggu", "diproses", "selesai"];
const LEVEL_MEMBER = ["biasa", "silver", "gold"];
const menu = {
    kopiSusu: 18000,
    americano: 14000,
    teh: 6000,
};
// ==== void & never ====
function log(pesan) {
    console.log(`[${konfigurasi.namaToko.toUpperCase()}] ${pesan}`);
}
function gagal(pesan) {
    throw new Error(pesan);
}
// ==== unknown: membaca input dari luar ====
function bacaPesanan(mentah) {
    const data = JSON.parse(mentah);
    if (typeof data !== "object" || data === null) {
        return gagal("Pesanan harus berupa objek");
    }
    if (!("menu" in data) || !("jumlah" in data)) {
        return gagal("Properti menu dan jumlah wajib ada");
    }
    if (typeof data.menu !== "string" || typeof data.jumlah !== "number") {
        return gagal("Menu harus string dan jumlah harus number");
    }
    return {
        menu: data.menu,
        jumlah: data.jumlah,
    };
    // return JSON.parse(mentah) as {
    //   menu: string;
    //   jumlah: number;
    // };
}
// ==== null: logika bisnis ====
function cariDiskon(kode) {
    if (kode === null) {
        return 0;
    }
    return kode === "HEMAT10" ? 0.1 : 0;
}
function diskomMember(level) {
    log(`level member: ${level}`);
    if (level === "gold")
        return 0.15;
    if (level === "silver")
        return 0.1;
    return 0;
}
// diskomMember("platinum");
function hitungTotal(harga, jumlah, diskon) {
    if (jumlah <= 0) {
        return gagal("Jumlah harus lebih dari 0");
    }
    const subtotal = harga * jumlah;
    return subtotal * (1 - diskon) * (1 + konfigurasi.ppn);
}
function ubahStatus(status) {
    log(`Status pesanan: ${status}`);
}
// ==== program utama ====
const kodeVoucher = process.argv[2] ?? null;
const pesanan = bacaPesanan('{"menu":"boba","jumlah":2}');
const harga = menu[pesanan.menu];
if (harga === undefined) {
    gagal(`Menu: "${pesanan.menu}" tidak ditemukan`);
}
const total = hitungTotal(harga, pesanan.jumlah, cariDiskon(kodeVoucher));
log(`Jam buka: ${konfigurasi.jamBuka[0]}.00 - ${konfigurasi.jamBuka[1]}.00`);
ubahStatus(STATUS[0]);
log(`Pesanan: ${pesanan.jumlah}x ${pesanan.menu}`);
log(`Voucher: ${kodeVoucher ?? "tidak ada"}`);
log(`Total bayar: Rp${total.toLocaleString("id-ID")}`);
ubahStatus(STATUS[2]);
//# sourceMappingURL=kasir.js.map