(function () {
    function validarFormulario() {
      const messageError = document.getElementById('invalid-form');
      const validForm = document.getElementById('valid-form');
      const rutElement = document.getElementById("rut");
      const passwordElement = document.getElementById("password");
      const rut = rutElement.value;
      const password = passwordElement.value;
  
      validForm.classList.add("d-none");
      messageError.classList.add("d-none");
  
      if (!validateRut(rut)) {
        messageError.innerHTML = "Rut invalido";
        messageError.classList.remove("d-none");
        return false;
      }
  
      if (password.length < 8) {
        messageError.innerHTML = "ContraseÃ±a invalida";
        messageError.classList.remove("d-none");
        return false;
      }
  
      validForm.classList.remove("d-none");
      return true
    }
  
    document.getElementById("formulario").addEventListener("submit", function (e) {
      if (!validarFormulario()) {
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    });
  })();
  
  function validateRut(rut) {
    const regex = /^([0-9]+-[0-9kK])$/;
    return regex.test(rut);
  }