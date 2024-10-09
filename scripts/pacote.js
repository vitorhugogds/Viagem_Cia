class Pacote{
    constructor(srcImg, nome, descricao, comentario, post){
        this.srcImg = srcImg;
        this.nome = nome;
        this.descricao = descricao;
        this.comentario = comentario;
        this.post = post;
    }
}

var todosPacotes = []
todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Nome Lugar", "SUBTITULO", "LOREM", "Post por Pedro"))



todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Assunto", "SUBTITULO", "LOREM", "Post por Pitter Parker"))
    
    

todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Viagem", "SUBTITULO", "LOREM", "Post por Hulk"))



todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Viagem", "SUBTITULO", "LOREM", "Post por Hulk"))



todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Viagem", "SUBTITULO", "LOREM", "Post por Hulk"))



todosPacotes.push(new Pacote("../docs/archives/images/cortado/natureza4.png","Viagem", "SUBTITULO", "LOREM", "Post por Hulk"))




todosPacotes.forEach(cadaPacote => {
    document.getElementById("comentarios").innerHTML += `
        <div style="width: 33rem; margin:10px; border:1px black solid; box-shadow: 5px 0px 10px black; border-radius: 10px;" background-color: white;>
            <div id="comentarioScript">
                <img src="${cadaPacote.srcImg}" alt="..." style="padding: 10px;">
                <div style="padding: 25px 0px 0px 10px ; width: 200px;">
                    <h5>${cadaPacote.nome}</h5>
                    <p>${cadaPacote.descricao}</p>
                    <p >${cadaPacote.comentario}</p>
                    <p style="padding: 25px 0px 0px 0px; width: 100px;">${cadaPacote.post}</p>
                </div>
            </div>
        </div>
    
    `

});