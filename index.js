// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
listBelanjaan = (params) => {
  var arrayList = [];
  for (let i = 0; i  < params.length; i++){
    let deskripsi = `- ${params[i].nama} x ${params[i].kuantitas}`;
    arrayList.push(deskripsi);
  }
  return arrayList;
}
// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
totalBelanjaan = (params) => {
  let i = 0;
  let total = 0;
  while(params[i]){
    const nilai = params[i].harga * params[i].kuantitas;
    total += nilai;
    i++;
  }
  return total;
}
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
