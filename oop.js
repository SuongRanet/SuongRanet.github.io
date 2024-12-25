let input = document.querySelector('.input')
let clickk = document.querySelector('.click')
let output = document.querySelector('.output')

function kun (){
    let number = Number(input.value);
    let outputhtml = " ";

    if (input.value === "") {
        output.innerHTML = "Jos mae hg min dak lek mao" ;
        return;
    }

    if (input.value == 0) {
        output.innerHTML = "Dak 0 rk mae hg ey" ;
        return;
    }
    
    for (let i = 1; i <= 12; i++) {
        outputhtml += '<p>';
        outputhtml += number + " x " + i + " = " +( number*i );
        outputhtml += '</p>';
    }
    output.innerHTML = outputhtml ;
}
clickk.addEventListener('click',kun);