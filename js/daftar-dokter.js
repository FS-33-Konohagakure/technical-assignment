// Daftar Dokter Kandungan
const daftarDokter = document.getElementById("daftar-dokter");

async function getDataDokter() {
    try {
        let respons = await fetch('https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/1/dokter')
        let dokters = await respons.json()

        console.log(dokters);

        dokters.forEach((element) => {
            let cardDokter = `
                <div class="h-auto m-5">
                    <img src="${element.images}" alt="Dokter Kandungan" class="image rounded-xl" />
                    <div class="mt-1.5">
                        <p class="text-xl font-semibold">${element.name}</p>
                        <p class="font-light">${element.spesialisasi}</p>
                    </div>
                    <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                        <p>Rp. ${element.biaya}</p>
                    </div>
                    <div class="my-2.5">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Alumnus</h1>
                                <p class="text-sm">${element.alumnus}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-5 my-2.5">
                            <i class="fa-solid fa-briefcase fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Bekerja Di</h1>
                                <p class="text-sm">${element.hospital}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <i class="fa-solid fa-user-doctor fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">STR</h1>
                                <p class="text-sm">${element.str}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <a href="" class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600">
                            <button>Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                        </a>
                    </div>
                </div>
            `;
            daftarDokter.innerHTML += cardDokter;
        });
    } catch (error) {
        console.log(error);
    }
}

getDataDokter()

// Daftar Dokter Anak
const daftarDokter2 = document.getElementById("daftar-dokter2");

async function getDataDokter2() {
    try {
        let respons = await fetch('https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/2/dokter')
        let dokters = await respons.json()

        console.log(dokters);

        dokters.forEach((element) => {
            let cardDokter = `
                <div class="h-auto m-5">
                    <img src="${element.images}" alt="Dokter Anak" class="image rounded-xl" />
                    <div class="mt-1.5">
                        <p class="text-xl font-semibold">${element.name}</p>
                        <p class="font-light">${element.spesialisasi}</p>
                    </div>
                    <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                        <p>Rp. ${element.biaya}</p>
                    </div>
                    <div class="my-2.5">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Alumnus</h1>
                                <p class="text-sm">${element.alumnus}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-5 my-2.5">
                            <i class="fa-solid fa-briefcase fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Bekerja Di</h1>
                                <p class="text-sm">${element.hospital}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <i class="fa-solid fa-user-doctor fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">STR</h1>
                                <p class="text-sm">${element.str}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <a href="" class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600">
                            <button>Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                        </a>
                    </div>
                </div>
            `;
            daftarDokter2.innerHTML += cardDokter;
        });
    } catch (error) {
        console.log(error);
    }
}

getDataDokter2()

// Daftar Dokter Gigi
const daftarDokter3 = document.getElementById("daftar-dokter3");

async function getDataDokter3() {
    try {
        let respons = await fetch('https://65255e4467cfb1e59ce728d6.mockapi.io/kategori/3/dokter')
        let dokters = await respons.json()

        console.log(dokters);

        dokters.forEach((element) => {
            let cardDokter = `
                <div class="h-auto m-5">
                    <img src="${element.images}" alt="Dokter Gigi" class="image rounded-xl" />
                    <div class="mt-1.5">
                        <p class="text-xl font-semibold">${element.name}</p>
                        <p class="font-light">${element.spesialisasi}</p>
                    </div>
                    <div class="bg-teal-50 rounded mt-1.5 py-1 items-center text-center text-sm font-medium">
                        <p>Rp. ${element.biaya}</p>
                    </div>
                    <div class="my-2.5">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Alumnus</h1>
                                <p class="text-sm">${element.alumnus}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-5 my-2.5">
                            <i class="fa-solid fa-briefcase fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">Bekerja Di</h1>
                                <p class="text-sm">${element.hospital}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <i class="fa-solid fa-user-doctor fa-2xl"></i>
                            <div>
                                <h1 class="font-bold">STR</h1>
                                <p class="text-sm">${element.str}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <a href="" class="bg-teal-400 rounded-xl py-1 px-4 text-sm text-white hover:bg-teal-600">
                            <button>Lihat Selengkapnya <i class="fa-solid fa-angle-right"></i></button>
                        </a>
                    </div>
                </div>
            `;
            daftarDokter3.innerHTML += cardDokter;
        });
    } catch (error) {
        console.log(error);
    }
}

getDataDokter3()