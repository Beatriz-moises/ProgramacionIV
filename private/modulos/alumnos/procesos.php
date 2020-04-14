<?php 
include('../../Config/Config.php');
$alumnos = new alumno($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$alumnos->$proceso( $_GET['alumno'] );
print_r(json_encode($alumnos->respuesta));

class alumno{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($alumnos){
        $this->datos = json_decode($alumnos, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el codigo del estudiante';
        }
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre del estudiante';
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'por favor ingrese la direccion del estudiante';
        }
        $this->almacenar_alumnos();
    }
    private function almacenar_alumnos(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO alumnos (codigo,nombre,direccion,telefono) VALUES(
                        "'. $this->datos['codigo'] .'",
                        "'. $this->datos['nombre'] .'",
                        "'. $this->datos['direccion'] .'",
                        "'. $this->datos['telefono'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                   UPDATE alumnos SET
                        codigo     = "'. $this->datos['codigo'] .'",
                        nombre     = "'. $this->datos['nombre'] .'",
                        direccion  = "'. $this->datos['direccion'] .'",
                        telefono   = "'. $this->datos['telefono'] .'"
                    WHERE IdAlumnos = "'. $this->datos['IdAlumnos'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscarAlumnos($valor=''){
        $this->db->consultas('
            select alumnos.IdAlumnos, alumnos.codigo, alumnos.nombre, alumnos.direccion, alumnos.telefono
            from alumnos
            where alumnos.codigo like "%'.$valor.'%" or alumnos.nombre like "%'.$valor.'%"
        ');
        return $this->respuesta = $this->db->obtener_datos();
    }
    public function eliminarAlumno($IdAlumnos=''){
        $this->db->consultas('
            delete alumnos
            from alumnos
            where alumnos.IdAlumnos = "'.$IdAlumnos.'"
        ');
        $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }
}
?>