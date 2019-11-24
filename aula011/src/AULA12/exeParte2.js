function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Ferifique ou tente o dado novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'foto-crianca-homem.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'foto-jovem-homem.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'foto-adulto-homem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idoso-homem.png')
        }  
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-mulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-mulher.png')
            }  
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}

