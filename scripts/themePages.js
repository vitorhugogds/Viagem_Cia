var theme = document.getElementById("theme");
themeImg = document.getElementById("themeImg");


theme.addEventListener('click', trocarTema);

function trocarTema(){
    let body = document.querySelector('body');

    //hasAtributes = verifica se tem atributo
    //gerAtributes = 


    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme" , "light")
        themeImg.setAttribute("src","../docs/archives/images/icons/moon-fill.svg")
        theme.classList.replace("btn-outline-light", "btn-outline-dark")
    }else{
        body.setAttribute("data-bs-theme" , "dark")
        themeImg.setAttribute("src", "../docs/archives/images/icons/sun-fill.svg")
        theme.classList.replace("btn-outline-dark", "btn-outline-light")

    }
}