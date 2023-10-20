// Bagian Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Start Daftar Dokter
function loadDaftarDokter() {
  const MOCK_API_URL = "https://65255e4467cfb1e59ce728d6.mockapi.io";

  function buildRequestUrl(kategoriId) {
    return `${MOCK_API_URL}/kategori/${kategoriId}/dokter`;
  }
  // Daftar Dokter Kandungan 1
  const daftarDokterKandungan = document.getElementById("daftar-dokter");

  let params = new URL(document.location).searchParams;
  const kategoriId = params.get("kategoriId"); // is the string "Jonathan Smith".

  fetch(buildRequestUrl(kategoriId))
    .then((respon) => respon.json())
    .then((listDokter) => {
      let isiDaftarDokter = "";

      for (let i = 0; i < listDokter.length; i++) {
        const dokter = listDokter[i];

        isiDaftarDokter += `
              <div class="h-auto m-5">
                  <img src="/assets/dokter-kandungan1.jpg" alt="Dokter Kandungan" class="image rounded-xl" />
                  <div class="mt-1.5">
                      <p class="text-2xl font-semibold">${dokter.name}</p>
                      <p class="font-light text-base">${dokter.spesialisasi}</p>
                  </div>
                  <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                      <p>Rp. ${dokter.biaya}</p>
                  </div>
                  <div class="my-2.5">
                      <div class="flex items-center gap-3">
                          <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                          <div>
                              <h1 class="font-bold">ALUMNUS</h1>
                              <p class="text-base">${dokter.alumnus}</p>
                          </div>
                      </div>
                      <div class="flex items-center gap-5 my-2.5">
                          <i class="fa-solid fa-briefcase fa-2xl"></i>
                          <div>
                              <h1 class="font-bold">BERKERJA DI</h1>
                              <p class="text-base">${dokter.hospital}</p>
                          </div>
                      </div>
                      <div class="flex items-center gap-6">
                          <i class="fa-solid fa-user-doctor fa-2xl"></i>
                          <div>
                              <h1 class="font-bold">STR</h1>
                              <p class="text-base">${dokter.str}</p>
                          </div>
                      </div>
                  </div>
                  <div class="text-center mt-5">
                      <a href="/informasi-dokter.html?kategoriId=${kategoriId}&dokterId=${dokter.id}">
                          <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                      </a>
                  </div>
              </div>
          `;
      }

      daftarDokterKandungan.innerHTML = isiDaftarDokter;
    });
}

loadDaftarDokter();
