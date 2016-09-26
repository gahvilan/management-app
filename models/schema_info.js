var Schema_model = require('mongoose').Schema;

var schema_info_model = new Schema_model({
    name: String,
    int_basica: {
        name: String,
        values: Array
    },
    experiencia: {
        name: String,
        values: Array
    },
    iniciativa: {
        name: String,
        values: Array
    },
    esf_fisico: {
        name: String,
        values: Array  
    },
    cons_visual_metal: {
        name: String,
        values: Array
    },
    sup_personal: {
        name: String,
        values: Array
    },
    mat_equipo: {
        name: String,
        values: Array
    },
    metodo_proc: {
        name: String,
        values: Array
    },
    inf_confidencial: {
        name: String,
        values: Array
    },
    amb_trabajo: {
        name: String,
        values: Array
    },
    riesgos: {
        name: String,
        values: Array
    }
});

var SchemaInfoModel = module.export = schema_info_model;