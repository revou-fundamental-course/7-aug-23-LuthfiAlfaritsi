document.addEventListener("DOMContentLoaded", function() {
    var hitungButtonluas = document.getElementById("hitungButtonluas");
    hitungButtonluas.addEventListener("click", hitungLuas);
});

function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    var luas = 0.5 * alas * tinggi;

    var hasilLuasElement = document.getElementById("hasilLuas");XMLDocument
    var hasilDenganSatuan = `${luas} cm2`;
    hasilLuasElement.textContent = `Luas Segitiga Adalah :${hasilDenganSatuan}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const resetButton = document.getElementById('resetButton');
    
    resetButton.addEventListener('click', function() {
      form.reset();
    });
  });