
const knexLib = require('knex')


class ClienteSql {
    constructor(config, nombreTabla) {
        this.knex = knexLib(config)
        this.dbName = nombreTabla
    }

    crearTabla() {
        if (this.dbName === "mensajes") {
            return this.knex.schema.dropTableIfExists(`${this.dbName}`)
                .finally(() => {
                    return this.knex.schema.createTable(`${this.dbName}`, table => {
                        table.string('hora').notNullable();
                        table.string('email', 50).notNullable();
                        table.string('mensaje', 100).notNullable();
                    })
                })
        } else if (this.dbName === "productos") {
            return this.knex.schema.dropTableIfExists('productos')
                .finally(() => {
                    return this.knex.schema.createTable('productos', table => {
                        table.increments('id').primary();
                        table.string('title', 50).notNullable();
                        table.float('price').notNullable();
                        table.string('thumbnail', 300);
                    })
                })
        }

    }

    insertarEnDb(producto) {
        return this.knex(`${this.dbName}`).insert(producto)
    }

    listarDb() {
        return this.knex(`${this.dbName}`).select('*')
    }

    close() {
        this.knex.destroy();
    }
}

module.exports = ClienteSql
