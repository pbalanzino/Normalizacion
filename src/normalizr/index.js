/** @format */

import { schema, normalize, denormalize } from "normalizr";

const text = new schema.Entity("text");
const message = new schema.Entity("message", {});

/* { 
    author: {
        id: 'mail del usuario', 
        nombre: 'nombre del usuario', 
        apellido: 'apellido del usuario', 
        edad: 'edad del usuario', 
        alias: 'alias del usuario',
        avatar: 'url avatar (foto, logo) del usuario'
    },
    text: 'mensaje del usuario'
}
 */
