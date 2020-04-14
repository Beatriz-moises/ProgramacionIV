var appBuscarAlumnos = new Vue({
    el:'#frm-buscar-alumnos',
    data:{
        misalumnos:[],
        valor:''
    },
    methods:{
        buscarAlumnos:function(){
            fetch(`private/modulos/alumnos/procesos.php?proceso=buscarAlumno&alumnos=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misalumnos = resp;
            });
        },
        modificarAlumno:function(alumnos){
            appalumnos.alumnos = alumnos;
            appalumnos.alumnos.accion = 'modificar';
        },
        eliminarAlumno:function(IdAlumnos){
            fetch(`private/modulos/alumnos/procesos.php?proceso=eliminarAlumno&alumnos=${IdAlumnos}`).then(resp=>resp.json()).then(resp=>{
                this.buscarAlumnos();
            });
        }
    },
    created:function(){
        this.buscarAlumnos();
    }
});