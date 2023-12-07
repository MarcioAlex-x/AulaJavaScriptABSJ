let nome = document.querySelector("#name")
let n1 = document.querySelector("#n1")
let n2 = document.querySelector("#n2")
let n3 = document.querySelector("#n3")
let mediaField = document.querySelector("#media")
let mensagem = document.querySelector("#mensagem")
let nav=document.querySelector("#nav")
let footer=document.querySelector("#footer")

function calcularMedia(){
    const media = (parseFloat(n1.value)+parseFloat(n2.value)+parseFloat(n3.value))/3
    
    if(n1.value<0 
        || n1.value>10 
        || n2.value<0 
        || n2.value>10 
        || n3.value<0 
        || n3.value>10 
        || !n1.value 
        || !n2.value 
        || !n3.value 
        || !nome.value){
        alert("Certifique de que os valores estão corretos")
    }else{
        mediaField.innerHTML= media.toFixed(1)

        if(media>=7){
            mensagem.innerHTML=nome.value + ' está arpovado.'
            nav.classList.add("nav-aprovado")
            footer.classList.add("nav-aprovado")
            btn.classList.add("nav-aprovado")
        }else if(media>=4){
            mensagem.innerHTML=nome.value + ' está em recuperação.'
            nav.classList.add("nav-recuperacao")
            footer.classList.add("nav-recuperacao")
            btn.classList.add("nav-recuperacao")
        }else if(media<4){
            mensagem.innerHTML=nome.value + " está reprovado."
            nav.classList.add("nav-reprovado")
            footer.classList.add("nav-reprovado")
            btn.classList.add("nav-reprovado")
        }
    }
}










/* function calcularMedia() {
    const notas = notasInputs.map(input => parseFloat(input.value));
    const nomeValido = nome.value.trim() !== '';
    const notasValidas = notas.every(nota => nota >= 0 && nota <= 10);

    if (!nomeValido || !notasValidas) {
        alert("Erro: Verifique os valores inseridos.");
    } else {
        const media = calcularMediaNotas(notas);
        mediaField.innerHTML = media.toFixed(1);
    }
} */
    
