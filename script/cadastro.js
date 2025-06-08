const emailInput = document.getElementById('email');

const nome = document.getElementById('nome');

let senhaInput = document.getElementById('senha')

let senhaConfirm = document.getElementById('senhaConfirm')

const botaoLogin = document.getElementById('cadastrar')

  let temMaiuscula = false;
  let temMinuscula = false;
  let temNumero = false;
  let temEspecial = false;

botaoLogin.addEventListener('click', async (event) => {
  let senha = senhaInput.value;
  let confirmar = senhaConfirm.value;
 if(!temMaiuscula || !temMinuscula || !temNumero || !temEspecial) {
        Swal.fire({
      icon: 'warning',
      title: 'Erro',
      text: 'Sua senha não contém os requisitos necessários!'
    });
    return; // interrompe o envio
 }

  if (senha !== confirmar) {
    Swal.fire({
      icon: 'warning',
      title: 'Erro',
      text: 'As senhas não coincidem!'
    });
    return; // interrompe o envio
  }
    if (emailInput.value === '' || senhaInput.value === '' || senhaConfirm.value === '' || nome.value === '') {
        Swal.fire({
            title: 'Erro ao Cadastrar',
            text:'Por favor, preencha todos os campos',
            icon:'error',
            confirmButtonText:'ok',
        });
    }else{
        Swal.fire({
            title:'Sucesso',
            text:'Cadastro realizado com sucesso',
            icon:'success',
        })
        .then(() => {
            window.location.href = 'index.html';
        });
    }
})



senhaInput.addEventListener('input', () => {
  const senha = senhaInput.value;

  // Testes com regex
  temMaiuscula = /[A-Z]/.test(senha);
  temMinuscula = /[a-z]/.test(senha);
  temNumero = /[0-9]/.test(senha);
  temEspecial = /[\W_]/.test(senha);

  atualizarIcone("maiuscula", temMaiuscula);
  atualizarIcone("minuscula", temMinuscula);
  atualizarIcone("numero", temNumero);
  atualizarIcone("especial", temEspecial);
});

function atualizarIcone(id, valido) {
  const item = document.getElementById(id).querySelector("i");
  if (valido) {
    item.classList.remove("bi-x-octagon");
    item.classList.add("bi-check-circle");
    item.style.color = "limegreen";
    item.style.opacity = "1";
  } else {
    item.classList.remove("bi-check-circle");
    item.classList.add("bi-x-octagon");
    item.style.color = "gray";
    item.style.opacity = "0.5";
  }
}