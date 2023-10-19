// Bagian Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const DAFTAR_DOKTER_KANDUNGAN =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter";

// Daftar Dokter Kandungan 1
const daftarDokterKandungan = document.getElementById(
  "daftar-dokter-kandungan"
);

fetch(`${DAFTAR_DOKTER_KANDUNGAN}/${1}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-kandungan1.jpg" alt="Dokter Kandungan" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterKandungan.innerHTML += cardDokter;
  });

// Daftar Dokter Kandungan 2
const daftarDokterKandungan2 = document.getElementById(
  "daftar-dokter-kandungan2"
);

fetch(`${DAFTAR_DOKTER_KANDUNGAN}/${2}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-kandungan2.jpg" alt="Dokter Kandungan" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter2.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterKandungan2.innerHTML += cardDokter;
  });

// Daftar Dokter Kandungan 3
const daftarDokterKandungan3 = document.getElementById(
  "daftar-dokter-kandungan3"
);

fetch(`${DAFTAR_DOKTER_KANDUNGAN}/${3}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-kandungan3.jpg" alt="Dokter Kandungan" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter3.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterKandungan3.innerHTML += cardDokter;
  });

const DAFTAR_DOKTER_ANAK =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/2/dokter";

// Daftar Dokter Anak 1
const daftarDokterAnak = document.getElementById("daftar-dokter-anak");

fetch(`${DAFTAR_DOKTER_ANAK}/${4}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-anak1.jpg" alt="Dokter Anak" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter4.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterAnak.innerHTML += cardDokter;
  });

// Daftar Dokter Anak 2
const daftarDokterAnak2 = document.getElementById("daftar-dokter-anak2");

fetch(`${DAFTAR_DOKTER_ANAK}/${5}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-anak2.jpg" alt="Dokter Anak" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter5.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterAnak2.innerHTML += cardDokter;
  });

// Daftar Dokter Anak 3
const daftarDokterAnak3 = document.getElementById("daftar-dokter-anak3");

fetch(`${DAFTAR_DOKTER_ANAK}/${6}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-anak3.jpg" alt="Dokter Anak" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter6.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterAnak3.innerHTML += cardDokter;
  });

const DAFTAR_DOKTER_GIGI =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/3/dokter";

// Daftar Dokter Gigi 1
const daftarDokterGigi = document.getElementById("daftar-dokter-gigi");

fetch(`${DAFTAR_DOKTER_GIGI}/${7}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-gigi1.jpg" alt="Dokter Gigi" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter7.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterGigi.innerHTML += cardDokter;
  });

// Daftar Dokter Gigi 2
const daftarDokterGigi2 = document.getElementById("daftar-dokter-gigi2");

fetch(`${DAFTAR_DOKTER_GIGI}/${8}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-gigi2.jpg" alt="Dokter Gigi" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter8.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterGigi2.innerHTML += cardDokter;
  });

// Daftar Dokter Gigi 3
const daftarDokterGigi3 = document.getElementById("daftar-dokter-gigi3");

fetch(`${DAFTAR_DOKTER_GIGI}/${9}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    cardDokter = `
        <div class="h-auto m-5">
            <img src="/assets/dokter-gigi3.jpg" alt="Dokter Gigi" class="image rounded-xl" />
            <div class="mt-1.5">
                <p class="text-2xl font-semibold">${data.name}</p>
                <p class="font-light text-base">${data.spesialisasi}</p>
            </div>
            <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                <p>Rp. ${data.biaya}</p>
            </div>
            <div class="my-2.5">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">ALUMNUS</h1>
                        <p class="text-base">${data.alumnus}</p>
                    </div>
                </div>
                <div class="flex items-center gap-5 my-2.5">
                    <i class="fa-solid fa-briefcase fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">BERKERJA DI</h1>
                        <p class="text-base">${data.hospital}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <i class="fa-solid fa-user-doctor fa-2xl"></i>
                    <div>
                        <h1 class="font-bold">STR</h1>
                        <p class="text-base">${data.str}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="/informasi-dokter/informasi-dokter9.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600 hover:scale-105 duration-300">Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                </a>
            </div>
        </div>
    `;
    daftarDokterGigi3.innerHTML += cardDokter;
  });
