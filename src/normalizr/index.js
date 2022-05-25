/** @format */

import { schema, normalize, denormalize } from 'normalizr'

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

const user = new schema.Entity('users')
const comment = new schema.Entity('comments', {
  author: user,
  text: comment,
})
