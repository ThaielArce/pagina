function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  function enviar() {
    let nombre = document.querySelector(".txtNom").value;
    let mail = document.querySelector(".txtMail").value;
    let texto = document.querySelector(".casillaTexto").value;

    if (nombre == "" || mail == "" || texto == "") {
      alert("Ingrese datos en los campos");
    }
  }

  sumatoria = 0
  function calcular() {
    celu = parseInt(compra.celular.value);
    if (document.getElementById("gb-1000").checked == true) {
      almacenamiento = document.getElementById("gb-1000").value = 1000;
      sumatoria += almacenamiento;
    }

    if (document.getElementById("gb-2000").checked == true) {
      almacenamiento = document.getElementById("gb-2000").value = 2000;
      sumatoria += almacenamiento;
    }

    if (document.getElementById("gb-4000").checked == true) {
      almacenamiento = document.getElementById("gb-4000").value = 4000;
      sumatoria += almacenamiento;
    }

    if (document.getElementById("gb-8000").checked == true) {
      almacenamiento = document.getElementById("gb-8000").value = 8000;
      sumatoria += almacenamiento;
    }

    if (document.getElementById("gb-16000").checked == true) {
      almacenamiento = document.getElementById("gb-16000").value = 16000;
      sumatoria += almacenamiento;
    }

    monto = 0
    monto = sumatoria + celu
    
    alert("El monto a pagar es de " + monto)
  }
