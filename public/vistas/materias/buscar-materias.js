  
var appBuscarMateria = new Vue({
    el:'#frm-buscar-materias',
    data:{
        mismaterias:[],
        valor:''
    },
    methods:{
        buscarMateria:function(){
            fetch(`private/modulos/materias/procesos.php?proceso=buscarMateria&materia=${this.valor}`).then(resp=>resp.json()).then(resp=>{
               //console.log(resp);
                this.mismaterias = resp;
            });
        },
        modificarMateria:function(materia){
            appmateria.materia = materia;
            appmateria.materia.accion = 'modificar';
        },
        eliminarMateria:function(IdMateria){
            fetch(`private/modulos/materias/procesos.php?proceso=eliminarMateria&materia=${IdMateria}`).then(resp=>resp.json()).then(resp=>{
                this.buscarMateria();
            });
        }
    },
    created:function(){
        this.buscarMateria();
    }
});