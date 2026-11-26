function hitungSubtotal(harga, jumlah) {
    return harga * jumlah;
  }

  function hitungPajak(subtotal) {
    return subtotal * 11/100;
  }

  function hitungTotal(harga, jumlah) {
    let subtotal = hitungSubtotal(harga, jumlah);
    let pajak = hitungPajak(subtotal);
    return subtotal + pajak;
  }
  const harga = 25000;
  const jumlah = 3;
  
  const subtotal = hitungSubtotal(harga, jumlah);
  const pajak = hitungPajak(subtotal);
  const total = hitungTotal(harga, jumlah);
  console.log(`Subtotal: Rp${subtotal}`);
  console.log(`Pajak: Rp${pajak}`);
  console.log(`Total: Rp${total}`);