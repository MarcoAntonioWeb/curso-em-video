function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes() 
    var segundos = data.getSeconds()
    
    if (hora < 10){
        hora ="0" + hora
    }
    if (minutos < 10){
        minutos ="0" + minutos
    }
    if (segundos < 10){
        segundos ="0" + segundos
    }
            
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = `manha.png`
        document.body.style.background = `#e0d1c2`
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde!
        img.src = `tarde.png`
        document.body.style.background = `#8c9eb6`
    } else {
        // Boa noite!
        img.src = `noite.png`
        document.body.style.background = `#152938`
    }

    
    window.document.getElementById("msg").Value = hora
}

var tempo = setInterval(carregar,1000)