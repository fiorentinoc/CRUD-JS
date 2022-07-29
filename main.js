//Clase Alta-Lectura-Actualizar-Borrar
class ALAB{
    #nombreTabla = null
    #data = null

    constructor(nombreTabla){
        this.#setNombreTabla(nombreTabla)
        this.#setData()
    }

    #setNombreTabla(nombreTabla){
		this.#nombreTablaValidar(nombreTabla);
        this.#nombreTabla = nombreTabla;
	}
    
    #setData(){
        /* this.#data = [] */
        this.#data = [
            { id: 1, cat: "anillos", mod: "royal", precio: 350 },
            { id: 2, cat: "anillos", mod: "solitario", precio: 200 },
            { id: 3, cat: "aros", mod: "nature", precio: 150 },
            { id: 4, cat: "dijes", mod: "mariposa", precio: 50 },
        ]
    }

    #nombreTablaValidar(nombreTabla){
		if(nombreTabla == undefined) throw new Error("Nombre de tabla requerida!");
    }

    /* #guardar(){
        let datosAGuardar = JSON.stringify(this.#data)
    } ---Analizar donde y como grabar (qué persistencia usar)*/

    alta(data){
        this.#data.push(data)
        return this.#data.length
    }

    leer(id){
        return this.#data[id]
    }

    actualizar(id, data){
        this.#data[id] = data
        return true
    }

    borrar(id){
        this.#data.splice(id, 1)
        return true
    }

    leerTodo(){
        return this.#data
    }

    buscarCat(str){
        let busqueda = this.#data.find((el) => el.cat === str)
        return busqueda
    }

    filtrar(str){
        let filtro = this.#data.filter((el) => el.cat.includes(str))
        return filtro
    }

}

function app() {
    //Se crea tabla mediante la funcion/metodo constructor
    let sistema = new ALAB("dbcontainer")

    // Agrega un objeto al Array
    sistema.alta({id: 5, cat: "dijes", mod: "flor", precio: 50})

    //La siguiente funciona como Funcion de orden superior(funcion que recibe una funcion)
    console.log(sistema.leerTodo())

    // Metodo para buscar x categoria
    let bus = prompt("Indique la categoria a BUSCAR (aros/anillos/dijes)>")
    console.log(sistema.buscarCat(bus))

    //Metodo para filtrar
    let fil = prompt("Indique la categoria a FILTRAR (aros/anillos/dijes)>")
    console.log(sistema.filtrar(fil))
    alert(JSON.stringify(sistema.filtrar(fil)))

}
app();