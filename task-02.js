const hargaEspresso = 18000;
const jumlahEspresso = 2;
const hargaLatte = 24000;
const jumlahLatte = 1;
const hargaCroissant = 30000;
const jumlahCroissant = 1;

const totalHargaEspresso = hargaEspresso * jumlahEspresso;
const totalHargaLatte = hargaLatte * jumlahLatte;
const totalHargaCroissant = hargaCroissant * jumlahCroissant;

const subTotal = totalHargaEspresso + totalHargaLatte + totalHargaCroissant;
const pajak = subTotal * 0.1;
const biayaLayanan = subTotal * 0.05;   
const totalBayar = Math.floor(subTotal + pajak + biayaLayanan);

//Struk belanja
console.log(`
    ===STRUK KOPI SENJA===
    Espresso x ${jumlahEspresso}     = Rp ${totalHargaEspresso}
    Latte x ${jumlahLatte}           = Rp ${totalHargaLatte}
    Croissant x ${jumlahCroissant}   = Rp ${totalHargaCroissant}
    ----------------------
    Sub Total       = Rp ${subTotal}
    Pajak (10%)     = Rp ${pajak}
    Biaya Layanan   = Rp ${biayaLayanan}
    Total Bayar     = Rp ${totalBayar}
`)