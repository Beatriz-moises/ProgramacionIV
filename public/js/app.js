var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded", event => {
   
    let alumnos = document.getElementById("alumnos"); // Instanciamos los elementos
    let docentes = document.getElementById("docentes"); //

    //SE AGREGAN LOS EVENTOS LISTENER PARA CADA VISTA
    alumnos.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "alumnos";
        colocarVista(modulo);

    });

    docentes.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "docentes";
        colocarVista(modulo);
    
    });
}); 
 function colocarVista(modulo){

    fetch(`public/vistas/${modulo}/${modulo}.html`).then( resp => resp.text()).then( resp => {

        document.getElementById(`vistas-${modulo}`).innerHTML = resp;
        let btnCerrar = $(".close");

        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });

        let cuerpo = $("body"), script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
            
    });

 }