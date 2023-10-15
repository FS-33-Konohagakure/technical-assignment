const INFORMASI_DOKTER = "https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter"

const informasiDokter = document.getElementById("informasi-dokter")

// informasiDokter.innerText = "Loading..."

fetch(`${INFORMASI_DOKTER}/${1}`)
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
    informasiDokter.innerHTML = isiInformasiDokter
})