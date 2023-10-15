const INFORMASI_DOKTER_KANDUNGAN = "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter"

// Daftar Dokter Kandungan 1
const informasiDokterKandungan = document.getElementById("informasi-dokter-kandungan")

fetch(`${INFORMASI_DOKTER_KANDUNGAN}/${1}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
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
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 active:scale-0 focus:scale-100 duration-300">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokterKandungan.innerHTML = isiInformasiDokter
})

// Daftar Dokter Kandungan 2
const informasiDokterKandungan2 = document.getElementById("informasi-dokter-kandungan2")

fetch(`${INFORMASI_DOKTER_KANDUNGAN}/${2}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
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
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 active:scale-0 focus:scale-100 duration-300">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokterKandungan2.innerHTML = isiInformasiDokter
})

// Daftar Dokter Kandungan 3
const informasiDokterKandungan3 = document.getElementById("informasi-dokter-kandungan3")

fetch(`${INFORMASI_DOKTER_KANDUNGAN}/${3}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
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
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 active:scale-0 focus:scale-100 duration-300">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokterKandungan3.innerHTML = isiInformasiDokter
})

const INFORMASI_DOKTER_ANAK = "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/2/dokter"

// Daftar Dokter Anak 1
const informasiDokterAnak = document.getElementById("informasi-dokter-anak")

fetch(`${INFORMASI_DOKTER_ANAK}/${4}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
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
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 active:scale-0 focus:scale-100 duration-300">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokterAnak.innerHTML = isiInformasiDokter
})

// Daftar Dokter Anak 2
const informasiDokterAnak2 = document.getElementById("informasi-dokter-anak2")

fetch(`${INFORMASI_DOKTER_ANAK}/${5}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 max-[700px]:flex-col max-[700px]:items-center">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
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
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600 hover:scale-110 active:scale-0 focus:scale-100 duration-300">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokterAnak2.innerHTML = isiInformasiDokter
})