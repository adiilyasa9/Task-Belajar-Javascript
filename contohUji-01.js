const nama = "Nadia";
const umur = 22;
const shift = "pagi";
const isAktif = false;
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