console.log("HITUNG MUNDUR PESANAN");
let angka = 10;
while (angka >= 1){
    console.log(angka);
    angka = angka - 1;
} 

console.log("Pesanan siap!");

console.log();

console.log("POLA BINTANG");
const totalBaris = 5;
for (let baris = 1; baris <= totalBaris; baris++){
    let pola = "";
    for (let kolom = 1; kolom <= baris; kolom++){
        pola += "*";
    }
    console.log(pola);
}