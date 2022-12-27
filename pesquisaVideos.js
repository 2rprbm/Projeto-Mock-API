import { conectionApi } from "./conectionApi.js"


const containerVideos = document.querySelector(".videos__container")

const botaoPesquisar = document.querySelector(".pesquisar__botao")
botaoPesquisar.addEventListener('click', (evento) => {
    evento.preventDefault()
    const termoPesquisa = document.querySelector("#pesquisar").value
    if (termoPesquisa){
        containerVideos.innerHTML = ""
        pesquisaVideos(termoPesquisa)
    } else{
        return
    }
})

const inputPesquisar = document.querySelector("#pesquisar")
inputPesquisar.addEventListener('blur', (evento) => {
    const termoPesquisa = inputPesquisar.value
    if (termoPesquisa == ""){
        window.location.reload()
    } else{
        return
    }
})


async function pesquisaVideos(termoPesquisado){
    try{
        const resultado = await conectionApi.pesquisaTermoApi(termoPesquisado)
    } catch(e) {
        console.log(e)
    }

}