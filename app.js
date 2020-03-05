document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir');
  
        let monedas = {
            "dolar":1,
            "colones(SV)":8.75,
            "yenes":111.27,
            "Rupia":69.75,
            "Lempiras":24.36,
            "Peso(MX)":19.36,
            "Bitcoin":0.00026},
           
            almacenamiento = {
            "megabyte":1,
            "bit": 8388608,
            "kilobyte":1024,
            "Gigabyte":0.0009765625,
            "Terabyte":0.00000095367431660625},

            longitudes = {
            "Metro": 1,
            "Cm": 100,
            "Pulgada":39.3701,
            "pie":3.28084,
            "Varas":1.1963081929167,
            "yarda":1.09361,
            "millanautica":0.00539957,
            "km": 0.001,
            "milla": 0.000621337};
               
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "almacenamiento"){
          $res.innerHTML = `Respuesta: ${ (almacenamiento[a]/almacenamiento[de]*cantidad) }`;
        } else if(opcion.value == "longitud"){
            $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2) }`;
        };
    });
  });
  
  
  function elegir_opcion() {
    let opcion = document.getElementById('cboConvertir'),
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');

    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion.value == "moneda"){
      var  array = ["dolar!Dolar","colones(sv)! Colones(sv)","yenes! Yenes","rupia! Rupia","lempiras! Lempiras","peso(mx)! Peso(MX)","bitcoin! Bitcoint"]; 
    } else if(opcion.value == "longitud"){
      var array = ["metro! Metro","cm! Cm","pulgada! Pulgada","pie! Pie", "varas! Varas","yardas! Yardas","km! Km","millas! Millas"];
    } else if(opcion.value == "almacenamiento"){
      var array = ["megabyte! Megabyte","bit! Bit","kilobyte! Kilobyte","gigabyte! Gigabyte","terabyte! Terabyte"];
    };
  
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      de1.options.add(newop);
    };
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      a1.options.add(newop);
    };
   }