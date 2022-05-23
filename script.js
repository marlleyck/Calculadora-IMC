function calcular() {
    let nome = document.getElementById('nome')

    let tpeso = document.getElementById('peso')
    let peso = Number(tpeso.value)

    let taltura = document.getElementById('altura')
    let altura = Number(taltura.value / 100)

    let result = document.getElementById('if')

    let res = document.getElementById('res')
    let p = document.createElement('p')
    res.appendChild(p)

    let imc = peso / (altura ** 2)

    res = ''

    if (peso == '' || altura == '' || nome == '') {
        alert('Verifique os dados e tente novamente!')
    } else if (imc >= 0 && imc < 18.5) {
        p.innerHTML = imc.toFixed(1)
        result.innerHTML = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        p.innerHTML = imc.toFixed(1)
        result.innerHTML = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        p.innerHTML = imc.toFixed(1)
        result.innerHTML = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 39.9) {
        p.innerHTML = imc.toFixed(1)
        result.innerHTML = 'Obesidade'
    } else if (imc > 40) {
        p.innerHTML = imc.toFixed(1)
        result.innerHTML = 'Obesidade mórbida'
    } else {
        alert('Erro, tente novamente!')
    }
}