document.addEventListener("DOMContentLoaded", function() {
            var hitungButtonkeliling = document.getElementById("hitungButtonkeliling");
            hitungButtonkeliling.addEventListener("click", hitungkeliling);
});
        
function hitungkeliling() {
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
    const s3 = parseFloat(document.getElementById("s3").value);
        
    const keliling = s1 + s2 + s3;
        
    var hasilkelilingElement = document.getElementById("hasilkeliling");XMLDocument
    var hasilDenganSatuan = `${keliling} cm2`;
    hasilkelilingElement.textContent = `Keliling Segitiga Adalah : ${hasilDenganSatuan}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const resetButton = document.getElementById('resetButton');
    
    resetButton.addEventListener('click', function() {
      form.reset();
    });
  });
