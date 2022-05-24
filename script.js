function calcular() {
    let nome = document.getElementById('nome')

    let tpeso = document.getElementById('peso')
    let peso = Number(tpeso.value)

    let taltura = document.getElementById('altura')
    let altura = Number(taltura.value / 100)

    let result = document.getElementById('if')

    let res = document.getElementById('res')

    let imc = peso / (altura ** 2)

    let strImc = String(imc)
    let rImc
    let iImc
    let fImc
    let tImc
    let nImc
    if (strImc.indexOf('.') > -1) {
        rImc = strImc.replace('.', '')
        iImc = rImc.slice(0, 2).concat('.')
        fImc = rImc.substr(3, 1)
        tImc = `${iImc}${fImc}`
        nImc = Number(tImc)
    }


    res.innerHTML = `<p> ${nImc} </p>`

    if (peso == '' || altura == '' || nome == '') {
        alert('Verifique os dados e tente novamente!')
    } else if (nImc >= 0 && nImc < 18.5) {
        result.innerHTML = 'Abaixo do peso'
    } else if (nImc >= 18.5 && nImc <= 24.9) {
        result.innerHTML = 'Peso normal'
    } else if (nImc >= 25 && nImc <= 29.9) { 
        result.innerHTML = 'Sobrepeso'
    } else if (nImc >= 30 && nImc <= 39.9) {
        result.innerHTML = 'Obesidade'
    } else if (nImc > 40) {
        result.innerHTML = 'Obesidade mórbida'
    } else {
        alert('Erro, tente novamente!')
    }
}
