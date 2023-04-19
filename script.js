/* Escolhendo a ordem da Matriz */
function ordem2(){
    let ordem2 = document.querySelector('#ordem-2')
    let ordem3 = document.querySelector('#ordem-3')
    let ordem4 = document.querySelector('#ordem-4')

    ordem2.style.display = 'block'
    ordem3.style.display = 'none'
    ordem4.style.display = 'none'
}

function ordem3(){
    let ordem2 = document.querySelector('#ordem-2')
    let ordem3 = document.querySelector('#ordem-3')
    let ordem4 = document.querySelector('#ordem-4')

    ordem2.style.display = 'none'
    ordem3.style.display = 'block'
    ordem4.style.display = 'none'
}

function ordem4(){
    let ordem2 = document.querySelector('#ordem-2')
    let ordem3 = document.querySelector('#ordem-3')
    let ordem4 = document.querySelector('#ordem-4')

    ordem2.style.display = 'none'
    ordem3.style.display = 'none'
    ordem4.style.display = 'block'
} 


/* Calculora da ordem 2 */
function calcular2(){
    var n1 = document.querySelector('.n1')
    var n2 = document.querySelector('.n2')
    var n3 = document.querySelector('.n3')
    var n4 = document.querySelector('.n4')

    var r1 = Number(n1.value)
    var r2 = Number(n2.value)
    var r3 = Number(n3.value)
    var r4 = Number(n4.value)

    var res = document.querySelector('.res')

    s = [(r1*r4) - (r2*r3)]

    res.innerHTML = `<br> [(${r1}*${r4}) - (${r2}*${r3})] = <strong>${s}</strong>`

}

/* Calculora da ordem 3 */
function calcular3(){
    var n1 = document.querySelector('.n1a')
    var n2 = document.querySelector('.n2a')
    var n3 = document.querySelector('.n3a')
    var n4 = document.querySelector('.n4a')
    var n5 = document.querySelector('.n5a')
    var n6 = document.querySelector('.n6a')
    var n7 = document.querySelector('.n7a')
    var n8 = document.querySelector('.n8a')
    var n9 = document.querySelector('.n9a')

    var r1 = Number(n1.value)
    var r2 = Number(n2.value)
    var r3 = Number(n3.value)
    var r4 = Number(n4.value)
    var r5 = Number(n5.value)
    var r6 = Number(n6.value)
    var r7 = Number(n7.value)
    var r8 = Number(n8.value)
    var r9 = Number(n9.value)

    var res = document.querySelector('.res-a')

    s = ([(r1*r5*r9)+(r2*r6*r7)+(r3*r4*r8)] - [(r3*r5*r7)+(r1*r6*r8)+(r2*r4*r9)])

    res.innerHTML = `<br> {[(${r1}*${r5}*${r9})+(${r2}+${r6}+${r7})+(${r3}+${r4}+${r8})] - [(${r3}+${r5}+${r7})+(${r1}+${r6}+${r8})+(${r2}+${r4}+${r9})]} = <strong>${s}</strong>`
}


/* Calculora da ordem 4 */
function calcular4(){
    var n1 = document.querySelector('.n1b')
    var n2 = document.querySelector('.n2b')
    var n3 = document.querySelector('.n3b')
    var n4 = document.querySelector('.n4b')
    var n5 = document.querySelector('.n5b')
    var n6 = document.querySelector('.n6b')
    var n7 = document.querySelector('.n7b')
    var n8 = document.querySelector('.n8b')
    var n9 = document.querySelector('.n9b')
    var n10 = document.querySelector('.n10b')
    var n11 = document.querySelector('.n11b')
    var n12 = document.querySelector('.n12b')
    var n13 = document.querySelector('.n13b')
    var n14 = document.querySelector('.n14b')
    var n15 = document.querySelector('.n15b')
    var n16 = document.querySelector('.n16b')

    var r1 = Number(n1.value)
    var r2 = Number(n2.value)
    var r3 = Number(n3.value)
    var r4 = Number(n4.value)
    var r5 = Number(n5.value)
    var r6 = Number(n6.value)
    var r7 = Number(n7.value)
    var r8 = Number(n8.value)
    var r9 = Number(n9.value)
    var r10 = Number(n10.value)
    var r11 = Number(n11.value)
    var r12 = Number(n12.value)
    var r13 = Number(n13.value)
    var r14 = Number(n14.value)
    var r15 = Number(n15.value)
    var r16 = Number(n16.value)

    var res = document.querySelector('.res-b')

    var c11 = [((-1)**2) * ([(r6*r11*r16)+(r7*r12*r14)+(r8*r10*r15)] - [(r8*r11*r14)+(r6*r12*r15)+(r4*r10*r16)])]
    var c21 = [((-1)**3) * ([(r2*r11*r16)+(r3*r12*r14)+(r4*r10*r15)] - [(r4*r11*r14)+(r2*r12*r15)+(r3*r10*r16)])]
    var c31 = [((-1)**4) * ([(r2*r7*r16)+(r3*r8*r14)+(r4*r6*r15)] - [(r4*r7*r14)+(r2*r8*r15)+(r3*r6*r16)])]
    var c41 = [((-1)**5) * ([(r2*r7*r12)+(r3*r8*r10)+(r4*r6*r11)] - [(r4*r7*r10)+(r2*r8*r11)+(r3*r6*r12)])]

    s = [(r1*(c11)) + (r5*(c21)) + (r9*(c31)) + (r13*(c41))]

    res.innerHTML = `{[(${r1}*(${c11})) + (${r5}*(${c21})) + (${r9}*(${c31})) +  (${r13}*(${c41}))]} = <strong>${s}</strong>`
} 