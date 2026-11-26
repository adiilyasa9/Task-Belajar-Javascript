const daftarMenu = ["Espresso", "Latte", "KopiSusu", "Croissant"];

let garis = "";
for (let i = 0; i < 20; i++) {
    garis += "=";
}
console.log(garis);
console.log("MENU KOPI SENJA");
console.log(garis);

for (let i = 0; i < daftarMenu.length; i++) {
    console.log((i + 1) + ". " + daftarMenu[i]);
}
    console.log(garis);