//Selecionando botão e resposta do formulario
var botao = document.querySelector('#botao-verificar')
var res = document.querySelector('#res')

//Função para encontrar o signo
function descobrirSigno() {

    //Encontrar valores inseridos no formulário
    var formDia = document.querySelector('#dia')
    var formMes = document.querySelector('#mes')
    
    //Transformando o valor recebido como String para Number
    let dia = Number(formDia.value)
    let mes = Number(formMes.value)

    //Criando a imagem dinâmica após a resposta
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    //Caso o usuário digite alguma informação incorreta ou não preencha os campos solicitados
    if (dia.length === 0 || dia === 0 || dia > 31 || mes.length === 0 || mes === 0 || mes > 12 || mes === 2 && dia > 29) {
        alert("Você digitou alguma informação incorreta ou não preencheu os campos solicitados")
        res.innerHTML = ''
        img.setAttribute = 'none'
    }else if (mes === 3 && dia >= 20 || mes === 4 && dia <= 20) {
        img.setAttribute('src', 'img/aries.png')
        res.innerHTML = `Seu signo é <p>Áries</p>`
    } else if (mes === 4 && dia >= 21 || mes === 5 && dia <= 20) {
        res.innerHTML = `Seu signo é <p>Touro</p>`
        img.setAttribute('src', 'img/touro.png')
    } else if (mes === 5 && dia >= 21 || mes === 6 && dia <= 20) {
        res.innerHTML = `Seu signo é <p>Gêmeos</p>`
        img.setAttribute('src', 'img/gemeos.png')
    } else if (mes === 6 && dia >= 21 || mes === 7 && dia <= 21) {
        res.innerHTML = `Seu signo é <p>Câncer</p>`
        img.setAttribute('src', 'img/cancer.png')
    } else if (mes === 7 && dia >= 22 || mes === 8 && dia <= 22) {
        res.innerHTML = `Seu signo é <p>Leão</p>`
        img.setAttribute('src', 'img/leao.png')
    } else if (mes === 8 && dia >= 23 || mes === 9 && dia <= 22) {
        res.innerHTML = `Seu signo é <p>Virgem</p>`
        img.setAttribute('src', 'img/virgem.png')
    } else if (mes === 9 && dia >= 23 || mes === 10 && dia <= 22) {
        res.innerHTML = `Seu signo é <p>Libra</p>`
        img.setAttribute('src', 'img/libra.png')
    } else if (mes === 10 && dia >= 23 || mes === 11 && dia <= 21) {
        res.innerHTML = `Seu signo é <p>Escorpião</p>`
        img.setAttribute('src', 'img/escorpiao.png')
    } else if (mes === 11 && dia >= 22 || mes === 12 && dia <= 21) {
        res.innerHTML = `Seu signo é <p>Sagitário</p>`
        img.setAttribute('src', 'img/sagitario.png')
    } else if (mes === 12 && dia >= 22 || mes === 1 && dia <= 20) {
        res.innerHTML = `Seu signo é <p>Capricórnio</p>`
        img.setAttribute('src', 'img/capricornio.png')
    } else if (mes === 1 && dia >= 21 || mes === 2 && dia <= 19) {
        res.innerHTML = `Seu signo é <p>Áquario</p>`
        img.setAttribute('src', 'img/aquario.png')
    } else if(mes === 2 && dia >= 19 && dia <= 29|| mes === 3 && dia <= 19) {
        res.innerHTML = `Seu signo é <p>Peixes</p>`
        img.setAttribute('src', 'img/peixes.png')
    }else{
        alert("Você digitou alguma informação incorreta ou não preencheu os campos solicitados")
        res.innerHTML = ''
        img.setAttribute = 'none'
    }

    //Atribuindo a imagem com a resposta do formulário
    res.appendChild(img)

}
//Adicionando evento ao clicar no botão 
botao.addEventListener('click', descobrirSigno)
