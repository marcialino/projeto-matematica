function calcular(){
    var alt = window.document.getElementById('alt')
    var bas = window.document.getElementById('bas')
    var res = window.document.getElementById('res')

    var a = Number(alt.value)
    var b = Number(bas.value)

    var area = a*b/2

    res.innerHTML += `<p style="font:bold 12pt Arial;"> A área do triângulo com altura ${a} e base ${b} é de ${area}</p>`

}

function calcular1(){
    var raio = window.document.getElementById('raio')
    
}