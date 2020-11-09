
class AbstractPersona {
    id;
    parent;
    nombre;
    estado;
    telefono;
    correo;
    direccion;
    tipo;


    constructor(id,nombre,estado,telefono,correo,direccion,tipo) {
      if (this.constructor == AbstractPersona) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      else{
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.tipo = tipo;
      }
    }
  
    
    //Establece el padre composite
    setParent(parent) {                                               
        this.parent = parent;
    }


    //Retorna el padre del composite
    getParent() {                                                     
        return this.parent;
    }


    
    anadirHijo(){
      throw new Error("Method 'anadirHijo()' must be implemented.");
    }

    removerHijo(){
      throw new Error("Method 'removerHijo()' must be implemented.");
    }

    isComposite() {
        return false;
    }


    operation() {
        throw new Error("Method 'operation()' must be implemented.");
    }

    setEstado() {
      throw new Error("Method 'setEstado()' must be implemented.");
    }


    getEstado() {
      throw new Error("Method 'getEstado()' must be implemented.");
    }

  }

export default AbstractPersona;

  