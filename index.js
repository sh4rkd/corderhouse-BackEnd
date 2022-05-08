const fs = require('fs')

class Contenedor {
    constructor(name) {
        this.fileName = name
        this.countID = 0
        this.content = []
    }

    async write() { //Método que escribe/sobreescribe: de este manera queda más limpio el código de los otros métodos
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.content))
    }

    save(object) {
        this.countID++ //Aumento la propiedad que va guardando el ID más alto
        object["id"] = this.countID //Agrego la propiedad id al objeto pasado como parámetro
        this.content.push(object) //Agrego el objeto al contenido(array)
        this.write() //Agrego el objeto al archivo
        return `El id del objeto añadido es ${this.countID}` //Retorna el ID (lo solicita la consigna)
    }

    async getAll() { //Devuelve un array con los objetos presentes en el archivo
        return this.content
    }

    getById(id) { //Recibe un id y devuelve el objeto con ese id, o null si no está.
        let result
        if (this.content !== []) {
            result = this.content.find(x => x.id === id)
            if (result === undefined) {
                result = null
            }
        } else {
            result = 'El archivo está vacío'
        }
        return result
    }

    deleteById(id) { //Elimina del archivo el objeto con el id buscado
        let result
        if (this.content !== []) {
            let newContent = this.content.filter(x => x.id !== id)
            this.content = newContent
            this.write() //SobreEscribo el archivo
            result = 'OK'
        } else {
            result = `El archivo está vacío`
        }
        return result
    }

    async deleteAll() { //Elimina todos los objetos presentes en el archivo.
        this.content = this.content.splice(0, this.content.length)
        this.write()
    }
}

const execute = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Pulsera",
        price: 799,
        thumbnail: "https://www.amazon.com.mx/Mayfer-Colgante-Colibr%C3%AD-Esmeralda-Swarovski/dp/B088LNJ6GH/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=UY18NB8NINYO&keywords=collar&qid=1651562548&sprefix=colla%2Caps%2C115&sr=8-1"
    })

    contenedor.save({
        title: "Freidora Eléctrica",
        price: 1877,
        thumbnail: "https://articulo.mercadolibre.com.mx/MLM-932645785-freidora-electrica-de-aire-55l-con-instructivo-y-recetario-_JM#searchVariation=88009647820&position=1&search_layout=stack&type=pad&tracking_id=5e4304b5-8ffd-428e-9483-b737dd217e77&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZWMzM2ExZmUtZTY0Yy00NGY2LTgxMzItNzliMDY5MDgxYTYx"
    })

    contenedor.save({
        title: "iPhone 12",
        price: 21999,
        thumbnail: "https://www.amazon.com.mx/Apple-Nuevo-iPhone-12-256-GB/dp/B08L7TKCPP/ref=sr_1_1_sspa?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CGK004KZ2MHJ&keywords=iphone+12&qid=1651562576&sprefix=iphone+12%2Caps%2C107&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.8a46d436-f8dd-421d-a49c-494b5d1632c6&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3Slc4MFlBQ0ROMzAmZW5jcnlwdGVkSWQ9QTA5ODc5MTQxUDlHVFo3QklIS0FVJmVuY3J5cHRlZEFkSWQ9QTA0MzQ5MTMySlhZVzVMM1E3WFJEJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

execute();