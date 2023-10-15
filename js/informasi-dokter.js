const INFORMASI_DOKTER = "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter"

const informasiDokter = document.getElementById("informasi-dokter")

informasiDokter.innerText = "Loading..."

fetch(`${INFORMASI_DOKTER}/${1}`)
.then((respon) => respon.json())
.then((data) => {
    console.log(data);

    let isiInformasiDokter = "";

    isiInformasiDokter += `
    <div class="card rounded-3xl p-5 bg-white shadow-xl">
        <div class="flex gap-10 mb-5 ">
            <div class="text-center">
                <img src="${data.images}" class="image rounded-xl" />
                <p class="mt-5 font-light">Jadwal</p>
                <p></p>
            </div>
            <div class="flex gap-16 ">
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
        <div class="">
            <p>${data.info}</p>
        </div>
        <div class="mt-5 text-end">
            <a href="">
                <button class="bg-teal-400 rounded-xl py-1 px-4 text-white hover:bg-teal-600">Pilih Dokter</button>
            </a>
        </div>
    </div>
    `
    informasiDokter.innerHTML = isiInformasiDokter
})