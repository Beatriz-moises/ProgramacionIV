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
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.9,
            "cordoba":34.19,
            "bitcoin":0.00011,
            "Boliviano":6.90,
            "Balboa":1.00,
            "Lira Turca":6.13,
            "Yen Japones":106.27},

            peso = {
            "gramo": 1000,
            "kilogramo": 1,
            "libra": 2.20462,
            "onza": 35.274,
            "tonelada": 0.01,
            "miligramo":1e+6,
            "microgramo":1e+9,
            "Stone":0.157473,
            "Tonelada Corta":0.00110231,
            "Tonelda larga":0.000984207 },

            almacenamiento = {
            "bit": 8,
            "nibble":2,
            "kilobite":0.00781,
            "megabite":0.00001,
            "byte": 1,
            "megabyte":0.00098},

            longitudes = {
            "milimetro": 1000,
            "centimetro": 100,
            "metro": 1,
            "yarda":10.9361,
            "pie":32.8084,
            "pulgada":393.701,
            "millanautica":0.00539957,
            "kilometro": 0.001,
            "milla": 0.000621371};
               
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "peso"){
            $res.innerHTML = `Respuesta: ${ (peso[a]/peso[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "almacenamiento"){
          $res.innerHTML = `Respuesta: ${ (almacenamiento[a]/almacenamiento[de]*cantidad) }`;
        } else if(opcion.value == "longitud"){
            $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2) }`;
        };
    });
  });
  
  //llenar los select box 
  function elegir_opcion() {
    let opcion = document.getElementById('cboConvertir'),
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');
    //limpia antes de actualizar
    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion.value == "moneda"){
      var  array = ["dolar!Dolar","euro!Euro","quetzal!Quetzal","lempira!Lempira","cordoba!Cordoba","Bitcoin!Bitcoin","Balboa!Balboa","Lira Turca! Lira Turca","Yen Japones! Yen Japones"]; 
    } else if(opcion.value == "longitud"){
      var array = ["milimetro!Milimetro","centimetro!Centimetro","metro!Metro","kilometro!Kilometro","milla!Milla","yarda! Yarda","pie! Pie","pulgada! Pulgada","milla nautica! Milla nautica"];
    } else if(opcion.value == "almacenamiento"){
      var array = ["bit!Bit","byte!Byte","kilobite!Kilobite","megabite!Megabite","nibble! Nibble","megabyte! Megabyte"];
    } else if(opcion.value == "peso"){
      var array = ["gramo!Gramo","kilogramo!Kilogramo","libra!Libra","onza!Onza","tonelada!Tonelada","miligramo! Miligramo","microgramo! Microgramo","stone! Stone","tonelada corta! Tonelada Corta","tonelada larga! Tonelada Larga"];
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