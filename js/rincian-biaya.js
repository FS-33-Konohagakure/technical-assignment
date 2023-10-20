// Bagian Awal Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Bagian Akhir Navbar

// Bagian Awal Rincian Biaya Dokter
const MOCK_API_URL = "https://65255e4467cfb1e59ce728d6.mockapi.io";

function buildRequestUrl(kategoriId, dokterId) {
  return `${MOCK_API_URL}/kategori/${kategoriId}/dokter/${dokterId}`;
}

function loadRincianBiayaDokter() {
  const rincianBiayaDokter = document.getElementById("rincian-biaya");

  let params = new URL(document.location).searchParams;
  const kategoriId = params.get("kategoriId");
  const dokterId = params.get("dokterId");

  console.log({ kategoriId, dokterId });

  fetch(buildRequestUrl(kategoriId, dokterId))
    .then((respon) => respon.json())
    .then((data) => {
      console.log(data);

      let isiRincianBiayaDokter = "";
      const biayaKonsultasi = data.biaya;
      const biayaLayanan = 1000;
      const totalBiaya = biayaKonsultasi + biayaLayanan;

      isiRincianBiayaDokter += `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="${data.images.crop}" alt="Foto Dokter" class="image rounded-3xl" />
                </div>
                <div class="mt-1.5">
                    <p class="text-2xl font-semibold">${data.name}</p>
                    <p class="font-light text-lg">${data.spesialisasi}</p>
                </div>
            </div>
            <div class="flex pt-5 justify-between items-center max-[340px]:items-start">
                <div class="text-left text-lg">
                    <p class="pb-5">Biaya Sesi Untuk <span class="font-semibold">1 Jam</span></p>
                    <p class="pb-5">Biaya Layanan</p>
                    <p class="font-semibold">Pembayaran</p>
                </div>
                <div class="text-right text-lg">
                    <p class="pb-5">Rp. ${biayaKonsultasi}</p>
                    <p class="pb-5">Rp. ${biayaLayanan}</p>
                    <p class="font-semibold">Rp. ${totalBiaya}</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="pembayaran.html?kategoriId=${kategoriId}&dokterId=${data.id}">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
      rincianBiayaDokter.innerHTML = isiRincianBiayaDokter;
    })
    .catch(() => {
      rincianBiayaDokter.innerHTML = "<h1>Data Dokter Tidak Ada</h1>";
    });
}

loadRincianBiayaDokter();
// Bagian Akhir Rincian Biaya Dokter
