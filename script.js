function calcular(){
    var alt = window.document.getElementById('alt')
    var bas = window.document.getElementById('bas')
    var res = window.document.getElementById('res')

    var a = Number(alt.value)
    var b = Number(bas.value)

    if(alt.value.length == 0 || bas.value.length == 0){
        window.alert('Adicione os dados para continuar')
    }else{
    var area = a*b/2

    res.innerHTML = ''
    res.innerHTML += `<p style="font: bold 14pt Arial; color:#51291E;">Àrea do triângulo = ${area}</style></p>`
    }
    alt.value = ''
    alt.focus()
    bas.value =''
    bas.focus()
} 

function calcular1(){
    var raio = window.document.getElementById('raio')
    var r = Number(raio.value)
    var per = 2*3.14*r
    var p = per.toFixed(2)

    if(raio.value.length ==0){
        window.alert('Adicione os dados para continuar')
    }else{

    var area = 3.14*r*r
    var a = area.toFixed(2)

    
    var res1 = window.document.getElementById('res1')

   res1.innerHTML = ''
    res1.innerHTML = `<p style= " font: bold 14pt Arial; color: #51291E;">Àrea do Círculo = ${a}<br/>
    Perímetro do Círculo = ${p}</style></p>`
    }
    
    raio.value = ''
    raio.focus()

}