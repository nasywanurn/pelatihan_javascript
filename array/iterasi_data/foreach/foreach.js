var mobil = ["Avanza", "Agya", "Ayla"];
var teks, i;
teks ="<ul>";
mobil.forEach(fungsiMobil)
teks += "</ul>";
function fungsiMobil(value)
{
    teks += "<li>"+value+"</li>";
}