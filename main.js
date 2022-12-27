import {conectionApi} from "./conectionApi.js"

const containerVideos = document.querySelector(".videos__container")
mostrarVideos()

async function mostrarVideos(){
    const listaVideos = await conectionApi.conectaApi()
    listaVideos.forEach(video => {
        montaLayoutVideos(video)
    });
}

export default function montaLayoutVideos(video){
    const videoNovo = document.createElement("li")
    videoNovo.classList.add("videos__item")
    videoNovo.innerHTML = `<iframe width="100%" height="72%" src="${video.url}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="descricao-video">
                                <img src="${video.imagem}" alt="logo canal alura">
                                <h3>${video.titulo}</h3>
                                <p>${video.descricao} mil visualizações</p>
                            </div>`
    containerVideos.appendChild(videoNovo)                
}