/* Untuk mengakses elemen terakir pada array, 
kita tinggal memangil key elemen terakhir (berasal dari jumlah elemen array) dikurangi 1 
(karena elemen pertama dimulai dari 0) */
var mobil = ["Avanza", "Agya", "Ayla"];
var mobilPertama = mobil[0];//Output : "Avanza"
var mobilTerakhir = mobil[mobil.length - 1]; // output : "Ayla"