import montaLayoutVideos from "./main.js";

async function conectaApi(){
    try{
        const listaVideosApi = await fetch("http://localhost:3000/videos");
        let listaVideosApiConvertida = await listaVideosApi.json();
        return listaVideosApiConvertida
    } catch (e){
        return console.log(e)
    }
}

async function adicionaVideoApi(titulo, descricao, url, imagem){
    const novoVideo = await fetch("http://localhost:3000/videos",{
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        titulo: titulo,
        descricao: descricao,
        url: url,
        imagem: imagem 
    })
});
    if (!novoVideo.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
}

async function pesquisaTermoApi(termoPesquisa){
    const listaVideosExistentes = await conectaApi()   
    listaVideosExistentes.forEach(video => {
        const expressaoRegularFiltroPesquisa = new RegExp(termoPesquisa, "i");
        if (expressaoRegularFiltroPesquisa.test(video.titulo)) {
             montaLayoutVideos(video)
        }
    }); 
    if (!listaVideosExistentes.ok) {
        throw new Error("Não foi possível carregar a lista de vídeos")
    }

}

export const conectionApi = {
    conectaApi,    
    adicionaVideoApi,
    pesquisaTermoApi
}