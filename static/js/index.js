bt_inicio = document.getElementById("bt-inicio");
bt_meus_projetos = document.getElementById("bt-meus-projetos");
bt_sobre = document.getElementById("bt-sobre");

bt_inicio.addEventListener("click",
    ()=>{window.location.href = '/';}
);

bt_meus_projetos.addEventListener("click",
    ()=>{window.location.href = '/meus_projetos';}
);

bt_sobre.addEventListener("click",
    ()=>{window.location.href = '/sobre';}
);
