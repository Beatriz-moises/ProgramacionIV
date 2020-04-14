var appBuscarAlumnos = new Vue({
    el:'#frm-buscar-alumnos',
    data:{
        misalumnos:[],
        valor:''
    },
    methods:{
        buscarAlumno:function(){
            fetch(`private/modulos/alumnos/procesos.php?proceso=buscarAlumno&alumno=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misalumnos = resp;
            });
        },
        modificarAlumno:function(alumno){
            appalumno.alumno = alumno;
            appalumno.alumno.accion = 'modificar';
        },
        eliminarAlumno:function(IdAlumnos){
            fetch(`private/modulos/alumnos/procesos.php?proceso=eliminarAlumno&alumno=${IdAlumnos}`).then(resp=>resp.json()).then(resp=>{
                this.buscarAlumno();
            });
        }
    },
    created:function(){
        this.buscarAlumno();
    }
});