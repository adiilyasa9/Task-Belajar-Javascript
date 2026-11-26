const nama = "Sakti";
const umur = 20;
const shift = "pagi";
const isAktif = true;
const jamKerja = 8;
const gajiperjam = 5000;
const totalgaji = jamKerja * gajiperjam;


//cetak kartu profil
console.log(`
===KARTU PROFIL BARISTA===
Nama            : ${nama}
Umur            : ${umur}
Shift kerja     : ${shift}
Status Aktif    : ${isAktif}
Tipe umur       : ${typeof umur}
Tipe aktif      : ${typeof isAktif}
Tipe jam kerja  : ${typeof jamKerja}
Tipe gajiperjam : Rp ${gajiperjam}
Tipe totalgaji  : Rp ${totalgaji}
`); 



// Penjelasan mengapa umur sebaiknya number, bukan "20"
// Umur sebaiknya bertipe number agar bisa digunakan untuk perhitungan matematika.
// Contoh: Jika tahun depan umurnya bertambah 1, umur + 1 akan menjadi 23.
// Jika menggunakan string "20", maka "20" + 1 akan digabungkan menjadi teks "201".