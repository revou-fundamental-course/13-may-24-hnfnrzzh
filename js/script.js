let isKelilingVisible = false; //keliling is hide
document.getElementById("calculate-btn").addEventListener("click", calculateLuas);
document.getElementById("calculate-btn-keliling").addEventListener("click", calculateKeliling);
function hideOrShow() {
  if (isKelilingVisible == false) {
    isKelilingVisible = true;
    document.getElementById("luas-section").style.display = "none";
    document.getElementById("keliling-section").style.display = "block";
  } else {
    isKelilingVisible = false;
    document.getElementById("luas-section").style.display = "block";
    document.getElementById("keliling-section").style.display = "none";
  }
  // Remove event listener from reset button in luas section
  if (luasEventListener) {
    document.getElementById("reset-btn").removeEventListener("click", luasEventListener);
    luasEventListener = null;
  }

  // Remove event listener from reset button in keliling section
  if (kelilingEventListener) {
    document.getElementById("reset-btn-keliling").removeEventListener("click", kelilingEventListener);
    kelilingEventListener = null;
  }

  // Add event listener to reset button in luas section
  const resetBtnLuas = document.getElementById("reset-btn");
  luasEventListener = function () {
    resetLuas();
    resetKeliling();
    resetEventListener();
  };
  resetBtnLuas.addEventListener("click", luasEventListener);

  // Add event listener to reset button in keliling section
  const resetBtnKeliling = document.getElementById("reset-btn-keliling");
  kelilingEventListener = function () {
    resetLuas();
    resetKeliling();
    resetEventListener();
  };
  resetBtnKeliling.addEventListener("click", kelilingEventListener);
}

function resetEventListener() {
  document.getElementById("calculate-btn-luas").addEventListener("click", calculateLuas);
  document.getElementById("calculate-btn-keliling").addEventListener("click", calculateKeliling);
}

function validation() {
  let alasValue = document.getElementById("alas-input").value;
  let tinggiValue = document.getElementById("tinggi-input").value;

  if (alasValue != "" && tinggiValue != "") {
    calculateLuas();
  } else {
    alert("inputan kosong");
  }
  calculateLuas();
  return true;
}

function calculateLuas() {
  let alas = parseFloat(document.getElementById("alas-input").value);
  let tinggi = parseFloat(document.getElementById("tinggi-input").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Harap masukkan angka yang valid untuk alas dan tinggi.");
    return;
  }

  let luas = 0.5 * alas * tinggi;
  document.getElementById("result-luas").innerHTML = `Luas: ${luas.toFixed(2)}`;
}
function resetLuas() {
  document.getElementById("alas-input").value = "";
  document.getElementById("tinggi-input").value = "";
  document.getElementById("result-luas").innerHTML = "";
}

function calculateKeliling() {
  let alas = parseFloat(document.getElementById("alas-input-keliling").value);
  let tinggi = parseFloat(document.getElementById("tinggi-input-keliling").value);
  let sideA = parseFloat(document.getElementById("side-a-input-keliling").value);
  let sideB = parseFloat(document.getElementById("side-b-input-keliling").value);

  if (isNaN(alas) || isNaN(tinggi) || isNaN(sideA) || isNaN(sideB)) {
    alert("Harap masukkan angka yang valid untuk alas, tinggi, sisi A, dan sisi B.");
    return;
  }

  let hypotenuse = Math.sqrt(alas ** 2 + tinggi ** 2);
  let keliling = sideA + sideB + hypotenuse;
  document.getElementById("result-keliling").innerHTML = `Keliling: ${keliling.toFixed(2)}`;
}
function resetKeliling() {
  document.getElementById("alas-input-keliling").value = "";
  document.getElementById("tinggi-input-keliling").value = "";
  document.getElementById("side-a-input-keliling").value = "";
  document.getElementById("side-b-input-keliling").value = "";
  document.getElementById("result-keliling").innerHTML = "";
}

document.getElementById("reset-btn").addEventListener("click", resetLuas);
document.getElementById("reset-btn-keliling").addEventListener("click", resetKeliling);
