const botaoContato = document.getElementById("botao-contato");
const botaoEntrega = document.getElementById("botao-entrega");

botaoEntrega.addEventListener("click", janelaEntrega);
botaoContato.addEventListener("click", janelaContato);

function janelaEntrega() {
  const CEP = "72873-153";
  Swal.fire({
    title: 'Nome: Gabriella da Silva Gomes\n Casa: 03 Bloco G \n Residencial Green Park Village V\nBairro: Florais do Planalto\nCEP: 72873-153\nCidade: Valparaíso de Goiás\nUF: Goiás',
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


function janelaContato() {
  Swal.fire({
    title: 'Whatsapp: (61) 99540-6000\n Gabriella da Silva Gomes',
    showDenyButton: true,
    confirmButtonText: 'Abrir no Whatsapp',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('https://wa.me/5561995406000', '_blank');

    }
  });
}