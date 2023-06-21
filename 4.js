// Tipe data dan map()

const array = [1, 2, 3, "ayam", 5, 6, "kucing", "bebek"];

const bioData = {
  nama: "dika",
  umur: 20
};

const bioDataMahasiswa = [
  {
    nama: "ersan",
    umur: 40
  },
  {
    nama: "dika",
    umur: 23
  },
  {
    nama: "ales",
    umur: 40,
  },
];

bioDataMahasiswa.map(function (data) {
  console.log(`Halo nama saya ${data.nama} dan umur saya ${data.umur} tahun`)
})
