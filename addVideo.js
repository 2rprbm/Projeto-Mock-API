import { conectionApi } from "./conectionApi.js"

const botaoAdicionaNovoVideo = document.querySelector(".formulario__botao")

botaoAdicionaNovoVideo.addEventListener('click', (evento) => {
    evento.preventDefault()
    adicionarNovoVideo()
    window.location.href = "/pages/envio-concluido.html";
})

async function adicionarNovoVideo(){
    const novoVideo = {
        tituloNovo: document.querySelector("[data-titulo").value,
        descricao: Math.trunc(Math.random()*100),
        urlNova: document.querySelector("[data-url").value,
        imagemNova: document.querySelector("[data-imagem").value
    }
    try{
        await conectionApi.adicionaVideoApi(novoVideo.tituloNovo, novoVideo.descricao, novoVideo.urlNova, novoVideo.imagemNova)
    }catch(e){
        console.log(e)
    }
}