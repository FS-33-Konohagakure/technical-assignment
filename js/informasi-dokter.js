// Bagian Awal Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Bagian Akhir Navbar

// Bagian Awal Informasi Dokter
const MOCK_API_URL = "https://65255e4467cfb1e59ce728d6.mockapi.io";

function buildRequestUrl(kategoriId, dokterId) {
  return `${MOCK_API_URL}/kategori/${kategoriId}/dokter/${dokterId}`;
}

function loadInformasiDokter() {
  const informasiDokter = document.getElementById("informasi-dokter");

  let params = new URL(document.location).searchParams;
  const kategoriId = params.get("kategoriId");
  const dokterId = params.get("dokterId");

  console.log({ kategoriId, dokterId });

  fetch(buildRequestUrl(kategoriId, dokterId))
    .then((respon) => respon.json())
    .then((data) => {
      console.log(data);

      let isiInformasiDokter = "";

      isiInformasiDokter += `
        <div class="card rounded-3xl p-5 bg-white shadow-xl">
            <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
                <div class="text-center">
                    <img src="${data.images.normal}" alt="Foto Dokter" class="image rounded-xl" />
                    <p class="mt-3 font-extralight">Jadwal</p>
                    <p class="font-extralight">${data.jadwal.hari}, ${data.jadwal.jam} WIB</p>
                </div>
                <div class="flex gap-16 max-[700px]:gap-20 max-[700px]:text-center max-[450px]:flex-col max-[450px]:gap-4">
                    <div>
                        <div class="mb-3">
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">NAMA</h1>
                            <p class="mt-2">${data.name}</p>
                        </div>
                        <div class="mb-3">
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">SPESIALIS</h1>
                            <p class="mt-2">${data.spesialisasi}</p>
                        </div>
                        <div class="mb-3">
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">PENGALAMAN MEDIS</h1>
                            <p class="mt-2">${data.pengalaman} Tahun</p>
                        </div>
                        <div>
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">NOMOR STR</h1>
                            <p class="mt-2">${data.str}</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">BIAYA KONSULTASI</h1>
                            <p class="mt-2">Rp. ${data.biaya}/jam</p>
                        </div>
                        <div class="mb-3">
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">BEKERJA</h1>
                            <p class="mt-2">${data.hospital}</p>
                        </div>
                        <div>
                            <h1 class="font-bold text-lg border-b-2 border-b-teal-400">ALUMNUS</h1>
                            <p class="mt-2">${data.alumnus}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-justify">${data.info}</p>
            </div>
            <div class="mt-5 text-end">
                <a href="rincian-biaya.html?kategoriId=${kategoriId}&dokterId=${data.id}">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 duration-300">Pilih Dokter</button>
                </a>
            </div>
        </div>
        `;
      informasiDokter.innerHTML = isiInformasiDokter;
    })
    .catch(() => {
      informasiDokter.innerHTML = "<h1>Data Dokter Tidak Ada</h1>";
    });
}

loadInformasiDokter();
// Bagian Akhir Informasi Dokter
