const cacheKey = "DATAMAHASISWA";
let dataCache = [];

const inputNama = document.querySelector("#nama");
const inputUmur = document.querySelector("#umur");
const inputProdi = document.querySelector("#prodi");

const submit = document.querySelector("#submit");

const table = document.querySelector("#table");

submit.addEventListener("click", function () {
  const data = {
    nama: inputNama.value,
    umur: inputUmur.value,
    prodi: inputProdi.value
  };

  const element = `
    <tr>
      <td>${data.nama}</td>
      <td>${data.umur}</td>
      <td>${data.prodi}</td>
    </tr>
  `

  table.innerHTML += element;

  dataCache.push(data);
  localStorage.setItem(cacheKey, JSON.stringify(dataCache));
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem(cacheKey) === null) {
    localStorage.setItem(cacheKey, JSON.stringify(dataCache));
  } else {
    dataCache = JSON.parse(localStorage.getItem(cacheKey));
    console.log(dataCache)

    dataCache.map(function (data) {
      const element = `
        <tr>
          <td>${data.nama}</td>
          <td>${data.umur}</td>
          <td>${data.prodi}</td>
        </tr>
      `;

      table.innerHTML += element;
    })
  }
})