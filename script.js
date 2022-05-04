function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora > 0 && hora <= 12)
    {
        img.src = `manhã.jpg`
        document.body.style.background = '#ebe158'
    }
    else if (hora >= 12 && hora <= 18)
    {
        img.src = `tarde.jpg`
        document.body.style.background = '#e97223'
    }
    else
    {
        img.src = `noite.jpg`
        document.body.style.background = '#283166'
    }
}
