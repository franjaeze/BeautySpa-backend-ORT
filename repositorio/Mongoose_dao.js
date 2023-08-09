const { MongoClient, Document, ObjectId } = require('mongodb');
const { mongo } = require('mongoose');


module.exports = class Mongoose_dao {
  constructor() {
    this.uri = process.env.MONGO_URL
    this.cliente = new MongoClient(this.uri)
    this.dbName = 'CentroEstetica'
    this.db = null
    this.coleccion = null
  }



  async conectar(coleccion) {
    try {
      await this.cliente.connect();
      this.db = this.cliente.db(this.dbName);
      if (coleccion) {
        this.coleccion = this.db.collection(String(coleccion));
       
      } else {
        throw new Error('No se ha especificado una colección');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error al conectar a la base de datos');
    }
  }

  async desconectar() {
    try {
      await this.cliente.close()
 
    } catch (error) {
      console.log("Error desconectando");
    }
  }

  //////////////////////////////////////////////////////////////////


  async buscarPorDNI(_dni = null) {
    if (_dni) {
      if (typeof _dni === "string") {
        _dni = parseInt(_dni)
      }
      let resultado = await this.coleccion.findOne({ dni: _dni })

      return resultado;
    }
  }

  async buscarPorTipo(_tipo = null) {
    if (_tipo) {

      let resultado = await this.coleccion.find({ tipoDeServicio: _tipo }).toArray()

      return resultado;
    }
  }

  async buscarEmpleadoTipoServicio(_tipo = null) {
    if (_tipo) {
      let resultado = await this.coleccion.find({ tipoDeServicio: _tipo }).toArray()

      return resultado;
    }
  }


  async existeDNI(_dni = null) {
    if (_dni) {
      if (typeof _dni === "string") {
        _dni = parseInt(_dni)
      }
      let resultado = await this.coleccion.findOne({ dni: _dni })

      return resultado;
    }
  }

  async buscar(id = null) {
    if (!id) {
      return this.coleccion;
    }
    try {
      const objectId = new ObjectId(id);
      const resultado = await this.coleccion.findOne({ _id: objectId });
      return resultado;
    } catch (error) {
      console.log(error);
      throw new Error('Error al buscar el elemento en el turno');
    }
  }



  async listar() {
    try {
      const documentos = await this.coleccion.find().toArray();
      return documentos;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la lista de elementos de la colección');
    }
  }


  async guardar(elemento) {
    try {
      const result = await this.coleccion.insertOne(elemento);
    
      console.log('resultaod es mongo ' +  JSON.stringify(result));
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error al guardar el elemento en la colección');
    }
  }

  async quitar(id = null) {
    if (!id) {
      return this.coleccion;
    }

    try {
      const objectId = new ObjectId(id);
      const resultado = await this.coleccion.deleteOne({ _id: objectId });

      if (resultado.deletedCount === 1) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar el elemento de la colección');
    }
  }


  async cambiar(id, actualizacion) {
    try {
      const objectId = new ObjectId(id);
      const result = await this.coleccion.updateOne({ _id: objectId }, { $set: actualizacion });
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar el elemento de la colección');
    }
  }

  async countDocuments(property) {
    try {
      let documentos = null
      if (property) {
        documentos = await this.coleccion.countDocuments(property);
      } else {
        documentos = await this.coleccion.countDocuments();
      }
      return documentos;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la cantidad de los turnos');
    }
  }


};