const numeroA = document.getElementById('id-A')
const numeroB = document.getElementById('id-B')


const botaosubmit = document.querySelector('button');

botaosubmit.addEventListener('click', fnSoma)


function fnSoma(e){
    const ValorB = numeroB.value
    const valorA = numeroA.value
    e.preventDefault(e)
    if(ValorB > valorA) {
        alert("VALIDOU COM SUCESSO")
    } else{
        alert("infelizmente a proposta nao e essa")
    }
    
    

    
    

}



