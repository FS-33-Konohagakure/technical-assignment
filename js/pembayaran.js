// Bagian Awal Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Bagian Akhir Navbar

// Bagian Pop Up Pembayaran
function konfirmasiPembayaran() {
  alert("Pembayaran Telah Berhasil!");
}

// Bagian Awal Pembayaran
const MOCK_API_URL = "https://65255e4467cfb1e59ce728d6.mockapi.io";

function buildRequestUrl(kategoriId, dokterId) {
  return `${MOCK_API_URL}/kategori/${kategoriId}/dokter/${dokterId}`;
}

function loadPembayaran() {
  const pembayaran = document.getElementById("total-pembayaran");

  let params = new URL(document.location).searchParams;
  const kategoriId = params.get("kategoriId");
  const dokterId = params.get("dokterId");

  console.log({ kategoriId, dokterId });

  fetch(buildRequestUrl(kategoriId, dokterId))
    .then((respon) => respon.json())
    .then((data) => {
      console.log(data);

      let isiPembayaran = "";
      const biayaKonsultasi = data.biaya;
      const biayaLayanan = 1000;
      const totalBiaya = biayaKonsultasi + biayaLayanan;

      isiPembayaran += `
    <p class="text-lg font-semibold">Rp. ${totalBiaya}</p>
  `;
      pembayaran.innerHTML = isiPembayaran;
    })
    .catch(() => {
      pembayaran.innerHTML = "<h1>Data Dokter Tidak Ada</h1>";
    });
}

loadPembayaran();
// Bagian Akhir Pembayaran
