document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();

        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversores").value,
            $res = document.querySelector("#lblRespuesta");
        let monedas={
            'dolar':1,
            'euro':0.92,
            'quetzal':7.63,
            'lempira':24.86,
            'cordoba':34.20
        };
        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;
        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversores").value,
            $res = document.querySelector("#lblRespuesta");
        let pesos ={
            'libra':1,
            'onza':16,
            'gramo':453.592,
            'kilogramo':0.453592,
            'tonelada':1000
        };
        $res.innerHTML = `Respuesta: ${pesos[a] / pesos [de] * cantidad }`;
    });
});