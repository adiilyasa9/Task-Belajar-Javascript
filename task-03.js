const subtotal = 60000;
const jarakKm = 5;

let diskon;
let ongkir;
let total;

if (subtotal >= 100000) {
    diskon = subtotal * 0.20; //diskon 20% untuk subtotal >= 100000
} else if (subtotal >= 50000) {
    diskon = subtotal * 0.10; //diskon 10% untuk subtotal >= 50000
} else {
    diskon = 0; //diskon 0% untuk subtotal < 50000
}

total = subtotal - diskon;

if (total >= 75000) {
    ongkir = 0; //ongkir 0% untuk total >= 75000
} else if (jarakKm <= 3) {
    ongkir = 10000; //ongkir 10000 untuk jarak <= 3 km
} else {
    ongkir = 15000;
}

total += ongkir;

console.log("subtotal :Rp " + subtotal);
console.log("diskon :Rp " + diskon);
console.log("ongkir :Rp " + ongkir);
console.log("total :Rp " + total);