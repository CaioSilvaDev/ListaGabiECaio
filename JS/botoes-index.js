const botaoPix = document.getElementById("botao-pix")

botaoPix.addEventListener("click", janelaPix)

function janelaPix() {
  const PIX = "5ca15a56-1c88-448e-9eca-404bfb141f8b";
  Swal.fire({
    imageUrl: "https://raw.githubusercontent.com/CaioSilvaDev/ListaGabiECaio/main/Imagens/pix.jpeg",
    title: 'Pix: Caio Miguel de Souza Silva',
    showDenyButton: true,
    confirmButtonText: 'Copiar PIX para área de transferência',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(PIX)
        .then(() => {
          Swal.fire({
            text: 'Copiado!',
            icon: 'success',
            confirmButtonColor: '#008000'
          });
        })
        .catch((error) => {
          Swal.fire('Ocorreu um erro ao copiar!', '', 'error');
        });
    }
  });
}
const botaoAlfinete = document.getElementById("botao-alfinete");

botaoAlfinete.addEventListener("click", janelaEntrega);

function janelaEntrega() {
  const CEP = "72873-153";
  Swal.fire({
    title: 'Residencial Green Park Village V\nBairro: Florais do Planalto\nCEP: 72873-153\nCidade: Valparaíso de Goiás\nUF: GO',
    showDenyButton: true,
    confirmButtonText: 'Copiar CEP para área de transferência',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(CEP)
        .then(() => {
          Swal.fire({
            text: 'Copiado!',
            icon: 'success',
            confirmButtonColor: '#008000'
          });
        })
        .catch((error) => {
          Swal.fire('Ocorreu um erro ao copiar!', '', 'error');
        });
    }
  });
}