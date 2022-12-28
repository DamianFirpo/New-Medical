document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pagarTarjeta').addEventListener('click', function () {
      // Mostrar Toastify
      Toastify({
        text: "Pago realizado con éxito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {} // Callback after click
      }).showToast();
    });
  });

  <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>