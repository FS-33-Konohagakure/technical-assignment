// Bagian Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const RINCIAN_BIAYA_DOKTER_KANDUNGAN =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter";

// Rincian Biaya Dokter Kandungan 1
const rincianBiayaDokterKandungan = document.getElementById(
  "rincian-biaya-dokter-kandungan"
);

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${1}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-kandungan1.jpg" alt="Dokter Kandungan" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterKandungan.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Kandungan 2
const rincianBiayaDokterKandungan2 = document.getElementById(
  "rincian-biaya-dokter-kandungan2"
);

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${2}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-kandungan2.jpg" alt="Dokter Kandungan" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran2.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterKandungan2.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Kandungan 3
const rincianBiayaDokterKandungan3 = document.getElementById(
  "rincian-biaya-dokter-kandungan3"
);

fetch(`${RINCIAN_BIAYA_DOKTER_KANDUNGAN}/${3}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-kandungan3.jpg" alt="Dokter Kandungan" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran3.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterKandungan3.innerHTML += cardDokter;
  });

const RINCIAN_BIAYA_DOKTER_ANAK =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/2/dokter";

// Rincian Biaya Dokter Anak 1
const rincianBiayaDokterAnak = document.getElementById(
  "rincian-biaya-dokter-anak"
);

fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${4}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-anak1.jpg" alt="Dokter Anak" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran4.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterAnak.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Anak 2
const rincianBiayaDokterAnak2 = document.getElementById(
  "rincian-biaya-dokter-anak2"
);

fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${5}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-anak2.jpg" alt="Dokter Anak" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran5.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterAnak2.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Anak 3
const rincianBiayaDokterAnak3 = document.getElementById(
  "rincian-biaya-dokter-anak3"
);

fetch(`${RINCIAN_BIAYA_DOKTER_ANAK}/${6}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-anak3.jpg" alt="Dokter Anak" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran6.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterAnak3.innerHTML += cardDokter;
  });

const RINCIAN_BIAYA_DOKTER_GIGI =
  "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/3/dokter";

// Rincian Biaya Dokter Gigi 1
const rincianBiayaDokterGigi = document.getElementById(
  "rincian-biaya-dokter-gigi"
);

fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${7}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-gigi1.jpg" alt="Dokter Gigi" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran7.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterGigi.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Gigi 2
const rincianBiayaDokterGigi2 = document.getElementById(
  "rincian-biaya-dokter-gigi2"
);

fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${8}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-gigi2.jpg" alt="Dokter Gigi" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran8.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterGigi2.innerHTML += cardDokter;
  });

// Rincian Biaya Dokter Gigi 3
const rincianBiayaDokterGigi3 = document.getElementById(
  "rincian-biaya-dokter-gigi3"
);

fetch(`${RINCIAN_BIAYA_DOKTER_GIGI}/${9}`)
  .then((respon) => respon.json())
  .then((data) => {
    let cardDokter = "";

    let biayaKonsultasi = data.biaya;
    let biayaLayanan = 1000;

    cardDokter = `
        <div class="h-auto px-5 pt-10 max-[530px]:pb-10">
            <div class="flex gap-5 items-center max-[530px]:flex-col">
                <div>
                    <img src="/assets/biaya-dokter-gigi3.jpg" alt="Dokter Gigi" class="image rounded-3xl" />
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
                    <p class="font-semibold">Rp. ${
                      biayaKonsultasi + biayaLayanan
                    }</p>
                </div>
            </div>
            <div class="text-right mt-7">
                <a href="/pembayaran/pembayaran9.html">
                    <button class="bg-teal-400 rounded-xl py-1 px-4 text-base font-semibold text-white hover:bg-teal-600 hover:scale-105 duration-300">KONFIRMASI</button>
                </a>
            </div>
        </div>
    `;
    rincianBiayaDokterGigi3.innerHTML += cardDokter;
  });
