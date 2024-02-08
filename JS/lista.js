document.addEventListener("DOMContentLoaded", function () {
  const pixButtons = document.querySelectorAll(".link-pix");

  pixButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const itemPreco = this.closest(".item").querySelector(".item-preco");
      const preco = itemPreco.textContent;
      Swal.fire({
        title: "Coloque o nome do item na descrição do PIX. ",
        text: `Valor: ${preco}`,
        icon: "info",
        imageUrl: "",
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonText: "OK",
        customClass: {
          title: "sweetalert-title",
          content: "sweetalert-content"
        },
        fontFamily: 'roboto',
        confirmButtonColor: '#008000'
      });
    });
  });
});
