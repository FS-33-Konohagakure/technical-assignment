// Bagian Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Bagian Pop Up Pembayaran
function konfirmasiPembayaran() {
    alert("Pembayaran Telah Berhasil!")
}

const RINCIAN_BIAYA_DOKTER_KANDUNGAN =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter";

  // Pembayaran Dokter Kandungan 1
const totalBiaya = document.getElementById("total-pembayaran")

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${1}`)
.then((respon) => respon.json())
.then((data) => {
  let textBiaya = ""
  const biayaKonsultasi = data.biaya;
  const biayaLayanan = 1000;
  const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan

  textBiaya =
  `
    <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
  `
  totalBiaya.innerHTML += textBiaya;
});

// Pembayaran Dokter Kandungan 2
const totalBiaya2 = document.getElementById("total-pembayaran2")

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${2}`)
.then((respon) => respon.json())
.then((data) => {
  let textBiaya = ""
  const biayaKonsultasi = data.biaya;
  const biayaLayanan = 1000;
  const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan

  textBiaya =
  `
    <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
  `
  totalBiaya2.innerHTML += textBiaya;
});

// Pembayaran Dokter Kandungan 3
const totalBiaya3 = document.getElementById("total-pembayaran3")

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${3}`)
.then((respon) => respon.json())
.then((data) => {
  let textBiaya = ""
  const biayaKonsultasi = data.biaya;
  const biayaLayanan = 1000;
  const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan

  textBiaya =
  `
    <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
  `
  totalBiaya3.innerHTML += textBiaya;
});

const RINCIAN_BIAYA_DOKTER_ANAK =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/2/dokter";

  // Pembayaran Dokter Anak 1
  const totalBiaya4 = document.getElementById("total-pembayaran4")

  fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${4}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya4.innerHTML += textBiaya;
  });

  // Pembayaran Dokter Anak 2
  const totalBiaya5 = document.getElementById("total-pembayaran5")

  fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${5}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya5.innerHTML += textBiaya;
  });

  // Pembayaran Dokter Anak 3
  const totalBiaya6 = document.getElementById("total-pembayaran6")

  fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${6}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya6.innerHTML += textBiaya;
  });

const RINCIAN_BIAYA_DOKTER_GIGI =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/3/dokter";

  // Pembayaran Dokter Gigi 1
  const totalBiaya7 = document.getElementById("total-pembayaran7")

  fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${7}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya7.innerHTML += textBiaya;
  });

  // Pembayaran Dokter Gigi 2
  const totalBiaya8 = document.getElementById("total-pembayaran8")

  fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${8}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya8.innerHTML += textBiaya;
  });

  // Pembayaran Dokter Gigi 3
  const totalBiaya9 = document.getElementById("total-pembayaran9")

  fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${9}`)
  .then((respon) => respon.json())
  .then((data) => {
    let textBiaya = ""
    const biayaKonsultasi = data.biaya;
    const biayaLayanan = 1000;
    const totalBiayaPembayaran = biayaKonsultasi + biayaLayanan
  
    textBiaya =
    `
      <p class="text-lg font-semibold">Rp. ${totalBiayaPembayaran}</p>
    `
    totalBiaya9.innerHTML += textBiaya;
  });