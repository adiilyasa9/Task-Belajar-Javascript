const kodeVoucher = "SENJA20";

let status;
let potongan;
let keterangan;

switch (kodeVoucher) {
    case "SENJA10":
        status = "valid";
        potongan = 10;
        keterangan = "diskon 10%";
        break;
    
    case "SENJA20":
        status = "valid";
        potongan = 20;
        keterangan = "diskon 20%";
        break;
        
    case "GRATISONGKIR":
        status = "valid";
        potongan = 0;
        keterangan = "Gratis ongkir";
        break;
    
    default:
        status = "tidak valid";
        potongan = 0;
        keterangan = "Tidak ada potongan";
        break;
}

console.log("Kode Voucher : " + kodeVoucher);
console.log("Status       : " + status);
console.log("Potongan     : " + potongan + "%");
console.log("Keterangan   : " + keterangan);