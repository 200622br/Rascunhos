let res = document.getElementById('res')

function calcula(){
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let imc = 0.0
    imc = peso/(altura*altura)

    if(imc<18.5){
    res.innerHTML = "Você está abaixo do peso e seu IMC é " + imc.toFixed(1)}

    else if((imc>=18.5) && (imc<=24.9)){
    res.innerHTML = "Você está com o peso ideal e seu IMC é " + imc.toFixed(1)}

    else if((imc>=25) && (imc<=29.9)){
    res.innerHTML = "Você está acima do peso e seu IMC é " + imc.toFixed(1)}

    else if((imc>=30)&&(imc<=34.9)){
    res.innerHTML = "Você está com Obesidade grau I e seu IMC é " + imc.toFixed(1)}

    else if((imc>=35)&&(imc<=40)){
    res.innerHTML = "Você está com Obesidade grau II e seu IMC é " + imc.toFixed(1)}
    
    else if(imc>40){
    res.innerHTML = "Você está com Obesidade grau III e seu IMC é " + imc.toFixed(1)}


}